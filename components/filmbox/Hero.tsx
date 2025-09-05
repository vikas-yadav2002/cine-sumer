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
      <AnimatedPreloader text="CINESUMER" targetReady={isReady} />
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
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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

            {/* CTAs */}
            <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://buymeacoffee.com/cinesumerb/extras"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white text-black font-semibold 
               py-3 px-6 text-base hover:bg-neutral-200 transition-all"
              >
                DEMO
              </a>

              <a
                href="https://www.youtube.com/@CINESUMER/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-red-600 text-white font-semibold 
               py-3 px-6 text-base hover:bg-red-700 transition-all"
              >
                YT CHANNEL
              </a>

              <a
                href="https://www.instagram.com/cinesumer/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-pink-600 text-white font-semibold 
               py-3 px-6 text-base hover:bg-pink-700 transition-all"
              >
                IG LINK
              </a>
            </motion.div>
            </div>

            {/* Sub CTA */}
          </motion.div>
        </div>
      </section>
    </>
  );
}


// /* "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { AnimatedPreloader } from "./AnimatedLoader";

// export function Hero() {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     const handleCanPlayThrough = () => {
//       setTimeout(() => setIsReady(true), 250);
//     };
//     if (video.readyState >= 4) {
//       handleCanPlayThrough();
//     } else {
//       video.addEventListener("canplaythrough", handleCanPlayThrough, {
//         once: true,
//       });
//     }
//     return () => {
//       video.removeEventListener("canplaythrough", handleCanPlayThrough);
//     };
//   }, []);

//   return (
//     <>
//       <AnimatedPreloader text="CINESUMER" targetReady={isReady} />
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
//         {/* Background video */}
//         <video
//           ref={videoRef}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//             isReady ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster="/cinematic.jpg"
//         >
//           <source src="/cinematic.mp4" type="video/mp4" />
//         </video>

//         {/* Dark overlay (tweak opacity for more/less darkness) */}
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>

//         {/* Bottom gradient (keeps footer contrast) */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
//           style={{
//             height: "16rem",
//             background:
//               "linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.35) 40%, rgba(18,18,18,1) 100%)",
//           }}
//         />

//         {/* Foreground content */}
//         <div className="relative z-30 max-w-4xl mx-auto px-4 md:px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isReady ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-8"
//           >
//             {/* Title */}
//             <h1 className="font-extrabold tracking-tight text-white text-6xl md:text-7xl leading-[1.1]">
//               SumerFade
//             </h1>

//             {/* Subtitle */}
//             <p className="mt-6 text-lg md:text-2xl font-medium text-neutral-200 max-w-2xl mx-auto leading-relaxed">
//               Precision-crafted looks for colorists who refuse to fake it.
//               <br />
//               <span className="text-neutral-400">
//                 Authentic print profiles, nuanced grain, halation, and color
//                 density with ACES and HDR support.
//               </span>
//             </p>

//             {/* CTAs */}
//             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a
//                 href="https://buymeacoffee.com/cinesumerb/extras"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-md bg-white text-black font-semibold py-3 px-6 text-base hover:bg-neutral-200 transition-all"
//               >
//                 DEMO
//               </a>
//               <a
//                 href="https://www.youtube.com/@CINESUMER/videos"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-md bg-red-600 text-white font-semibold py-3 px-6 text-base hover:bg-red-700 transition-all"
//               >
//                 YT CHANNEL
//               </a>
//               <a
//                 href="https://www.instagram.com/cinesumer/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-md bg-pink-600 text-white font-semibold py-3 px-6 text-base hover:bg-pink-700 transition-all"
//               >
//                 IG LINK
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
// */