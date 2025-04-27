"use client";

import { Menu } from "lucide-react";

import Notable from "@/components/notable-brand-logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { Authenticated, Unauthenticated } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { ModeToggle } from "../theme-toggle";

const Header = () => {
  const { signOut } = useAuthActions();

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b dark:border-b-white/15 border-b-black/15 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 max-w-(--breakpoint-2xl) items-center px-8">
        <div className="mr-4 hidden md:flex">
          <Link
            className="mr-6 flex items-center space-x-2 py-3 dark:text-white"
            to="/"
          >
            <Notable width={80} />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Authenticated>
              <Link
                to="/app"
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                Notes
              </Link>
            </Authenticated>
            <a
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              href="#pricing"
            >
              Pricing
            </a>
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
            <Authenticated>
              <DropdownMenuItem>
                <a href="/app">Notes</a>
              </DropdownMenuItem>
            </Authenticated>
            <DropdownMenuItem>
              <a href="#about">About</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#features">Features</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#pricing">Pricing</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center space-x-2 justify-self-end md:justify-end">
          <nav className="flex items-center">
            <ModeToggle />
            <Authenticated>
              <Button variant="ghost" onClick={() => signOut()}>
                Logout
              </Button>
            </Authenticated>
            <Unauthenticated>
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link to={"/auth/signin"}>Sign in</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link to={"/auth/signup"}>Sign Up</Link>
                </Button>
              </div>
            </Unauthenticated>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
