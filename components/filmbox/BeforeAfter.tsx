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
    setSliderPosition(50); // reset slider
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setSliderPosition(50); // reset slider
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-filmbox-text-secondary max-w-2xl mx-auto">
            Transform your footage with authentic film characteristics
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-cinematic"
        >
          {/* Before/After comparison */}
          <div
            className="relative w-full h-[400px] md:h-[500px] cursor-col-resize select-none"
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
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
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
                className="object-cover brightness-110 contrast-110 saturate-110 sepia-[0.1]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute bottom-4 right-4 bg-filmbox-primary/90 text-white px-3 py-1 rounded-full text-sm">
                SumerFade
              </div>
            </div>

            {/* Draggable slider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-filmbox-primary cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-filmbox-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentSlide(i);
                setSliderPosition(50);
              }}
              className={`w-3 h-3 rounded-full ${
                i === currentSlide ? 'bg-filmbox-primary' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
