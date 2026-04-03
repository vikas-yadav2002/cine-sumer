


"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


const videoSlides = [
  {
    id: "film-grain",
    title: "FILM GRAIN",
    description:
      "Adds organic film grain texture to digital footage, mimicking analog film stock. It brings subtle depth, movement, and a cinematic character.",
    video: "/LAB/videos/1FILM GRAIN.mov",
  },
  {
    id: "halation",
    title: "HALATION",
    description:
      "Simulates the glowing red/orange halo around bright highlights in film. Adds warmth and vintage authenticity.",
    video: "/LAB/videos/2HALATION.mov",
  },
  {
    id: "gateweave",
    title: "GATEWEAVE",
    description:
      "Replicates the slight frame instability of projected film reels. It introduces subtle motion and imperfection for a filmic feel.",
    video: "/LAB/videos/3GATEWEAVE.mov",
  },
  // {
  //   id: "bleach-bypass",
  //   title: "BLEACH BYPASS",
  //   description:
  //     "Simulates the bleach bypass process with a dedicated Silver control, adding gritty contrast and desaturated tones while retaining cinematic depth.",
  //   video: "/LAB/videos/BLEACH-BYPASS.mov",
  // },
  {
    id: "film-saturation",
    title: "FILM SATURATION",
    description:
      "Controls film-like color richness and depth. Boosts or softens saturation while preserving natural skin tones.",
    video: "/LAB/videos/film-saturation.mov",
  },
  {
    id: "film-density",
    title: "FILM DENSITY",
    description:
      "Adjusts the density and richness of the film negative. It balances tonal weight, from thin washed images to deep dense film looks.",
    video: "/LAB/videos/FIM DEN ISTY.mov",
  },
  {
    id: "skin-control",
    title: "SKIN CONTROL",
    description:
      "Advanced skin refinement tools isolate tones with precision, allowing hue, saturation, and density adjustments without affecting surrounding colors.",
    video: "/LAB/videos/SKIN CONTROL.mov",
  },
  {
    id: "temp-tint",
    title: "TEMP & TINT",
    description:
      "Balances color temperature and tint with precision, shifting warm–cool and green–magenta tones without crushing shadows or black levels.",
    video: "/LAB/videos/TEMP & TINT.mov",
  },
  // {
  //   id: "hue-split",
  //   title: "HUE SPLIT & CYAN",
  //   description:
  //     "Enhances color separation and contrast through a hue split system, creating stronger cinematic depth and refined tonal balance.",
  //   video: "/LAB/videos/HUE SPLIT AND CYAN.mov",
  // },
  // {
  //   id: "split-tone",
  //   title: "SPLIT TONE",
  //   description:
  //     "Two modes: CONTEMPORARY (warm highlights + cool shadows for a modern look) and RETRO (cool highlights + warm shadows for vintage feel).",
  //   video: "/LAB/videos/SPLIT-TONE.mov",
  // },
  // {
  //   id: "printstock",
  //   title: "PRINTSTOCK",
  //   description:
  //     "Includes Kodak 2383 (D55, D60, D65) and Fuji 3513 (D55, D60, D65) emulations, accurately reproducing classic print film contrast and color balance.",
  //   video: "/LAB/videos/PRINTSTOCK.mov",
  // },
  // {
  //   id: "negative-stock",
  //   title: "NEGATIVE STOCK",
  //   description:
  //     "Simulates various film negative responses, shaping contrast and color behavior at the foundational capture stage.",
  //   video: "/LAB/videos/Negtaive stock.mov",
  // },
  // {
  //   id: "print-look",
  //   title: "PRINT LOOK",
  //   description:
  //     "Original creative grades inspired by modern cinematography, designed to capture mood and tone rather than replicate a single stock.",
  //   video: "/LAB/videos/PRINT LOOK.mov",
  // },
];


export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,        // Scroll exactly one card at a time
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Cinematic Film Effects
        </motion.h2>
        
        <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
          Experience the authentic analog tools that bring digital footage to life
        </p>

        {/* Full-width Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {videoSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3"   // 1 | 2 | 3 cards visible
                >
                  <SlideCard slide={slide} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Positioned outside for full width feel */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-black border border-zinc-700 hover:border-zinc-500 p-4 rounded-full transition-all hover:scale-110 text-zinc-400 hover:text-white shadow-2xl z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-black border border-zinc-700 hover:border-zinc-500 p-4 rounded-full transition-all hover:scale-110 text-zinc-400 hover:text-white shadow-2xl z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Single Slide Card (kept clean & cinematic)
function SlideCard({ slide }: { slide: any }) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col shadow-2xl h-full">
      <div className="flex gap-5">
        {/* Vertical Knob */}
        <div className="relative h-72 w-2.5 bg-zinc-900 rounded-full mr-2 overflow-hidden flex-shrink-0">
          <motion.div
            className="w-full h-9 bg-white rounded-full shadow-md absolute left-0"
            animate={{ top: [0, 255, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Video */}
        <div className="relative flex-1 h-72 rounded-2xl overflow-hidden border border-zinc-800">
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {slide.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mt-3 text-[15px]">
          {slide.description}
        </p>
      </div>
    </div>
  );
}