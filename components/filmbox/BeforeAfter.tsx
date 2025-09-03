'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-cinematic"
        >
          <div 
            className="relative w-full h-[400px] md:h-[500px] cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg"
                alt="Original footage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Original
              </div>
            </div>

            {/* After Image */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg"
                alt="Filmbox processed footage"
                fill
                className="object-cover brightness-110 contrast-110 saturate-110 sepia-[0.1]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              <div className="absolute bottom-4 right-4 bg-filmbox-primary/90 text-white px-3 py-1 rounded-full text-sm">
                Filmbox
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-filmbox-primary cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-filmbox-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}