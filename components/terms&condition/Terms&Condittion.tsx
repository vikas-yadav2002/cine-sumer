"use client";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-helvetica text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-center text-white">
          Terms & Conditions
        </h1>

        <p className="font-helvetica text-zinc-400 mb-12 text-center text-lg max-w-2xl mx-auto">
          By purchasing any SumerFade / CINESUMER Film Emulation license, you agree to the following terms and conditions.
        </p>

        <div className="space-y-12 text-zinc-300 leading-relaxed font-helvetica">
          
          {/* License Plans */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              1. License Plans
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-helvetica text-xl font-semibold text-white mb-2">
                  Quarterly License — $39
                </h3>
                <p className="text-zinc-400">
                  Grants full access to all film stock profiles for 90 days from the date of purchase. 
                  No updates are included during the license period. Renewal is required to continue access after expiry.
                </p>
              </div>

              <div>
                <h3 className="font-helvetica text-xl font-semibold text-white mb-2">
                  Yearly License — $99
                </h3>
                <p className="text-zinc-400">
                  Grants full access to all film stock profiles for 365 days from the date of purchase. 
                  All updates and new stocks released during the active license period are included. 
                  Renewal is required to continue access after expiry.
                </p>
              </div>

              <div>
                <h3 className="font-helvetica text-xl font-semibold text-white mb-2">
                  Perpetual License — $349
                </h3>
                <p className="text-zinc-400">
                  Grants lifetime access to all film stock profiles. All future updates, new stocks, 
                  experimental features, and product integrations are included permanently. 
                  No renewal required.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              2. Refund Policy
            </h2>
            <p className="text-zinc-300">
              All SumerFade / CINESUMER license purchases are <strong className="text-white">final and non-refundable</strong>.
            </p>
            <p className="mt-4 text-zinc-400">
              Due to the digital nature of the product — which is accessible immediately upon purchase — 
              no refunds are offered on any plan (Quarterly, Yearly, or Perpetual).
            </p>
            <p className="mt-4 text-zinc-400">
              We strongly recommend downloading and testing <strong className="text-white">SumerFade Lite</strong> 
              (available free of charge) before purchasing any paid license to ensure it meets your expectations.
            </p>
            <p className="mt-4 text-amber-400 text-sm">
              If you experience a technical issue with your purchase, please contact us at{" "}
              <a href="mailto:SumerFade@gmail.com" className="underline hover:text-white">
                SumerFade@gmail.com
              </a>
            </p>
          </section>

          {/* Privacy & Delivery */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              3. Privacy & Delivery
            </h2>
            <p className="text-zinc-400">
              Your license is linked to the email address used at the time of purchase. 
              Update notifications and license communications will be sent to that email. 
              Please keep your purchase email accessible for the duration of your license.
            </p>
          </section>

          {/* Support */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              4. Support
            </h2>
            <ul className="space-y-4 text-zinc-400">
              <li><strong className="text-white">Quarterly License:</strong> Standard email support (response within 48–72 hours)</li>
              <li><strong className="text-white">Yearly License:</strong> Priority email support (within 24 hours) + Discord group access</li>
              <li><strong className="text-white">Perpetual License:</strong> Lifetime priority email support (within 24 hours) + lifetime Discord group access</li>
            </ul>
            <p className="mt-6">
              Support requests:{" "}
              <a href="mailto:SumerFade@gmail.com" className="text-white hover:underline">
                SumerFade@gmail.com
              </a>
            </p>
          </section>

          {/* License & Usage */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              5. License & Usage
            </h2>
            <p className="mb-4">
              Your purchase grants you a <strong className="text-white">non-transferable, single-user license</strong> 
              to use the SumerFade Film Emulation DCTLs for both personal and commercial projects.
            </p>
            
            <p className="font-semibold text-white mb-3">The following are strictly prohibited:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Redistribution of the DCTL files in any form</li>
              <li>Resale or sublicensing to third parties</li>
              <li>Sharing files with other users (paid or unpaid)</li>
              <li>Reverse engineering or modifying the DCTLs for redistribution</li>
            </ul>
            
            <p className="mt-6 text-rose-400 text-sm">
              Violation of these terms will result in immediate termination of your license without refund.
            </p>
          </section>

          {/* Agreement */}
          <section>
            <h2 className="font-helvetica text-2xl font-semibold mb-6 text-white border-b border-zinc-800 pb-3">
              6. Agreement
            </h2>
            <p className="text-zinc-400">
              By completing your purchase, you confirm that you have read, understood, and agreed to these 
              terms and conditions in full. These terms apply to all current and future license plans offered 
              under the SumerFade / CINESUMER Film Emulation brand.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center text-xs text-zinc-500 font-helvetica">
          Last updated: April 2026
        </div>
      </div>
    </main>
  );
}