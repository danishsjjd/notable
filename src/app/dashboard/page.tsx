"use client"

import { useUser } from "@/context/auth-context"

const page = () => {
  const { user } = useUser()
  return <div>Hello 👋, {user.email}</div>
}

export default page
