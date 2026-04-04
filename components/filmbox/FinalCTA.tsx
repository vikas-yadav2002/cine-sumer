'use client';

import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let Film be Film , Make Digital Feel Like Film
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Try out the Sumerfade Lite, watch tutorials on YouTube, or follow our creative journey on Instagram.
          </p>

         
        </motion.div>
      </div>
    </section>
  );
}