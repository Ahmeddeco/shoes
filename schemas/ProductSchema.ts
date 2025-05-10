import CategorySchema from '@/prisma/generated/inputTypeSchemas/CategorySchema'
import ProductStatusSchema from '@/prisma/generated/inputTypeSchemas/ProductStatusSchema'
import { z } from 'zod'

export const ProductSchema = z.object({
  status: ProductStatusSchema,
  category: CategorySchema,
  name: z.string(),
  description: z.string(),
  price: z.number().min(1),
  isFeatured: z.boolean().nullish(),
  images: z.string().array(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema
