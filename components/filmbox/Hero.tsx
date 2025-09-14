"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Youtube, Instagram, Link } from "lucide-react";
import { AnimatedPreloader } from "./AnimatedLoader";

export function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/3.png",
    "/hero/4.png",
    "/hero/5.png",
    "/hero/6.png",
    "/hero/7.png",
  ];

  useEffect(() => {
    setIsReady(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <AnimatedPreloader text="CINESUMER" targetReady={isReady} />
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-[#121212]">
        {/* Overlay while loading */}
        <div
          className={`absolute inset-0 z-40 flex items-center justify-center bg-[#121212] transition-opacity duration-700 ease-in-out ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={isReady}
        ></div>

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

        {/* Gradient Fade at Bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
          style={{
            height: "16rem",
            background:
              "linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.35) 40%, rgba(18,18,18,1) 100%)",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-30 max-w-5xl px-6 md:px-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Tagline aligned left */}
            <motion.h1 className="text-white font-extrabold tracking-tight text-4xl md:text-6xl leading-tight max-w-2xl">
              Precision-crafted looks for colorists who refuse to fake it.
            </motion.h1>

            {/* Icons in row, aligned like buttons */}
            <motion.div className="flex space-x-6">
              <a
                href="https://www.youtube.com/@CINESUMER/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-md text-white font-medium   transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} className="mr-2" /> YouTube
              </a>
              <a
                href="https://www.instagram.com/cinesumer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-md text-white font-medium   transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="mr-2" /> Instagram
              </a>
              <a
                href="https://buymeacoffee.com/cinesumerb/e/449696"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-md text-white font-medium   transition-colors"
                aria-label="Demo Link"
              >
                <Link size={20} className="mr-2" /> Demo DCTL
              </a>
              <a
                href="https://buymeacoffee.com/cinesumerb/e/447385"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-md text-white font-medium   transition-colors"
                aria-label="Demo Link"
              >
                <Link size={20} className="mr-2" />PDF
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
