"use client"

import { Menu, Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

import { imageLoader } from "@/utils/image-loader"

import Notable from "@/components/Notable"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
  const { setTheme } = useTheme()

  // TODO: login state
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-8">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2 py-3 dark:text-white" href="/">
            <Notable width={80} />
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#features">
              Features
            </a>
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#pricing">
              Pricing
            </a>
            <a className="text-foreground/60 transition-colors hover:text-foreground/80" href="#about">
              About
            </a>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <a href="#features">Features</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#pricing">Pricing</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#about">About</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center space-x-2 justify-self-end md:justify-end">
          <nav className="flex items-center">
            {isLoggedIn ? (
              <Button variant="ghost" className="w-9 px-0">
                <Image loader={imageLoader} src="/" alt="Profile picture" width={500} height={500} />
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link href={"/dashboard/auth"}>Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href={"/dashboard/auth"}>Sign Up</Link>
                </Button>
              </div>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="ml-2">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
