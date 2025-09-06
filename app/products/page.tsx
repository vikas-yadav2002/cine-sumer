import { Footer } from '@/components/site/Footer';
import { Navbar } from '@/components/site/Navbar';
import TermsAndConditions from '@/components/terms&condition/Terms&Condittion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Quarterly License',
    price: '$99',
    description: 'Billed every 3 months',
    features: [
      'All film stock profiles',
      'GPU acceleration',
      'LUT export (.cube, .3dl, .csp)',
      'ACES workflow support',
      'Commercial usage rights',
      'Standard support',
    ],
  },
  {
    name: 'Yearly License',
    price: '$249',
    description: 'Best value, billed annually',
    features: [
      'All film stock profiles',
      'GPU acceleration',
      'LUT export (.cube, .3dl, .csp)',
      'ACES workflow support',
      'Commercial usage rights',
      'Priority support',
    ],
  },
  {
    name: 'Perpetual License',
    price: '$499',
    description: 'One-time purchase, lifetime updates',
    features: [
      'All film stock profiles',
      'GPU acceleration',
      'LUT export (.cube, .3dl, .csp)',
      'ACES workflow support',
      'Commercial usage rights',
      'Lifetime priority support',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-filmbox-bg text-filmbox-text-primary pt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-filmbox-text-secondary">
            Choose a plan that fits your creative journey
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-8 shadow-cinematic flex flex-col"
            >
              {/* Title + Price */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <div className="text-4xl font-bold text-filmbox-blue mb-2">{plan.price}</div>
                <p className="text-filmbox-text-muted">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-filmbox-success mr-3 flex-shrink-0" />
                    <span className="text-filmbox-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
  href="https://buymeacoffee.com/cinesumerb"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-black hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-filmbox-blue focus-visible:ring-offset-filmbox-bg transition-colors"
>
  Pay Now
</a>

            </div>
          ))}
        </div>
      </div>
    </main>
    <TermsAndConditions />
    <Footer />
    </>
  );
}
