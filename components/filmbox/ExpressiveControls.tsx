


// "use client";

// import { useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";


// const videoSlides = [
//   {
//     id: "film-grain",
//     title: "FILM GRAIN",
//     description:
//       "Adds organic film grain texture to digital footage, mimicking analog film stock. It brings subtle depth, movement, and a cinematic character.",
//     video: "/LAB/videos/1FILM GRAIN.mov",
//   },
//   {
//     id: "halation",
//     title: "HALATION",
//     description:
//       "Simulates the glowing red/orange halo around bright highlights in film. Adds warmth and vintage authenticity.",
//     video: "/LAB/videos/2HALATION.mov",
//   },
//   {
//     id: "gateweave",
//     title: "GATEWEAVE",
//     description:
//       "Replicates the slight frame instability of projected film reels. It introduces subtle motion and imperfection for a filmic feel.",
//     video: "/LAB/videos/3GATEWEAVE.mov",
//   },
//   {
//     id: "film-saturation",
//     title: "FILM SATURATION",
//     description:
//       "Controls film-like color richness and depth. Boosts or softens saturation while preserving natural skin tones.",
//     video: "/LAB/videos/film-saturation.mov",
//   },
//   {
//     id: "film-density",
//     title: "FILM DENSITY",
//     description:
//       "Adjusts the density and richness of the film negative. It balances tonal weight, from thin washed images to deep dense film looks.",
//     video: "/LAB/videos/FIM DEN ISTY.mov",
//   },
//   {
//     id: "skin-control",
//     title: "SKIN CONTROL",
//     description:
//       "Advanced skin refinement tools isolate tones with precision, allowing hue, saturation, and density adjustments without affecting surrounding colors.",
//     video: "/LAB/videos/SKIN CONTROL.mov",
//   },
//   {
//     id: "temp-tint",
//     title: "TEMP & TINT",
//     description:
//       "Balances color temperature and tint with precision, shifting warm–cool and green–magenta tones without crushing shadows or black levels.",
//     video: "/LAB/videos/TEMP & TINT.mov",
//   },
// ];


// export default function VideoCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     slidesToScroll: 1,        // Scroll exactly one card at a time
//     containScroll: "trimSnaps",
//   });

//   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   return (
//     <section className="bg-black text-white py-16 md:py-24">
//       <div className="w-full px-4 md:px-8">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-4"
//         >
//           Cinematic Film Effects
//         </motion.h2>
        
//         <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
//           Experience the authentic analog tools that bring digital footage to life
//         </p>

//         {/* Full-width Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex gap-6 md:gap-8">
//               {videoSlides.map((slide) => (
//                 <div
//                   key={slide.id}
//                   className="flex-none w-full sm:w-1/2 lg:w-1/3"   // 1 | 2 | 3 cards visible
//                 >
//                   <SlideCard slide={slide} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons - Positioned outside for full width feel */}
//           <button
//             onClick={scrollPrev}
//             className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-black border border-zinc-700 hover:border-zinc-500 p-4 rounded-full transition-all hover:scale-110 text-zinc-400 hover:text-white shadow-2xl z-10"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-7 h-7" />
//           </button>

//           <button
//             onClick={scrollNext}
//             className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-black border border-zinc-700 hover:border-zinc-500 p-4 rounded-full transition-all hover:scale-110 text-zinc-400 hover:text-white shadow-2xl z-10"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-7 h-7" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Single Slide Card (kept clean & cinematic)
// function SlideCard({ slide }: { slide: any }) {
//   return (
//     <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col shadow-2xl h-full">
//       <div className="flex gap-5">
//         {/* Vertical Knob */}
//         <div className="relative h-72 w-2.5 bg-zinc-900 rounded-full mr-2 overflow-hidden flex-shrink-0">
//           <motion.div
//             className="w-full h-9 bg-white rounded-full shadow-md absolute left-0"
//             animate={{ top: [0, 255, 0] }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Video */}
//         <div className="relative flex-1 h-72 rounded-2xl overflow-hidden border border-zinc-800">
//           <video
//             src={slide.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//         </div>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-2xl font-bold text-white tracking-tight">
//           {slide.title}
//         </h3>
//         <p className="text-zinc-400 leading-relaxed mt-3 text-[15px]">
//           {slide.description}
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


