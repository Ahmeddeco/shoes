import { z } from 'zod'

export const BannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
})

export type Banner = z.infer<typeof BannerSchema>

export default BannerSchema
