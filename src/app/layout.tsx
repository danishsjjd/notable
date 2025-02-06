import { ReactQueryClientProvider } from "@/components/react-query-client-provider"

import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Source_Sans_3 } from "next/font/google"
import { cookies } from "next/headers"

import useSupabaseServer from "@/utils/supabase/supabase-server"

import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

import { AuthProvider } from "@/context/auth-context"

const sourceSans3 = Source_Sans_3({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-source-sans-3",
})

export const metadata: Metadata = {
  title: "Notable",
  description: "Rich feature's with rich editor",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo/notable-icon-dark.svg",
        href: "/images/logo/notable-icon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo/notable-icon-light.svg",
        href: "/images/logo/notable-icon-light.svg",
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookie = await cookies()
  const supabase = useSupabaseServer(cookie)

  // TODO: every request will call the user endpoint twice: once inside middleware
  const user = await supabase.auth.getUser()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans3.variable} ${sourceSans3.variable} font-source-sans-3 antialiased`}
        suppressHydrationWarning
      >
        <ReactQueryClientProvider>
          <AuthProvider user={user.data.user}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster richColors />
            </ThemeProvider>
          </AuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
