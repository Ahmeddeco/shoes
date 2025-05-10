import { z } from 'zod';

/////////////////////////////////////////
// BANNER SCHEMA
/////////////////////////////////////////

export const BannerSchema = z.object({
  id: z.string(),
  title: z.string(),
  imageString: z.string(),
  createdAt: z.date(),
})

export type Banner = z.infer<typeof BannerSchema>

export default BannerSchema;
