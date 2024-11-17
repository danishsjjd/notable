import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"
import { cookies } from "next/headers"

import useSupabaseServer from "@/utils/supabase/supabase-server"

import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

import { AuthProvider } from "@/context/auth-context"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
  const user = await supabase.auth.getUser()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
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
