"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Youtube, Instagram, Link } from "lucide-react";

export function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/4.png",
    "/hero/5.png",
    "/hero/6.png",
    "/hero/7.png",
    "/hero/8.png",
    "/hero/9.png",
    "/hero/12.png",
    "/hero/13.png",
    "/hero/14.png",
    "/hero/15.png",
    "/hero/16.png",
    "/hero/17.png",
    "/hero/18.png",
    "/hero/19.png",
    "/hero/20.png",
    "/hero/21.png",
    "/hero/22.png",
    "/hero/23.png",
  ];

  useEffect(() => {
    setIsReady(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black">
      {/* Overlay while loading */}
      <div
        className={`absolute inset-0 z-40 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden={isReady}
      />

      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          {images.map((img, idx) =>
            idx === currentIndex ? (
              <motion.img
                key={img}
                src={img}
                alt="Background slideshow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Smooth Gradient Fade at Bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
        style={{
          height: "26rem",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,1) 88%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-30 max-w-5xl px-6 md:px-12 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-10"
        >
          {/* Tagline */}
          <motion.h1 className="text-white font-extrabold tracking-tighter text-4xl md:text-6xl leading-tight max-w-3xl">
            Precision-crafted looks for colorists who refuse to fake it.
          </motion.h1>

          {/* Minimalist Icon Links - Hover makes text & icon brighter white */}
          <motion.div className="flex flex-wrap gap-x-9 gap-y-5">
            <a
              href="https://www.youtube.com/@CINESUMER/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube 
                size={26} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium text-lg tracking-wide">YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/cinesumer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram 
                size={26} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium text-lg tracking-wide">Instagram</span>
            </a>

            <a
              href="https://buymeacoffee.com/cinesumerb/e/449696"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-all duration-300"
              aria-label="Demo DCTL"
            >
              <Link 
                size={26} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium text-lg tracking-wide">Demo DCTL</span>
            </a>

            <a
              href="https://buymeacoffee.com/cinesumerb/e/447385"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-300 hover:text-white transition-all duration-300"
              aria-label="PDF"
            >
              <Link 
                size={26} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span className="font-medium text-lg tracking-wide">PDF</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}