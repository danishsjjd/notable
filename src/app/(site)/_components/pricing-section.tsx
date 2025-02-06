"use client"

import { Button } from "@/components/ui/button"

import { toast } from "sonner"

const PricingSection = () => (
  <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-8 py-12 md:py-24 lg:py-32" id="pricing">
    <h2 className="mb-4 text-center text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
    <p className="text-muted-foreground mb-8 text-center md:text-xl">Choose the plan that fits your needs</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {[
        {
          name: "Basic",
          price: "Free",
          features: ["Unlimited files", "3 folder per workspace", "Unlimited workspaces", "2 collaborators"],
        },
        {
          name: "Pro",
          price: "$9.99/mo",
          features: [
            "Everything in free plan+",
            "Unlimited folders",
            "Custom logos",
            "Unlimited collaborations",
            "Can cancel/update subscription anytime",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["All Pro features", "Advanced Security", "Dedicated Support", "Custom Integrations"],
        },
      ].map((plan) => (
        <div key={plan.name} className="bg-muted flex flex-col rounded-lg p-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
          <p className="mb-6 text-3xl font-bold">{plan.price}</p>
          <ul className="mb-6 grow space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mt-auto"
            variant={plan.name === "Pro" ? "default" : "outline"}
            onClick={() => toast.info("Under construction")}
          >
            {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </Button>
        </div>
      ))}
    </div>
  </section>
)

export default PricingSection
