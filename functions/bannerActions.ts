'use server'

import { prisma } from "@/lib/prisma"
import BannerSchema from "@/schemas/BannerSchema"
import { parseWithZod } from "@conform-to/zod"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

/* ------------------------------ createBanner ------------------------------ */

export const createBanner = async (prevState: unknown, formData: FormData) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect('/')
  }

  const submission = parseWithZod(formData, {
    schema: BannerSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  try {
    await prisma.banner.create({
      data: {
        title: submission.value.title,
        imageString: submission.value.imageString
      }
    })
  } catch (error) {
    console.error(error)
  }

  redirect('/dashboard/banner')
}


/* ------------------------------ deleteBanner ------------------------------ */

export const deleteBanner = async (formData: FormData) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect('/')
  }

  try {
    await prisma.banner.delete({
      where: { id: formData.get('bannerId') as string }
    })
  } catch (error) {
    console.error(error)
  }
  redirect('/dashboard/banner')
}