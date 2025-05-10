import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  profileImage: z.string(),
  createdAt: z.date(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
