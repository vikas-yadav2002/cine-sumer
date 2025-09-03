'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teasers = [
  {
    title: 'Print Film Profiles',
    copy: 'Authentic print looks with calibrated tone and color.',
    media: 'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg',
  },
  {
    title: 'Grain & Halation',
    copy: 'Physically-inspired grain, halation, and color density.',
    media: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
  },
  {
    title: 'LUT Export',
    copy: 'Export to .cube, .3dl, and more for your workflow.',
    media: 'https://images.pexels.com/photos/7991447/pexels-photo-7991447.jpeg',
  },
];

export function FeatureTeasers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
            Professional Features
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Everything you need for cinematic color grading
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {teasers.map((teaser, index) => (
            <motion.div
              key={teaser.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-6 md:p-8 shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <Image
                  src={teaser.media}
                  alt={teaser.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-filmbox-text-primary mb-3">
                {teaser.title}
              </h3>
              <p className="text-filmbox-text-secondary leading-7">
                {teaser.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}