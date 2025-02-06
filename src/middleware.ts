import { type NextRequest } from "next/server"

import { updateSession } from "./utils/supabase/middleware"

// if (typeof global.fetch === "function") {
//   const originalFetch = global.fetch
//   global.fetch = async (...args) => {
//     const [input] = args
//     const url = typeof input === "string" ? input : ((input as any)?.url as any)
//     console.log("Fetch call to:", url)
//     return originalFetch(...args)
//   }
// }

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
