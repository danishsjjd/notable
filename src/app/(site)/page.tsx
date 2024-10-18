import Features from "./_components/features"
import Footer from "./_components/footer"
import Header from "./_components/header"
import HeroSection from "./_components/hero-section"
import PricingSection from "./_components/pricing-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
