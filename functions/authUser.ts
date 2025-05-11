import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

/* -------------------------------- AuthUser -------------------------------- */
export const IsUser = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return user
}

/* ------------------------------- IsAdminUser ------------------------------ */

export const IsAdminUser = async () => {

  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect('/')
  }
}