'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const relatedProducts = [
  { name: 'Screen', desc: 'Color temperature and tint correction', status: 'Available' },
  { name: 'Scatter', desc: 'Atmospheric haze and depth simulation', status: 'Coming Soon' },
  { name: 'Lattice', desc: 'Advanced 3D LUT manipulation tools', status: 'In Development' },
];

export function RelatedProducts() {
  return (
    <section className="py-16 md:py-24 bg-filmbox-card/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
            Related Products
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Complete your post-production toolkit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-8 shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-filmbox-text-primary">
                  {product.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-filmbox-text-muted group-hover:text-filmbox-blue transition-colors" />
              </div>
              <p className="text-filmbox-text-secondary mb-4 leading-7">
                {product.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === 'Available' 
                    ? 'bg-filmbox-success/10 text-filmbox-success'
                    : 'bg-filmbox-amber/10 text-filmbox-amber'
                }`}>
                  {product.status}
                </span>
                <span className="text-filmbox-text-muted text-sm group-hover:text-filmbox-text-secondary transition-colors">
                  Learn more
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}