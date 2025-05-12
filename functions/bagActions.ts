'use server'

import { prisma } from "@/lib/prisma"
import { redis } from "@/lib/redis"
import { Cart } from "@/types/cart"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


/* --------------------------------- addItem -------------------------------- */
export const addItem = async (productId: string) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    redirect('/')
  }

  let cart: Cart | null = await redis.get(`cart-${user.id}`)

  const selectedProduct = await prisma.product.findUnique({
    where: { id: productId },
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
    }
  })

  if (!selectedProduct) {
    throw new Error('No product with this id!')
  }

  let myCart = {} as Cart
  if (!cart || !cart.items) {
    myCart = {
      userId: user.id,
      items: [
        {
          id: selectedProduct.id,
          price: selectedProduct.price,
          imageString: selectedProduct.images[0],
          name: selectedProduct.name,
          quantity: 1
        }
      ]
    }
  } else {
    let itemFound = false

    myCart.items = cart.items.map((item) => {
      if (item.id === productId) {
        itemFound = true
        item.quantity += 1
      }
      return item
    })

    if (!itemFound) {
      myCart.items.push({
        id: selectedProduct.id,
        imageString: selectedProduct.images[0],
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1
      })
    }
  }

  await redis.set(`cart-${user.id}`, myCart)
  revalidatePath('/', 'layout')
}


/* ------------------------------- deleteItem ------------------------------- */
export const deleteItem = async (formData: FormData) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  if (!user) {
    redirect('/')
  }

  const productId = formData.get('productId')

  let cart: Cart | null = await redis.get(`cart-${user.id}`)
  if (cart && cart.items) {
    const updateCart: Cart = {
      userId: user.id,
      items: cart.items.filter((item) => item.id !== productId)
    }
    await redis.set(`cart-${user.id}`, updateCart)
  }
  revalidatePath('/bag')
}