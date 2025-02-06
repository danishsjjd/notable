"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"

import useSupabaseBrowser from "@/utils/supabase/supabase-browser"

import { User } from "@supabase/supabase-js"

type SetUser = Dispatch<SetStateAction<User>>
type AuthContextAuthenticated = { user: User; setUser: SetUser }
type AuthContextUnAuthenticated = { user: User | null; setUser: SetUser }
type AuthContextType = AuthContextAuthenticated | AuthContextUnAuthenticated

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children, user: _user }: { children: ReactNode; user: User | null }) => {
  const [user, setUser] = useState<User | null>(() => _user)
  const supabase = useSupabaseBrowser()

  useEffect(() => {
    const {
      data: {
        subscription: { unsubscribe },
      },
    } = supabase.auth.onAuthStateChange((user, session) => {
      if (session?.user) {
        setUser(session?.user)
      } else {
        setUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [supabase])

  return <AuthContext.Provider value={{ user, setUser: setUser as SetUser }}>{children}</AuthContext.Provider>
}

export function useUser() {
  const auth = useContext(AuthContext)
  if (auth === null) throw new Error("useUser can only be call inside AuthProvider")

  return auth
}
