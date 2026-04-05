'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  before: string;
  after: string;
};

type ComparisonSliderProps = {
  slides: Slide[];

  title?: string;
  description?: string;

  beforeLabel?: string;
  afterLabel?: string;

  height?: number;
};

export function ComparisonSlider({
  slides,

  title,
  description,

  beforeLabel = 'Original',
  afterLabel = 'Processed',

  height = 650,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const percentage = Math.max(
      0,
      Math.min(100, (x / rect.width) * 100)
    );

    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

    setSliderPosition(50);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

    setSliderPosition(50);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-black">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Title */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            max-w-6xl
            mx-auto
            rounded-3xl
            overflow-hidden
            shadow-2xl
            border
            border-zinc-800
            bg-black
          "
        >

          <div
            className="relative w-full cursor-col-resize select-none"
            style={{ height: `${height}px` }}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >

            {/* BEFORE */}
            <div className="absolute inset-0">

              <Image
                src={slides[currentSlide].before}
                alt="Before"
                fill
                className="object-cover"
                sizes="100vw"
              />

              <div className="
                absolute
                bottom-4
                left-4
                bg-black/80
                text-white
                px-4
                py-1.5
                rounded-full
                text-sm
                font-medium
                backdrop-blur-sm
              ">
                {beforeLabel}
              </div>

            </div>

            {/* AFTER */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >

              <Image
                src={slides[currentSlide].after}
                alt="After"
                fill
                className="
                  object-cover
                  brightness-110
                  contrast-110
                  saturate-110
                "
                sizes="100vw"
              />

              <div className="
                absolute
                bottom-4
                right-4
                bg-white/90
                text-black
                px-4
                py-1.5
                rounded-full
                text-sm
                font-medium
                backdrop-blur-sm
              ">
                {afterLabel}
              </div>

            </div>

            {/* Slider Handle */}
            <div
              className="
                absolute
                top-0
                bottom-0
                w-0.5
                bg-white
              "
              style={{ left: `${sliderPosition}%` }}
            >

              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  transform
                  -translate-x-1/2
                  -translate-y-1/2
                  w-9
                  h-9
                  bg-white
                  rounded-full
                  border-4
                  border-zinc-900
                  shadow-2xl
                  flex
                  items-center
                  justify-center
                "
              >
                <div className="w-1.5 h-5 bg-zinc-900 rounded-full" />
              </div>

            </div>

          </div>

          {/* Navigation */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="
                  absolute
                  top-1/2
                  -left-14
                  md:-left-16
                  p-4
                  rounded-full
                  bg-black
                  border
                  border-zinc-700
                  hover:border-zinc-500
                  text-zinc-400
                  hover:text-white
                  transition-all
                  hover:scale-110
                "
              >
                <ChevronLeft size={34} />
              </button>

              <button
                onClick={nextSlide}
                className="
                  absolute
                  top-1/2
                  -right-14
                  md:-right-16
                  p-4
                  rounded-full
                  bg-black
                  border
                  border-zinc-700
                  hover:border-zinc-500
                  text-zinc-400
                  hover:text-white
                  transition-all
                  hover:scale-110
                "
              >
                <ChevronRight size={34} />
              </button>
            </>
          )}

        </motion.div>

        {/* Dots */}
        {slides.length > 1 && (
          <div className="flex justify-center mt-8 space-x-3">

            {slides.map((_, i) => (

              <button
                key={i}
                onClick={() => {
                  setCurrentSlide(i);
                  setSliderPosition(50);
                }}
                className={`
                  w-3
                  h-3
                  rounded-full
                  transition-all
                  ${
                    i === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-zinc-700 hover:bg-zinc-500'
                  }
                `}
              />

            ))}

          </div>
        )}

      </div>

    </section>
  );
}