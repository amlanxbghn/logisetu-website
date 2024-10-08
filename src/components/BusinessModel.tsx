import { BrainCircuit, CreditCard, Truck, IndianRupee } from "lucide-react"

export default function BusinessModel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text
">
          Our Business Model
        </h2>
        <p className="mb-12 text-center text-zinc-400 text-md md:text-lg font-medium">
            AI-powered Optimization with Subscription Services, Marketplace Commissions, and Financing Options.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#111111] border border-white/20 rounded-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <BrainCircuit className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-center text-white">AI SaaS Subscription</h3>
            </div>
            <p className="text-center text-zinc-400">
              AI-powered optimization for operators, providing cutting-edge solutions for route planning and load management.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/20 rounded-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <Truck className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-center text-white">Marketplace Commissions</h3>
            </div>
            <p className="text-center text-zinc-400">
              Revenue generated from successful truckload matches, creating a win-win situation for both shippers and carriers.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/20 rounded-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <CreditCard className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-center text-white">Telematics & Payment Solutions</h3>
            </div>
            <p className="text-center text-zinc-400">
              Subscription-based tracking and payment solutions, enhancing the transparency and efficiency in logistics operations.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/20 rounded-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <IndianRupee className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold text-center text-white">Financing & Leasing</h3>
            </div>
            <p className="text-center text-zinc-400">
              Truck financing and lease-to-own options backed by performance data, enabling growth for small and medium-sized operators.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}