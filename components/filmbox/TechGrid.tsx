'use client';

import { motion } from 'framer-motion';
import { Cpu, Sun, Beaker, Layers, Film, Zap } from 'lucide-react';

const techFeatures = [
  { icon: Cpu, title: 'GPU Accelerated', desc: 'Real-time performance on modern GPUs.' },
  { icon: Sun, title: 'HDR Support', desc: 'Tone-managed up to 1000 nits.' },
  { icon: Beaker, title: 'ACES Workflow', desc: 'ACES-cct and color-managed pipelines.' },
  { icon: Layers, title: 'LUT Export', desc: 'Export .cube, .3dl, .csp formats.' },
  { icon: Film, title: 'Host Apps', desc: 'Resolve, Nuke, Premiere, After Effects.' },
  { icon: Zap, title: 'Real-time', desc: 'Interactive adjustments with live preview.' },
];

export function TechGrid() {
  return (
    <section className="py-16 md:py-24 bg-filmbox-card/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
            Technical Excellence
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Built for professional workflows and modern pipelines
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-6 shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-bold text-filmbox-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-filmbox-text-muted text-sm leading-6">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}