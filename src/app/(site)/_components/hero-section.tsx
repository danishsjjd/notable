"use client"

import { Button } from "@/components/ui/button"
import { imageLoader } from "@/utils/image-loader"
import Image from "next/image"

const HeroSection = () => (
  <section className="px-8 max-w-screen-2xl w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] w-full lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Your Ideas, Organized.
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Capture, organize, and collaborate on your thoughts with our
            intuitive Notion-like editor.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          {/* // TODO: sign in */}
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      {/* // TODO: dashboard image */}
      <Image
        loader={imageLoader}
        alt="Dashboard Preview"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        height="550"
        src="/placeholder.svg?height=550&width=550"
        width="550"
      />
    </div>
  </section>
)

export default HeroSection
