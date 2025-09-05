'use client';

import { motion } from 'framer-motion';

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

          {/* Hero-style Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://buymeacoffee.com/cinesumerb/extras"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md border border-slate-100 py-2 px-4 text-sm transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-white hover:bg-slate-800 hover:border-slate-800"
            >
              DEMO LINK
            </a>

            <a
              href="https://www.youtube.com/@CINESUMER/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md border border-red-500 py-2 px-4 text-sm transition-all shadow-sm hover:shadow-lg text-red-500 hover:text-white hover:bg-red-600 hover:border-red-600"
            >
              YT CHANNEL LINK
            </a>

            <a
              href="https://www.instagram.com/cinesumer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md border border-pink-500 py-2 px-4 text-sm transition-all shadow-sm hover:shadow-lg text-pink-500 hover:text-white hover:bg-pink-600 hover:border-pink-600"
            >
              IG LINK
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
