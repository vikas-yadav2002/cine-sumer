'use client';

import { motion } from 'framer-motion';
import { Download, ShoppingCart } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="w-24 h-24 mx-auto bg-filmbox-card rounded-2xl flex items-center justify-center shadow-cinematic">
            <div className="w-16 h-16 bg-filmbox-blue rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-filmbox-bg">F</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-filmbox-text-primary">
            Download the free trial
          </h2>

          <p className="text-xl text-filmbox-text-secondary max-w-2xl mx-auto">
            Experience the difference with a 14-day free trial. No watermarks, full feature access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-filmbox-bg bg-filmbox-blue hover:bg-[#4a92eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-filmbox-blue focus-visible:ring-offset-filmbox-bg transition-colors">
              <Download size={18} className="mr-2" />
              Download Free Trial
            </button>
            
            <button className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-filmbox-bg bg-filmbox-amber hover:bg-[#e6bd59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-filmbox-amber focus-visible:ring-offset-filmbox-bg transition-colors">
              <ShoppingCart size={18} className="mr-2" />
              Buy a License
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}