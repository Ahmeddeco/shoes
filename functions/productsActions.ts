'use server'

import { redirect } from "next/navigation"
import { parseWithZod } from '@conform-to/zod'
import ProductSchema from "@/schemas/ProductSchema"
import { prisma } from "@/lib/prisma"
import { IsAdminUser } from "./authUser"


/* ------------------------------ createProduct ----------------------------- */

export const createProduct = async (prevState: unknown, formData: FormData) => {
  await IsAdminUser()

  const submission = parseWithZod(formData, {
    schema: ProductSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const splitedImages = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim()))


  try {

    await prisma.product.create({
      data: {
        name: submission.value.name,
        description: submission.value.description,
        status: submission.value.status,
        price: submission.value.price,
        images: splitedImages,
        category: submission.value.category,
        isFeatured: submission.value.isFeatured === true ? true : false,

      }
    })
  } catch (error) {
    console.error(error)

  }
  redirect("/dashboard/products")
}

/* ------------------------------- editProduct ------------------------------ */

export const editProduct = async (prevState: unknown, formData: FormData) => {
  await IsAdminUser()

  const submission = parseWithZod(formData, { schema: ProductSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const productId = formData.get('productId') as string

  const splitedImages = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim()))

  try {
    await prisma.product.update({
      where: { id: productId },
      data: {
        name: submission.value.name,
        description: submission.value.description,
        category: submission.value.category,
        price: submission.value.price,
        isFeatured: submission.value.isFeatured === true ? true : false,
        status: submission.value.status,
        images: splitedImages
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/dashboard/products")
}

/* ------------------------------ deleteProduct ----------------------------- */

export const deleteProduct = async (formData: FormData) => {
  await IsAdminUser()

  try {

    await prisma.product.delete({
      where: {
        id: formData.get('productId') as string
      }
    })
  } catch (error) {
    console.error(error)
  }

  redirect('/dashboard/products')
}