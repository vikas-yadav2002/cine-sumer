"use client";  // MUST be the very first line

import { motion } from "framer-motion";
import Image from "next/image";

const stages = [
  {
    title: "LOOK",
    subtitle: "Bacix",
    copy: "Build the core of the grade using advanced adjustments in your BACIX DCTL. This is where exposure, density, and contrast find their shape.",
    media: "/LAB/1-LOOK.jpg",
  },
  {
    title: "LAB",
    subtitle: "Film Texture",
    copy: "Replicate authentic film texture—grain, halation, and subtle imperfections into the image.",
    media: "/LAB/2-LAB.jpg",
  },
  {
    title: "PRINT",
    subtitle: "Look Development",
    copy: "Polish the final image with split toning, print stock, and negative stock to craft a signature film look.",
    media: "/LAB/PRINT.jpg",
  },
];

export  function FeatureStages() {  
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-3">
            Professional Workflow
          </h2>
          <p className="text-lg text-filmbox-text-secondary mb-2">
            Transform your footage with authentic film characteristics
          </p>
          <p className="text-xl font-semibold text-white">
            LOOK – LAB – PRINT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-filmbox-card border border-filmbox-border p-6 md:p-8 shadow-cinematic hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <Image
                  src={stage.media}
                  alt={stage.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-filmbox-text-primary mb-1">
                {stage.title}
              </h3>
              <h4 className="text-lg font-semibold text-white mb-3">
                {stage.subtitle}
              </h4>
              <p className="text-filmbox-text-secondary leading-7">
                {stage.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
