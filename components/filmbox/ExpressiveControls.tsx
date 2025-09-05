"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const controls = [
  {
    id: "print-style",
    title: "Print Style",
    description:
      "Each negative can be emulated as a print, or as a telecine-style transfer for different vibes.",
    image:
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    effect: "contrast(1.4) saturate(1.2)",
  },
  {
    id: "gauge",
    title: "Gauge",
    description:
      "The smaller the film, the stronger the textural characteristics. Choose between formats.",
    image:
      "https://unsplash.com/photos/an-urban-street-scene-is-filled-with-cars-UIjPYiFM704",
    effect: "grayscale(1)",
  },
  {
    id: "acutance",
    title: "Acutance",
    description:
      "Adjust local tonality and micro-contrast, similar to lab techniques.",
    image:
      "https://images.unsplash.com/photo-1603561596112-0e7f98a76b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    effect: "brightness(1.2) contrast(1.3)",
  },
  {
    id: "push-pull",
    title: "Push/Pull",
    description:
      "Simulate underexposed or overexposed film with push/pull processing.",
    image:
      "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    effect: "sepia(0.6)",
  },
];

export default function ExpressiveControls() {
  return (
    <section className="bg-neutral-900 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Simple creative controls
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {controls.map((control) => (
          <ControlCard key={control.id} control={control} />
        ))}
      </div>
    </section>
  );
}

function ControlCard({ control }: { control: any }) {
  const [value, setValue] = useState(0);

  return (
    <div className="bg-neutral-800 rounded-2xl p-4 flex flex-col shadow-lg relative">
      <div className="flex">
        {/* Vertical Slider on Left */}
        <div className="relative h-40 w-2 bg-neutral-700 rounded-full mr-4 overflow-hidden">
          <motion.div
            className="w-2 h-6 bg-white rounded-full shadow-lg border border-neutral-400 absolute left-0"
            animate={{ top: [0, 140, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onUpdate={(latest) => {
              if (latest.top !== undefined) {
                const mapped = Math.min(100, Math.max(0, latest.top as number));
                setValue(mapped);
              }
            }}
          />
        </div>

        {/* Image with Effect */}
        <div
          className="relative flex-1 h-40 rounded-xl overflow-hidden"
          style={{
            filter: value > 50 ? control.effect : "none",
            transition: "filter 0.3s ease-in-out",
          }}
        >
          <Image
            src={control.image}
            alt={control.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4">{control.title}</h3>
      <p className="text-sm text-neutral-400 mt-1">{control.description}</p>
    </div>
  );
}
