"use client";

import { Button } from "@/components/ui/button";
import { imageLoader } from "@/utils/image-loader";
import { Link } from "@tanstack/react-router";

const HeroSection = () => (
  <section
    className="mx-auto w-full max-w-(--breakpoint-2xl) px-8 py-12 md:py-24 lg:py-32 xl:py-48"
    id="about"
  >
    <div className="grid w-full gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Your Ideas, Organized.
          </h1>
          <p className="text-muted-foreground max-w-[600px] md:text-xl">
            Capture, organize, and collaborate on your thoughts with our
            intuitive Notion-like editor.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" asChild>
            <Link to={"/auth/signup"}>Get Started</Link>
          </Button>
        </div>
      </div>
      {/* // TODO: dashboard image */}
      <img
        alt="Dashboard Preview"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        height="550"
        src={imageLoader({ width: 550 })}
        width="550"
      />
    </div>
  </section>
);

export default HeroSection;
