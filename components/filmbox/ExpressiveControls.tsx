"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Your video slides (title + description + video path)
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
  {
    id: "bleach-bypass",
    title: "BLEACH BYPASS",
    description:
      "Simulates the bleach bypass process with a dedicated Silver control, adding gritty contrast and desaturated tones while retaining cinematic depth.",
    video: "/LAB/videos/BLEACH-BYPASS.mov",
  },
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
  {
    id: "hue-split",
    title: "HUE SPLIT & CYAN",
    description:
      "Enhances color separation and contrast through a hue split system, creating stronger cinematic depth and refined tonal balance.",
    video: "/LAB/videos/HUE SPLIT AND CYAN.mov",
  },
  {
    id: "split-tone",
    title: "SPLIT TONE",
    description:
      "Two modes: CONTEMPORARY (warm highlights + cool shadows for a modern look) and RETRO (cool highlights + warm shadows for vintage feel).",
    video: "/LAB/videos/SPLIT-TONE.mov",
  },
  {
    id: "printstock",
    title: "PRINTSTOCK",
    description:
      "Includes Kodak 2383 (D55, D60, D65) and Fuji 3513 (D55, D60, D65) emulations, accurately reproducing classic print film contrast and color balance.",
    video: "/LAB/videos/PRINTSTOCK.mov",
  },
  {
    id: "negative-stock",
    title: "NEGATIVE STOCK",
    description:
      "Simulates various film negative responses, shaping contrast and color behavior at the foundational capture stage.",
    video: "/LAB/videos/Negtaive stock.mov",
  },
  {
    id: "print-look",
    title: "PRINT LOOK",
    description:
      "Original creative grades inspired by modern cinematography, designed to capture mood and tone rather than replicate a single stock.",
    video: "/LAB/videos/PRINT LOOK.mov",
  },
];


export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: "center" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-neutral-900 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10">Cinematic Film Effects</h2>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {videoSlides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-[90%] sm:min-w-[60%] lg:min-w-[40%] px-6" // ⬅️ wider cards
              >
                <SlideCard slide={slide} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

// Single Slide
function SlideCard({ slide }: { slide: any }) {
  return (
    <div className="bg-neutral-800 rounded-2xl p-6 flex flex-col shadow-lg relative">
      <div className="flex">
        {/* Vertical Knob */}
        <div className="relative h-72 w-2 bg-neutral-700 rounded-full mr-4 overflow-hidden">
          <motion.div
            className="w-2 h-8 bg-white rounded-full shadow-lg border border-neutral-400 absolute left-0"
            animate={{ top: [0, 260, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Video */}
        <div className="relative flex-1 h-72 rounded-xl overflow-hidden">
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-4">{slide.title}</h3>
      <p className="text-base text-neutral-400 mt-2">{slide.description}</p>
    </div>
  );
}

