'use client';

import { motion } from 'framer-motion';
import { Coffee, Youtube, Instagram } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-filmbox-text-primary">
            Ready to create cinematic magic?
          </h2>

          <p className="text-lg md:text-xl text-filmbox-text-secondary max-w-3xl mx-auto">
            Try out the demo, watch tutorials on YouTube, or follow our creative journey on Instagram.
          </p>

          {/* Icon Links */}
          <motion.div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://buymeacoffee.com/cinesumerb/extras"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-100 text-slate-100 hover:bg-slate-800 hover:border-slate-800 hover:text-white transition-all shadow-md"
            >
              <Coffee size={28} />
            </a>

            <a
              href="https://www.youtube.com/@CINESUMER/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-red-500 text-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-md"
            >
              <Youtube size={28} />
            </a>

            <a
              href="https://www.instagram.com/cinesumer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all shadow-md"
            >
              <Instagram size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
