import { z } from 'zod';

export const BannerScalarFieldEnumSchema = z.enum(['id','title','imageString','createdAt']);

export default BannerScalarFieldEnumSchema;
