import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','firstName','lastName','profileImage','createdAt']);

export default UserScalarFieldEnumSchema;