// Professional Cinematic Copy
const videoSlides = [
  {
    id: "film-grain",
    title: "FILM GRAIN",
    description:
      "Introduce authentic analog texture with finely tuned film grain. Designed to add depth, motion, and subtle imperfection that transforms sterile digital footage into a living cinematic image.",
    video: "/LAB/videos/1FILM GRAIN.mov",
  },
  {
    id: "halation",
    title: "HALATION",
    description:
      "Recreate the signature glow of real film stock. Bright highlights bloom with warm red and amber halos, delivering the unmistakable softness and nostalgia of classic cinema.",
    video: "/LAB/videos/2HALATION.mov",
  },
  {
    id: "gateweave",
    title: "GATEWEAVE",
    description:
      "Simulate the natural movement of film passing through a projector. Subtle frame instability introduces organic motion, enhancing realism and delivering a true film projection feel.",
    video: "/LAB/videos/3GATEWEAVE.mov",
  },
  {
    id: "film-saturation",
    title: "FILM SATURATION",
    description:
      "Shape color with the richness and restraint of motion picture film. Enhance vibrancy while preserving tonal balance and maintaining beautifully natural skin reproduction.",
    video: "/LAB/videos/film-saturation.mov",
  },
  {
    id: "film-density",
    title: "FILM DENSITY",
    description:
      "Control the tonal weight of your image with film-style density adjustments. Move seamlessly between soft negatives and deep, cinematic contrast without sacrificing detail.",
    video: "/LAB/videos/FIM DEN ISTY.mov",
  },
  {
    id: "skin-control",
    title: "SKIN CONTROL",
    description:
      "Refine skin tones with surgical precision. Target hue, saturation, and density independently, ensuring flawless skin rendering while protecting surrounding colors.",
    video: "/LAB/videos/SKIN CONTROL.mov",
  },
  {
    id: "Film Damage",
    title: "FILM DAMAGE",
    description:
      "Create film imperfections in a digital pipeline by layering subtle damage elements—scratches, dust, hair, and chemical stains—over your final graded image.",
    video: "/LAB/videos/Timeline1.mov",
  },
];

export default function VideoCarousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="bg-black text-white py-20 md:py-28">

      <div className="w-full px-4 md:px-10">

        {/* Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-semibold tracking-tight mb-5"
        >
          Cinematic Film Effects
        </motion.h2>

        <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-14 leading-relaxed">
          Experience precision-crafted analog tools designed to transform
          digital footage into authentic cinematic imagery.
        </p>


        {/* Carousel */}

        <div className="relative">

          <div className="overflow-hidden" ref={emblaRef}>

            <div className="flex gap-7 md:gap-9">

              {videoSlides.map((slide) => (

                <div
                  key={slide.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3"
                >
                  <SlideCard slide={slide} />
                </div>

              ))}

            </div>

          </div>


          {/* Navigation Buttons */}

          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 
            bg-black border border-zinc-700 hover:border-zinc-500 
            p-4 rounded-full transition-all hover:scale-110 
            text-zinc-400 hover:text-white shadow-2xl z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>


          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 
            bg-black border border-zinc-700 hover:border-zinc-500 
            p-4 rounded-full transition-all hover:scale-110 
            text-zinc-400 hover:text-white shadow-2xl z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

        </div>

      </div>

    </section>
  );
}


// Slide Card Component

function SlideCard({ slide }: { slide: any }) {

  return (

    <div
      className="
      bg-zinc-950 
      border border-zinc-800 
      rounded-3xl 
      p-7 
      flex flex-col 
      shadow-2xl 
      h-full
      transition-all duration-300
      hover:border-zinc-600
      hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]
      "
    >

      <div className="flex gap-5">

        {/* Animated Vertical Knob */}

        <div
          className="
          relative 
          h-72 
          w-2.5 
          bg-zinc-900 
          rounded-full 
          mr-2 
          overflow-hidden 
          flex-shrink-0
          "
        >

          <motion.div
            className="
            w-full 
            h-9 
            bg-white 
            rounded-full 
            shadow-md 
            absolute left-0
            "
            animate={{ top: [0, 255, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </div>


        {/* Video */}

        <div
          className="
          relative 
          flex-1 
          h-72 
          rounded-2xl 
          overflow-hidden 
          border border-zinc-800
          "
        >

          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}

          <div
            className="
            absolute inset-0 
            bg-gradient-to-t 
            from-black/60 
            via-transparent 
            to-transparent
            "
          />

        </div>

      </div>


      {/* Text Section */}

      <div className="mt-7">

        <h3
          className="
          text-2xl 
          font-semibold 
          text-white 
          tracking-wide
          "
        >
          {slide.title}
        </h3>

        <p
          className="
          text-zinc-400 
          leading-relaxed 
          mt-3 
          text-[15px]
          max-w-[95%]
          "
        >
          {slide.description}
        </p>

      </div>

    </div>

  );
}