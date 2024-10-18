import { Bold, Image, List } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Bold,
      name: "Rich Formatting",
      description: "Easily format your text with bold, italic, and more.",
    },
    {
      icon: List,
      name: "Structured Content",
      description:
        "Create organized lists and structured documents effortlessly.",
    },
    {
      icon: Image,
      name: "Media Integration",
      description:
        "Seamlessly embed images, videos, and other media into your content.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          We offer the best experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.name}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="text-blue-600 hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Ready to elevate your content?
          </h3>
          {/* // TODO: sign in  */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
