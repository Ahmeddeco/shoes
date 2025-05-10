import { z } from 'zod'

export const UserSchema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  profileImage: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
