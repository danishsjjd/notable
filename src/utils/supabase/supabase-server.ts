import { cookies } from "next/headers"

import { Database } from "./database.types"

import { createServerClient } from "@supabase/ssr"

export default function useSupabaseServer(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )
}
