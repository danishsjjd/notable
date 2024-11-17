"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

import { User } from "@supabase/supabase-js"

type SetUser = Dispatch<SetStateAction<User>>
type AuthContextAuthenticated = { user: User; setUser: SetUser }
type AuthContextUnAuthenticated = { user: User | null; setUser: SetUser }
type AuthContextType = AuthContextAuthenticated | AuthContextUnAuthenticated

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children, user: _user }: { children: ReactNode; user: User | null }) => {
  const [user, setUser] = useState<User | null>(() => _user)

  return <AuthContext.Provider value={{ user, setUser: setUser as SetUser }}>{children}</AuthContext.Provider>
}

export function useUser(validate: false): AuthContextUnAuthenticated
export function useUser(validate?: true): AuthContextAuthenticated
export function useUser(validate = true) {
  const auth = useContext(AuthContext)
  if (auth === null && validate) throw new Error("useUser can only be call inside AuthProvider")

  return auth
}
