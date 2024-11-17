import { useMemo } from "react"

import type { Database } from "@/utils/supabase/database.types"
import type { TypedSupabaseClient } from "@/utils/supabase/types"

import { createBrowserClient } from "@supabase/ssr"

let client: TypedSupabaseClient | undefined

function getSupabaseBrowserClient() {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return client
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, [])
}

export default useSupabaseBrowser
