import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','name','description','status','price','images','category','isFeatured','createdAt']);

export default ProductScalarFieldEnumSchema;
