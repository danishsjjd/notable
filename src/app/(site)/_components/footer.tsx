import React from "react"

const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Notable. All rights reserved.</p>
    </footer>
  )
}

export default Footer
