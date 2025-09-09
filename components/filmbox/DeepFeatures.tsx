'use client';

import { motion } from 'framer-motion';
import { Sliders, Palette, Aperture, Settings, Sparkles, Target } from 'lucide-react';

const deepFeatures = [
  { icon: Sliders, title: 'Grain Controls', desc: 'Fine-tune grain size, structure, and intensity' },
  { icon: Aperture, title: 'Halation', desc: 'Authentic halation and blooming effects' },
  { icon: Palette, title: 'Color Density', desc: 'Emulate film chemistry color response' },
  { icon: Target, title: 'Print Profiles', desc: 'Calibrated print stock characteristics' },
  { icon: Sparkles, title: 'Aura Effect', desc: 'Subtle film gate and lens characteristics' },
  { icon: Settings, title: 'Advanced', desc: 'Exposure compensation and tone mapping' },
];

export function DeepFeatures() {
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
            Designer Controls
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Precise tools for the discerning colorist
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deepFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-8 shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-filmbox-blue/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-filmbox-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-filmbox-text-secondary leading-7">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}