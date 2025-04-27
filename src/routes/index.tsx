import { createFileRoute } from "@tanstack/react-router";

import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import HeroSection from "@/components/landing-page/hero-section";
import PricingSection from "@/components/landing-page/pricing-section";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
