
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import TermsAndConditions from "@/components/terms&condition/Terms&Condittion";
import { Check } from "lucide-react";


const plans = [
  {
    name: "Quarterly License",
    price: "$39",
    period: "Billed every 3 months",
    monthly: "$13/month",
    link: "https://buymeacoffee.com/cinesumerb/e/452118",
    features: [
      "51 negative stocks — Kodak Vision, Eastman EXR/ECN, Fuji Eterna series",
      "18 print stocks — Kodak 2383, Fujifilm 3513, Eastman print family",
      "35mm film grain, halation, gate weave, film damage & border",
      "No updates included",
      "ACES & DaVinci workflow support",
      "Commercial usage rights",
      "Standard support — email within 48–72 hrs",
    ],
  },
  {
    name: "Yearly License",
    price: "$99",
    period: "Billed annually",
    monthly: "$8/month",
    link: "https://buymeacoffee.com/cinesumerb/e/452628",
    features: [
      "51 negative stocks — Kodak Vision, Eastman EXR/ECN, Fuji Eterna series",
      "18 print stocks — Kodak 2383, Fujifilm 3513, Eastman print family",
      "35mm film grain, halation, gate weave, film damage & border",
      "All updates and new stocks during license period",
      "ACES & DaVinci workflow support",
      "Commercial usage rights",
      "Priority support — email within 24 hrs + Discord group access",
    ],
    popular: true,
  },
  {
    name: "Perpetual License",
    price: "$349",
    originalPrice: "$449",
    period: "One-time purchase • Lifetime access",
    link: "https://www.buymeacoffee.com/cinesumerb/e/452635/discounts/11177",
    features: [
      "51 negative stocks — Kodak Vision, Eastman EXR/ECN, Fuji Eterna series",
      "18 print stocks — Kodak 2383, Fujifilm 3513, Eastman print family",
      "35mm film grain, halation, gate weave, film damage & border",
      "Lifetime updates — every new stock and feature",
      "Early access to upcoming updates",
      "ACES & DaVinci workflow support",
      "Commercial usage rights",
      "Exclusive bonus looks & experimental film stocks",
      "Future product integrations included",
      "Lifetime priority support — email within 24 hrs + Discord group access",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-helvetica text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="font-helvetica text-xl text-zinc-400 max-w-2xl mx-auto">
              Choose a plan that fits your creative journey
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-3xl bg-zinc-950 border border-zinc-800 p-8 shadow-2xl flex flex-col transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'ring-2 ring-white/50 scale-[1.02] z-10' 
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-sm font-semibold px-6 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}

                {/* Title + Price */}
                <div className="text-center mb-10">
                  <h2 className="font-helvetica text-2xl font-bold mb-4 text-white">
                    {plan.name}
                  </h2>

                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="font-helvetica text-6xl font-bold tracking-tighter text-white">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-2xl text-zinc-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="font-helvetica text-zinc-400 text-sm mb-1">
                    {plan.period}
                  </p>
                  {plan.monthly && (
                    <p className="font-helvetica text-emerald-400 text-sm font-medium">
                      ~{plan.monthly}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.8" />
                      <span className="font-helvetica text-zinc-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold bg-white text-black hover:bg-zinc-200 transition-all active:scale-[0.985] font-helvetica"
                >
                  Get {plan.name.split(' ')[0]} License
                </a>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center mt-12 text-zinc-500 text-sm font-helvetica">
            All licenses include commercial usage rights. Prices in USD.
          </div>
        </div>
      </main>
      <TermsAndConditions />
      <Footer />
    </>
  );
}