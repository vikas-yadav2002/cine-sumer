"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatedPreloader } from "./AnimatedLoader";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);
const [minTimePassed, setMinTimePassed] = useState(false);

  

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleCanPlayThrough = () => {
      setTimeout(() => setIsReady(true), 250);
    };
    if (video.readyState >= 4) {
      handleCanPlayThrough();
    } else {
      video.addEventListener("canplaythrough", handleCanPlayThrough, {
        once: true,
      });
    }

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  useEffect(() => {
  const minDelay = setTimeout(() => setMinTimePassed(true), 1500);
  return () => clearTimeout(minDelay);
}, []);


  return (
    <>
      <AnimatedPreloader text="CineSummer" targetReady={isReady} />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
        <div
          className={`absolute inset-0 z-49 flex items-center justify-center bg-[#121212] transition-opacity duration-700 ease-in-out ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={isReady}
        ></div>
        <div
          className="absolute inset-0 bg-filmbox-bg transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.06), transparent 60%), #121212`,
            opacity: 1,
          }}
        />

        {/* Background video */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/cinematic.jpg"
        >
          <source src="/cinematic.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
          style={{
            height: "16rem", // tune: e.g., 12rem / 16rem depending how gradual you want it
            background:
              "linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.35) 40%, rgba(18,18,18,1) 100%)",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }} // Delay slightly after preloader fades
            className="space-y-8"
          >
            {/* Title */}
            <motion.h1 className="text-5xl md:text-6xl font-bold tracking-tight text-filmbox-text-primary drop-shadow-lg">
              Filmbox
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="text-xl md:text-2xl text-filmbox-text-secondary max-w-2xl mx-auto leading-relaxed drop-shadow">
              Film emulation without compromise.
              <br />
              <span className="text-lg text-filmbox-text-muted">
                Authentic print profiles, nuanced grain, halation, and color
                density with ACES and HDR support.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="flex items-center rounded-md border border-slate-100 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-100 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Choose Plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Sub CTA */}
           
          </motion.div>
        </div>
      </section>
    </>
  );
}
