import { z } from 'zod';

export const CategorySchema = z.enum(['men','women','kids']);

export type CategoryType = `${z.infer<typeof CategorySchema>}`

export default CategorySchema;
