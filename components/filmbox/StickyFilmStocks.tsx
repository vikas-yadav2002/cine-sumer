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
    image: '/hero/1.png',
  },
  {
    title: '',
    description:
      'Modern projection print with tighter contrast and cleaner highlights.',
    image: '/hero/2.png',
  },
  {
    title: '',
    description:
      'Neutral tonal curve with subtle color compression.',
    image: '/hero/3.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: '/hero/4.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: '/hero/5.png',
  },
  {
    title: '',
    description:
      'Soft highlight roll-off and smoother shadow transitions.',
    image: '/hero/6.png',
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

        <div className="max-w-[1500px] mx-auto px-6 w-full">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* LEFT TEXT */}

            <div className="lg:col-span-4 space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Print Film Stocks
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                Authentic print looks with calibrated tone and color
                response. Each profile evolves visually as you explore
                different film stock behaviours.
              </p>

            </div>

            {/* RIGHT IMAGE STACK */}
{/* 
            <div className="lg:col-span-8 relative h-[85vh] overflow-hidden ">

              {stocks.map((stock, i) => {

                let y;

                if (i === 0) {

                  y = 0;

                } else {

                  
                  const start = i / stocks.length;
                  const end = (i + 1) / stocks.length;

                  y = useTransform(
                    scrollYProgress,
                    [start, end],
                    ['100%', '0%']
                  );

                }

                return (

                  <motion.div
                    key={i}
                    style={{
                      y,
                      zIndex: i + 1,
                    }}
                    className="absolute inset-0 rounded-3xl"
                  >

                    <Image
                      src={stock.image}
                      alt={stock.title}
                      fill
                      priority={i === 0}
                      className="object-cover scale-[1.02] rounded-3xl"
                    />

                  </motion.div>

                );

              })}

            </div> */}
            {/* RIGHT IMAGE STACK */}

<div className="
  lg:col-span-8
  relative
  h-[85vh]
">

  {/* Rounded clipping wrapper */}
  <div className="
    relative
    w-full
    h-full
    rounded-3xl
    overflow-hidden
    shadow-2xl
    border border-zinc-800
  ">

    {stocks.map((stock, i) => {

      let y;

      if (i === 0) {

        y = 0;

      } else {

        const start = i / stocks.length;
        const end = (i + 1) / stocks.length;

        y = useTransform(
          scrollYProgress,
          [start, end],
          ['100%', '0%']
        );

      }

      return (

        <motion.div
          key={i}
          style={{
            y,
            zIndex: i + 1,
          }}
          className="absolute inset-0"
        >

          <Image
            src={stock.image}
            alt={stock.title}
            fill
            priority={i === 0}
            className="
              object-cover
              scale-[1.02]
            "
          />

        </motion.div>

      );

    })}

  </div>

</div>

          </div>

        </div>

      </div>

    </section>

  );
}