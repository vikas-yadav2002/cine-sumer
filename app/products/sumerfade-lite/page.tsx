"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";

/* ----------------------------- */
/* IMAGE LIST */
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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <div className="px-6 md:px-16 pt-24 pb-16 w-full mx-auto">

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

          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
            SUMERFADE – LITE
          </h1>

          <ReadingText
            text="A flexible single node film emulation engine built to translate the language of film into precise tonal behaviour and cinematic colour."
            className="text-gray-400 mt-5 text-sm max-w-2xl mx-auto"
            startDelay={0.8}
            speed="fast"
          />

        </motion.div>

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT — TEXT */}

          <div className="space-y-6 w-full lg:pr-16">

            <ReadingText
              text="SumerFade Lite is a streamlined film emulation DCTL for DaVinci Resolve — built to deliver the essential character of 35mm film without complexity getting in the way."
              className="text-xl md:text-2xl font-medium leading-snug"
              startDelay={1.2}
              speed="fast"
            />

            <ReadingText
              text="It's the fastest way to understand how the emulation responds to your footage: real film physics, real tonal behaviour, and real film grain — delivered through a simplified control set."
              className="text-gray-400 text-sm leading-relaxed"
              startDelay={2}
              speed="fast"
            />

            {/* WHAT'S INSIDE */}

            <ReadingText
              text="What's Inside"
              className="text-sm tracking-wide text-white/60 uppercase pt-4"
              startDelay={2.6}
              speed="fast"
            />

            {/* FEATURES */}

            <div className="pt-6 border-t border-neutral-800 space-y-5">

              <Feature
                title="Tonal & Color Response"
                description="Film-inspired contrast shaping, middle grey control, shadow and highlight roll-off, and an RGB density model controlling per-channel colour weight across the tonal range."
                delay={3}
              />

              <Feature
                title="Film Saturation"
                description="A saturation model built around film's native colour behaviour — not digital HSL approximations."
                delay={3.4}
              />

              <Feature
                title="Split Mix"
                description="Controls negative stock behaviour, allowing entirely different tonal moods from a single stock profile."
                delay={3.8}
              />

              <Feature
                title="35mm Film Grain"
                description="Authentic 35mm grain with independent strength and colour response controls."
                delay={4.2}
              />

              <Feature
                title="Film Halation"
                description="35mm-style halation with adjustable strength and selectable presets."
                delay={4.6}
              />

              <Feature
                title="Gate Weave"
                description="Subtle frame movement that restores the mechanical feel of a physical film camera."
                delay={5.0}
              />

              <Feature
                title="Film Damage"
                description="Analog artifacts and imperfections that introduce wear, age, and physical history into the image."
                delay={5.4}
              />

              <Feature
                title="Built-in DRT"
                description="An integrated display rendering transform ensuring the emulation lands correctly on your monitor without requiring external nodes."
                delay={5.8}
              />

              <Feature
                title="Stock Profiles"
                description="Selectable negative and print stock profiles that define the core emulation character."
                delay={6.2}
              />

            </div>
           {/* SIGNATURE */}

<div className="pt-10 border-t border-neutral-800">

  <ReadingText
    text="Built to make film behaviour understandable, controllable, and creatively flexible — without losing the character that makes film feel alive."
    className="text-gray-400 text-sm leading-relaxed"
    startDelay={6.6}
    speed="fast"
  />

  <ReadingText
    text="Best regards,"
    className="text-white text-sm mt-6"
    startDelay={7.2}
    speed="fast"
  />

  <ReadingText
    text="Sumer"
    className="text-white text-lg font-medium tracking-wide"
    startDelay={7.6}
    speed="fast"
  />

</div>
            {/* DOWNLOAD BUTTON */}

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
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  bg-white
                  text-black
                  text-sm
                  font-medium
                  tracking-wide
                  hover:bg-black
                  hover:text-white
                  border border-white
                  transition-all duration-300
                "
              >

                DOWNLOAD FREE DCTL

              </motion.a>

            </div>

          </div>

          {/* RIGHT — IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex flex-col items-center"
          >

            {/* IMAGE FRAME */}

            <div className="
              relative
              w-full
              h-[85vh]
              aspect-[4/5]
              overflow-hidden
              bg-neutral-950
            ">

              <Image
                src={images[index]}
                alt="SumerFade Lite Preview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  object-center
                  transition duration-700 ease-in-out
                "
              />

            </div>

            {/* DOT NAVIGATION */}

            <div className="flex justify-center mt-6 gap-3">

              {images.map((_, i) => (

                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`
                    h-[6px]
                    transition-all duration-300
                    ${
                      i === index
                        ? "w-8 bg-white"
                        : "w-4 bg-neutral-600 hover:bg-neutral-400"
                    }
                  `}
                />

              ))}

            </div>

          </motion.div>

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