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

          <motion.div className="flex items-center justify-center gap-10 pt-6">
            <a
              href="https://www.youtube.com/@CINESUMER/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 transition-all hover:scale-110"
              aria-label="Watch on YouTube"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-zinc-300 group-hover:text-red-500 transition-colors"
              >
                <path 
                  d="M23 7.5C23 5.57 21.43 4 19.5 4H4.5C2.57 4 1 5.57 1 7.5V16.5C1 18.43 2.57 20 4.5 20H19.5C21.43 20 23 18.43 23 16.5V7.5Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M9.5 15.5L15.5 12L9.5 8.5V15.5Z" 
                  fill="currentColor" 
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cinesumer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 transition-all hover:scale-110"
              aria-label="Follow on Instagram"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-zinc-300 group-hover:text-pink-500 transition-colors"
              >
                <rect 
                  x="2" 
                  y="2" 
                  width="20" 
                  height="20" 
                  rx="5" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                />
                <circle 
                  cx="12" 
                  cy="12" 
                  r="5" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                />
                <circle 
                  cx="17.5" 
                  cy="6.5" 
                  r="1.5" 
                  fill="currentColor" 
                />
              </svg>
            </a>

            {/* Link (Buy Me a Coffee) */}
            <a
              href="https://buymeacoffee.com/cinesumerb/extras"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 transition-all hover:scale-110"
              aria-label="Support on Buy Me a Coffee"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-zinc-300 group-hover:text-amber-400 transition-colors"
              >
                <path 
                  d="M13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V10.5" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M18 2L22 6L12 16L8 13L2 19" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}