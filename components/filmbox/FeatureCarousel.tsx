'use client';

import { useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const carouselFeatures = [
  { title: 'Color Grading', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg' },
  { title: 'Grain Control', image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg' },
  { title: 'Print Profiles', image: 'https://images.pexels.com/photos/7991391/pexels-photo-7991391.jpeg' },
  { title: 'HDR Mapping', image: 'https://images.pexels.com/photos/7991447/pexels-photo-7991447.jpeg' },
  { title: 'LUT Export', image: 'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg' },
];

export function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
            Feature Highlights
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            Explore the tools that make Filmbox powerful
          </p>
        </motion.div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {carouselFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="embla__slide flex-none min-w-0 w-80 rounded-2xl bg-filmbox-card border border-filmbox-border shadow-cinematic overflow-hidden"
                >
                  <div className="aspect-video">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={320}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-filmbox-text-primary">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-filmbox-card border border-filmbox-border text-filmbox-text-primary hover:bg-filmbox-border/40 transition-colors shadow-cinematic"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-filmbox-card border border-filmbox-border text-filmbox-text-primary hover:bg-filmbox-border/40 transition-colors shadow-cinematic"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}