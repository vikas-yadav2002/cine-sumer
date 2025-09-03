'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const filmStocks = [
  {
    category: 'Kodak Vision3',
    stocks: ['500T 5219', '250D 5207', '200T 5213', '50D 5203'],
    description: 'Modern Kodak cinema stocks with excellent latitude and color reproduction.'
  },
  {
    category: 'Fuji Eterna',
    stocks: ['400T 8583', '250D 8546', '500T 8573'],
    description: 'Fujifilm cinema stocks known for their distinctive color palette.'
  },
  {
    category: 'Kodak Print',
    stocks: ['2383', '2393', '2302'],
    description: 'Traditional photochemical print stocks for authentic film looks.'
  },
  {
    category: 'Digital Intermediate',
    stocks: ['Rec.709', 'P3 D65', 'Rec.2020'],
    description: 'Digital cinema standards for modern workflows.'
  },
];

export function StockAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
            Film Stock Library
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Meticulously crafted profiles from real film measurements
          </p>
        </motion.div>

        <div className="space-y-4">
          {filmStocks.map((stock, index) => (
            <motion.div
              key={stock.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border shadow-cinematic overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-filmbox-border/20 transition-colors focus:outline-none focus:ring-2 focus:ring-filmbox-blue focus:ring-offset-2 focus:ring-offset-filmbox-bg"
                aria-expanded={openIndex === index}
                aria-controls={`stock-content-${index}`}
              >
                <div>
                  <h3 className="text-xl font-bold text-filmbox-text-primary mb-1">
                    {stock.category}
                  </h3>
                  <p className="text-filmbox-text-muted text-sm">
                    {stock.stocks.join(', ')}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-filmbox-text-secondary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`stock-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-filmbox-border/40">
                      <div className="pt-4">
                        <p className="text-filmbox-text-secondary leading-7">
                          {stock.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {stock.stocks.map((stockName) => (
                            <span
                              key={stockName}
                              className="px-3 py-1 rounded-full bg-filmbox-blue/10 text-filmbox-blue text-sm"
                            >
                              {stockName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}