import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"

import "./globals.css"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
