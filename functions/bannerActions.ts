'use server'

import { prisma } from "@/lib/prisma"
import BannerSchema from "@/schemas/BannerSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"
import { IsAdminUser } from "./authUser"

/* ------------------------------ createBanner ------------------------------ */

export const createBanner = async (prevState: unknown, formData: FormData) => {
  await IsAdminUser()

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
  await IsAdminUser()

  try {
    await prisma.banner.delete({
      where: { id: formData.get('bannerId') as string }
    })
  } catch (error) {
    console.error(error)
  }
  redirect('/dashboard/banner')
}