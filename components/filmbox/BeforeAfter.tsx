'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your image pairs from /public/beforeafter/
  const slides = [
    { before: '/beforeafter/before1.png', after: '/beforeafter/after1.png' },
    { before: '/beforeafter/before2.png', after: '/beforeafter/after2.png' },
    { before: '/beforeafter/before3.png', after: '/beforeafter/after3.png' },
    { before: '/beforeafter/before4.png', after: '/beforeafter/after4.png' },
    { before: '/beforeafter/before5.png', after: '/beforeafter/after5.png' },
    { before: '/beforeafter/before6.png', after: '/beforeafter/after6.png' },
    { before: '/beforeafter/before7.png', after: '/beforeafter/after7.png' },
    { before: '/beforeafter/before8.png', after: '/beforeafter/after8.png' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Transform your footage with authentic film characteristics
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-black"
        >
          {/* Before/After comparison */}
          <div
            className="relative w-full h-[520px] md:h-[650px] lg:h-[720px] cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before image */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentSlide].before}
                alt="Original footage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Original
              </div>
            </div>

            {/* After image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={slides[currentSlide].after}
                alt="Processed footage"
                fill
                className="object-cover brightness-110 contrast-110 saturate-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 text-black px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                SumerFade
              </div>
            </div>

            {/* Draggable slider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize shadow-xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full border-4 border-zinc-900 shadow-2xl flex items-center justify-center">
                <div className="w-1.5 h-5 bg-zinc-900 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-14 md:-left-16 p-4 rounded-full bg-black border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all hover:scale-110 shadow-xl"
          >
            <ChevronLeft size={34} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-14 md:-right-16 p-4 rounded-full bg-black border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-all hover:scale-110 shadow-xl"
          >
            <ChevronRight size={34} />
          </button>
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentSlide(i);
                setSliderPosition(50);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}