'use client';

interface ProviderButtonsProps {
  onStripeCheckout: () => void;
  onPayPalCheckout: () => void;
  disabled?: boolean;
}

export function ProviderButtons({ onStripeCheckout, onPayPalCheckout, disabled = true }: ProviderButtonsProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={onStripeCheckout}
        disabled={disabled}
        className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-filmbox-bg bg-filmbox-blue hover:bg-[#4a92eb] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-filmbox-blue focus-visible:ring-offset-filmbox-bg transition-colors"
      >
        Pay with Stripe
      </button>
      
      <button
        onClick={onPayPalCheckout}
        disabled={disabled}
        className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-filmbox-bg bg-filmbox-amber hover:bg-[#e6bd59] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-filmbox-amber focus-visible:ring-offset-filmbox-bg transition-colors"
      >
        Pay with PayPal
      </button>
    </div>
  );
}