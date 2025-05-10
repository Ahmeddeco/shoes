import { z } from 'zod';
import { ProductStatusSchema } from '../inputTypeSchemas/ProductStatusSchema'
import { CategorySchema } from '../inputTypeSchemas/CategorySchema'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  status: ProductStatusSchema,
  category: CategorySchema,
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.string().array(),
  isFeatured: z.boolean().nullish(),
  createdAt: z.date(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
