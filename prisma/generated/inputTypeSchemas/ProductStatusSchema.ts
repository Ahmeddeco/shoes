import { z } from 'zod';

export const ProductStatusSchema = z.enum(['draft','published','archived']);

export type ProductStatusType = `${z.infer<typeof ProductStatusSchema>}`

export default ProductStatusSchema;
