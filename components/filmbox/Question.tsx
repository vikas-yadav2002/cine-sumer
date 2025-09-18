'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is SumerFade compatible with my system?',
    answer:
      'Yes, SumerFade works on Windows and Mac, but only inside DaVinci Resolve.',
  },
  {
    question: 'What’s the difference between SumerFade TEST, SumerFade, and SumerFade Pro?',
    answer:
      'SumerFade TEST → Made only for testing before buying the full license.\n\nSumerFade → Limited-time access version.\n\nSumerFade Pro → Lifetime access version.',
  },
  {
    question: 'Does SumerFade require an internet connection?',
    answer: 'No, it works offline once installed.',
  },
  {
    question: 'What configurations can sumerFade DCTLs run on?',
    answer:
      'They run smoothly on Nvidia, Apple Silicon, and AMD architectures. Still, we strongly recommend trying the TEST versions first for compatibility.',
  },
  {
    question: 'Do DCTLs expire often?',
    answer: 'Not at all. DCTLs have a validity till your expiry date.',
  },
  {
    question: 'How often do I need to update my DCTL?',
    answer:
      'For the perpetual Subscription, you are required to update your DCTL once every year. We send automatic email reminders with update instructions to ensure compatibility and performance.',
  },
  {
    question: 'Can I get refunds on my subscription?',
    answer:
      'Yes, refunds are available under the 1-Year and 3-Month Subscription plans if requested within the first month, with service charges applied. Refunds are only applicable if the DCTL fails to run on your system. For perpetual licences, refunds are not offered.',
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
                        <p className="text-filmbox-text-secondary leading-7 whitespace-pre-line">
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
