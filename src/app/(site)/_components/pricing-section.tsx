import { Button } from "@/components/ui/button"

const PricingSection = () => (
  <section className="mx-auto w-full max-w-screen-2xl px-8 py-12 md:py-24 lg:py-32" id="pricing">
    <h2 className="mb-4 text-center text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
    <p className="mb-8 text-center text-muted-foreground md:text-xl">Choose the plan that fits your needs</p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {/* // TODO: links to subscribe */}
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
        <div key={plan.name} className="flex flex-col rounded-lg bg-muted p-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
          <p className="mb-6 text-3xl font-bold">{plan.price}</p>
          <ul className="mb-6 flex-grow space-y-2">
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
          <Button className="mt-auto" variant={plan.name === "Pro" ? "default" : "outline"}>
            {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </Button>
        </div>
      ))}
    </div>
  </section>
)

export default PricingSection
