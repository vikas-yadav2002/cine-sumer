'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseImages = [
  'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg',
  'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
  'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
  'https://images.pexels.com/photos/7991391/pexels-photo-7991391.jpeg',
  'https://images.pexels.com/photos/7991447/pexels-photo-7991447.jpeg',
  'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg',
];

export function Showcase() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % showcaseImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? showcaseImages.length - 1 : selectedImage - 1);
    }
  };

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
            Showcase Gallery
          </h2>
          <p className="text-lg text-filmbox-text-secondary">
            See Filmbox in action across different scenes and styles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {showcaseImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-xl overflow-hidden cursor-pointer shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Showcase image ${index + 1}`}
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={showcaseImages[selectedImage]}
                  alt={`Showcase image ${selectedImage + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
                
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 p-2 rounded-full bg-filmbox-bg/80 text-filmbox-text-primary hover:bg-filmbox-bg transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-filmbox-bg/80 text-filmbox-text-primary hover:bg-filmbox-bg transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-filmbox-bg/80 text-filmbox-text-primary hover:bg-filmbox-bg transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}