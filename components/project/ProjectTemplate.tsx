"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WorkSection from "@/components/filmbox/WorkSection";
import { FaqAccordion } from "../filmbox/Question";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

type Props = {
  title: string;
  videoUrl: string;
  imagesPath: string;
  imageCount: number; // ✅ ADD THIS
  details: {
  negativeStock: string;
  printStock: string;
  camera: string;
};
};

export default function ProjectTemplate({
  title,
  videoUrl,
  imagesPath,
  imageCount,
  details,
}: Props) {

  // Example placeholder gallery
  const galleryImages = Array.from(
  { length: imageCount },
  (_, i) => `${imagesPath}/${i + 1}.png`
);

  return (
    <div className="bg-black text-white">


    {/* HERO SECTION */}

<section className="relative w-full bg-black py-24 overflow-hidden">

  {/* Sliding Title Background */}

  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
      className="
        whitespace-nowrap
        flex
        gap-24
        text-white/10
        text-[8vw]
        md:text-[6vw]
        font-light
        tracking-tight
      "
    >
      {[...Array(10)].map((_, i) => (
        <span key={i}>{title}</span>
      ))}
    </motion.div>

  </div>

  {/* Video */}

  <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10">

    <div className="aspect-video rounded-xl overflow-hidden bg-black">

     <ReactPlayer
  src={`${videoUrl}?controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoUrl.split("v=")[1]}`}
  playing
  muted
  loop
  playsInline
  width="100%"
  height="100%"
  className="react-player"

  light={false}
  pip={false}
/>
    </div>

  </div>

</section>

      {/* DETAILS + GALLERY */}

      <section className="grid lg:grid-cols-3 border-t border-white/10">

        {/* LEFT DETAILS */}

        <div className="p-10 space-y-6 border-r border-white/10">

          <Detail
  label="Negative Stock"
  value={details.negativeStock}
/>

<Detail
  label="Print Stock"
  value={details.printStock}
/>

<Detail
  label="Camera"
  value={details.camera}
/>

        </div>

        {/* PINTEREST GALLERY */}

        <div className="lg:col-span-2 p-10">

          <div className="columns-1 sm:columns-2 gap-6 space-y-6">

            {galleryImages.map((src, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >

                <Image
                  src={src}
                  alt=""
                  width={600}
                  height={400}
                  className="rounded-xl w-full"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MORE WORKS */}

      <section className="pt-32">

        <WorkSection />

      </section>

      {/* FAQ */}

      <section className="pt-32">

        <FaqAccordion />

      </section>

      {/* INFINITE CAROUSEL */}

      <InfiniteCarousel
  imagesPath={imagesPath}
  imageCount={imageCount}
/>

    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-white/10 pb-4">

      <p className="text-white/40 text-sm mb-1">
        {label}
      </p>

      <p className="text-lg">
        {value}
      </p>

    </div>
  );
}

function InfiniteCarousel({
  imagesPath,
  imageCount,
}: {
  imagesPath: string;
  imageCount: number;
}) {

  const images = Array.from(
    { length: imageCount },
    (_, i) => `${imagesPath}/${i + 1}.png`
  );

  return (
    <section className="overflow-hidden py-24 border-t border-white/10">

      <div className="flex gap-6 animate-scroll">

        {[...images, ...images].map((src, i) => (

          <Image
            key={i}
            src={src}
            alt=""
            width={320}
            height={200}
            className="rounded-xl flex-shrink-0"
          />

        ))}

      </div>

    </section>
  );
}
