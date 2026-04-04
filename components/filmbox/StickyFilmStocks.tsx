'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

interface StockItem {
  title: string;
  description: string;
  image: string;
}

const stocks: StockItem[] = [
  {
    title: '',
    description:
      'Classic cinema print profile with rich blacks and balanced highlight response.',
    image: 'hero/1.png',
  },
  {
    title: '',
    description:
      'Modern projection print with tighter contrast and cleaner highlights.',
    image: 'hero/2.png',
  },
  {
    title: '',
    description:
      'Neutral tonal curve with subtle color compression.',
    image: 'hero/3.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: 'hero/4.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: 'hero/5.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: 'hero/6.png',
  },
];

export default function StickyFilmStocks() {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (

    <section
      ref={containerRef}
      className="relative bg-black"
      style={{
        height: `${stocks.length * 100}vh`,
      }}
    >

      <div className="sticky top-0 h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* LEFT — STICKY TEXT */}

            <div className="lg:col-span-2 space-y-6">

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Print Film Stocks
              </motion.h2>

              <motion.p
                className="text-lg text-zinc-400 leading-relaxed"
              >
                Authentic print looks with calibrated tone and color
                response. Each profile evolves visually as you explore
                different film stock behaviours.
              </motion.p>

              {/* Dynamic titles */}

              <div className="pt-6 space-y-3">

                {stocks.map((stock, i) => {

                  const start = i / stocks.length;
                  const end = (i + 1) / stocks.length;

                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, 1]
                  );

                  return (

                    <motion.div
                      key={i}
                      style={{ opacity }}
                      className="text-white text-lg font-medium"
                    >
                      {stock.title}
                    </motion.div>

                  );
                })}

              </div>

            </div>

            {/* RIGHT — IMAGES */}

            <div className="lg:col-span-3 relative h-[70vh]">

              {stocks.map((stock, i) => {

                const start = i / stocks.length;
                const end = (i + 1) / stocks.length;

                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1]
                );

                const y = useTransform(
                  scrollYProgress,
                  [start, end],
                  [80, 0]
                );

                return (

                  <motion.div
                    key={i}
                    style={{
                      opacity,
                      y,
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden border border-zinc-800"
                  >

                    <Image
                      src={stock.image}
                      alt={stock.title}
                      fill
                      className="object-cover"
                    />

                  </motion.div>

                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}