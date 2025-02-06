"use client"

import { Menu } from "lucide-react"

import Link from "next/link"

import useSupabaseBrowser from "@/utils/supabase/supabase-browser"

import Notable from "@/components/notable-brand-logo"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useUser } from "@/context/auth-context"
import { toast } from "sonner"

const Header = () => {
  const auth = useUser()
  const supabase = useSupabaseBrowser()

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-14 max-w-(--breakpoint-2xl) items-center px-8">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2 py-3 dark:text-white" href="/">
            <Notable width={80} />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {auth.user && (
              <Link href="/notable" className="text-foreground/60 hover:text-foreground/80 transition-colors">
                Notes
              </Link>
            )}
            <Link replace className="text-foreground/60 hover:text-foreground/80 transition-colors" href="#about">
              About
            </Link>
            <Link replace className="text-foreground/60 hover:text-foreground/80 transition-colors" href="#features">
              Features
            </Link>
            <Link replace className="text-foreground/60 hover:text-foreground/80 transition-colors" href="#pricing">
              Pricing
            </Link>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {auth.user && (
              <DropdownMenuItem>
                <Link href="/notable">Notes</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <Link href="#about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#features">Features</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#pricing">Pricing</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center space-x-2 justify-self-end md:justify-end">
          <nav className="flex items-center">
            {auth?.user ? (
              <Button
                variant="ghost"
                onClick={() =>
                  supabase.auth.signOut().then((data) => {
                    if (data.error) {
                      toast.error(data.error.message)
                      return
                    }

                    window.location.reload()
                  })
                }
              >
                Logout
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link href={"/login"}>Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href={"/signup"}>Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
