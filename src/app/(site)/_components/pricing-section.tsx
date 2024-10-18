import { Button } from "@/components/ui/button"

const PricingSection = () => (
  <section
    className="w-full max-w-screen-2xl mx-auto px-8 py-12 md:py-24 lg:py-32"
    id="pricing"
  >
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
      Pricing Plans
    </h2>
    <p className="text-muted-foreground text-center mb-8 md:text-xl">
      Choose the plan that fits your needs
    </p>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {/* // TODO: links to subscribe */}
      {[
        {
          name: "Basic",
          price: "Free",
          features: [
            "Unlimited files",
            "3 folder per workspace",
            "Unlimited workspaces",
            "2 collaborators",
          ],
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
          features: [
            "All Pro features",
            "Advanced Security",
            "Dedicated Support",
            "Custom Integrations",
          ],
        },
      ].map((plan) => (
        <div
          key={plan.name}
          className="flex flex-col p-6 bg-muted rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <p className="text-3xl font-bold mb-6">{plan.price}</p>
          <ul className="mb-6 space-y-2 flex-grow">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="mt-auto"
            variant={plan.name === "Pro" ? "default" : "outline"}
          >
            {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
          </Button>
        </div>
      ))}
    </div>
  </section>
)

export default PricingSection
