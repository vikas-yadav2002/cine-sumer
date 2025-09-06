"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Youtube, Instagram, Link } from "lucide-react";
import { AnimatedPreloader } from "./AnimatedLoader";

export function Hero() {
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images from public/landingpage/
  const images = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/3.png",
    "/hero/4.png",
    "/hero/5.png",  
    "/hero/6.png",
    "/hero/7.png"
  ];

  // Slideshow effect
  useEffect(() => {
    setIsReady(true); // preloader trigger
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <AnimatedPreloader text="CINESUMER" targetReady={isReady} />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
        {/* Overlay while loading */}
        <div
          className={`absolute inset-0 z-40 flex items-center justify-center bg-[#121212] transition-opacity duration-700 ease-in-out ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={isReady}
        ></div>

        {/* Background Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Background slideshow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
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
        <div className="relative z-30 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Title */}
            <motion.h1
              className="font-extrabold tracking-tight text-white 
             text-6xl md:text-7xl leading-[1.1]"
            >
              SumerFade
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 text-lg md:text-2xl font-medium 
             text-neutral-300 max-w-2xl mx-auto leading-relaxed"
            >
              Precision-crafted looks for colorists who refuse to fake it.{" "}
              <br />
              <span className="text-neutral-400">
                Authentic print profiles, nuanced grain, halation, and color
                density with ACES and HDR support.
              </span>
            </motion.p>

            {/* Links (white icons) */}
            <motion.div className="mt-8 flex items-center justify-center space-x-6">
              <a
                href="https://www.youtube.com/@CINESUMER/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-neutral-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://www.instagram.com/cinesumer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-neutral-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://buymeacoffee.com/cinesumerb/extras"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-neutral-300 transition-colors"
                aria-label="Demo Link"
              >
                <Link size={22} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
