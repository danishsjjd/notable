"use client"

import { useUser } from "@/context/auth-context"

const Dashboard = () => {
  const { user } = useUser()
  return <div>Hello 👋, {user.email}</div>
}

export default Dashboard
