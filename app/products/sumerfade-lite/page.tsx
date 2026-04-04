"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";

/* ----------------------------- */
/* IMAGE SLIDER */
/* ----------------------------- */

const images = [
  "/sumerfadelite/1.jpg",
  "/sumerfadelite/2.jpg",
  "/sumerfadelite/3.jpg",
  "/sumerfadelite/4.jpg",
  "/sumerfadelite/5.jpg",
  "/sumerfadelite/6.jpg",
  "/sumerfadelite/7.jpg",
  "/sumerfadelite/8.jpg",
  "/sumerfadelite/9.jpg",
];

export default function SumerFadeLitePage() {
  const [index, setIndex] = useState(0);

  /* Auto Slider */

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-32 pb-24">

      <Navbar />

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wide">
          SUMERFADE – LITE
        </h1>

        <ReadingText
          text="A flexible single node film emulation engine designed to deliver authentic 35mm character with speed and clarity."
          className="text-gray-400 mt-4 text-sm max-w-2xl mx-auto"
          startDelay={0.8}
          speed="fast"
        />
      </motion.div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">

        {/* LEFT — SLIDER */}

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative"
>

  {/* IMAGE CONTAINER */}

  <div className="
    relative
    w-full
    h-[420px]
    md:h-[500px]
    lg:h-[560px]
    rounded-2xl
    overflow-hidden
    border border-neutral-800
    bg-black
  ">

    <Image
      src={images[index]}
      alt="SumerFade Lite Preview"
      fill

      /* KEY CHANGE */
      className="object-contain transition duration-700"

      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
    />

  </div>

  {/* DOTS */}

  <div className="flex justify-center mt-4 gap-2">

    {images.map((_, i) => (

      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-2 h-2 rounded-full transition-all duration-300
        ${
          i === index
            ? "bg-white scale-110"
            : "bg-neutral-600"
        }`}
      />

    ))}

  </div>

</motion.div>

        {/* RIGHT — TEXT */}

        <div className="space-y-6 max-w-xl">

          {/* MAIN LINE */}

          <ReadingText
            text="A flexible single node film emulation engine built for real cinematic workflows."
            className="text-xl md:text-2xl font-medium leading-snug"
            startDelay={1.2}
            speed="fast"
          />

          {/* PARAGRAPHS */}

          <ReadingText
            text="SumerFade Lite is a streamlined film emulation DCTL for DaVinci Resolve — built to deliver authentic 35mm character without unnecessary complexity."
            className="text-gray-400 text-sm leading-relaxed"
            startDelay={2}
            speed="fast"
          />

          <ReadingText
            text="Real film physics, tonal behaviour, and grain response — simplified into a fast, practical workflow."
            className="text-gray-400 text-sm leading-relaxed"
            startDelay={2.6}
            speed="fast"
          />

          {/* FEATURES */}

          <div className="pt-6 border-t border-neutral-800 space-y-5">

            <Feature
              title="Tonal & Color Response"
              description="Film-style contrast shaping and density control."
              delay={3}
            />

            <Feature
              title="Film Saturation"
              description="Built around real film colour behaviour."
              delay={3.6}
            />

            <Feature
              title="Split Mix"
              description="Create different moods from one stock."
              delay={4.2}
            />

            <Feature
              title="35mm Grain & Halation"
              description="Authentic texture and glow simulation."
              delay={4.8}
            />

            <Feature
              title="Gate Weave & Damage"
              description="Analog motion imperfections."
              delay={5.4}
            />

            <Feature
              title="Built-in DRT"
              description="No external node setup required."
              delay={6}
            />

            <Feature
              title="Stock Profiles"
              description="Multiple negative and print options."
              delay={6.6}
            />

          </div>

          {/* BUTTON */}

          <div className="pt-8">

            <motion.a
              href="https://buymeacoffee.com/cinesumerb/e/449696"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{
                delay: 1.5,
                duration: 0.6,
              }}

              className="
                inline-flex items-center justify-center
                px-8 py-3
                bg-white
                text-black
                text-sm
                font-medium
                tracking-wide
                border border-white
                hover:bg-black
                hover:text-white
                transition-all duration-300
              "
            >
              DOWNLOAD FREE DCTL

            </motion.a>

          </div>

        </div>

      </div>

    </div>
  );
}

/* -------------------------------- */
/* READING TEXT COMPONENT */
/* -------------------------------- */

function ReadingText({
  text,
  className = "",
  startDelay = 0,
  speed = "normal",
}: {
  text: string;
  className?: string;
  startDelay?: number;
  speed?: "slow" | "normal" | "fast";
}) {

  const words = text.split(" ");

  let wordDelay = 0.14;

  if (speed === "slow") wordDelay = 0.18;
  if (speed === "fast") wordDelay = 0.05;

  return (
    <p className={className}>

      {words.map((word, i) => (

        <motion.span
          key={i}

          initial={{
            opacity: 0,
            x: -6,
            filter: "blur(4px)",
          }}

          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}

          transition={{
            delay: startDelay + i * wordDelay,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="mr-2 inline-block"

          style={{
            textShadow:
              "0 0 8px rgba(255,255,255,0.08)",
          }}
        >
          {word}
        </motion.span>

      ))}

    </p>
  );
}

/* -------------------------------- */
/* FEATURE COMPONENT */
/* -------------------------------- */

function Feature({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {

  return (

    <div className="space-y-1">

      <ReadingText
        text={title}
        className="text-sm font-medium"
        startDelay={delay}
        speed="fast"
      />

      <ReadingText
        text={description}
        className="text-gray-400 text-xs leading-relaxed"
        startDelay={delay + 0.3}
        speed="fast"
      />

    </div>

  );
}