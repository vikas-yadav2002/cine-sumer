'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is SumerFade?',
    answer:
      'SumerFade is a handcrafted film emulation system that brings the emotion, imperfection, and beauty of analog film into the digital color grading world. It recreates classic looks while offering real-time DCTL controls for precision and creativity.',
  },
  {
    question: 'Which platforms does SumerFade support?',
    answer:
      'Currently, SumerFade is designed for DaVinci Resolve Studio via DCTLs. Future versions aim to expand into plugin formats (OFX/VST-style) to support multiple editing and grading platforms.',
  },
  {
    question: 'Can I get refunds on my subscription?',
    answer:
      'Yes, under the 1-Year Subscription plan, you can request a refund within the first month (service charges apply). After that, or under short-term plans, refunds are not offered.',
  },
  {
    question: 'How often do I need to update my DCTL?',
    answer:
      'For the 1-Year Subscription, you are required to update your DCTL every 3 months. We send automatic email reminders with update instructions to ensure compatibility and performance.',
  },
];

export function FaqAccordion() {
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
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Everything you need to know about SumerFade subscriptions and usage.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
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
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-xl font-bold text-filmbox-text-primary">
                  {faq.question}
                </h3>
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
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-filmbox-border/40">
                      <div className="pt-4">
                        <p className="text-filmbox-text-secondary leading-7">
                          {faq.answer}
                        </p>
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
