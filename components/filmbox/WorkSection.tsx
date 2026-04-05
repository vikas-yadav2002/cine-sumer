"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Eastman Color Print 5385",
    category: "Film Emulation",
    image: "/work/EastmanColorPrint/12/1.png",
    slug: "eastman-color-print",
  },
  {
    title: "Eastman ECN-1 5247",
    category: "Film Emulation",
    image: "/work/EastmanECN1/1.png",
    slug: "eastman-ecn1",
  },
  {
    title: "Eastman ECN-II 5247",
    category: "Film Emulation",
    image: "/work/EastmanECN25247/10/1.png",
    slug: "eastman-ecn25247",
  },
  {
    title: "Fuji Eterna 8593 400T",
    category: "Film Emulation",
    image: "/work/fujiEterna/2/1.png",
    slug: "fuji-eterna",
  },
  {
    title: "Fuji Eterna Vivid 8543 160T",
    category: "Film Emulation",
    image: "/work/fujiEternaVivid/8/1.png",
    slug: "fuji-eterna-vivid",
  },
  {
    title: "Kodak Vision 2 Express 5229 500T",
    category: "Film Emulation",
    image: "/work/kodakvision2/4/1.png",
    slug: "kodak-vision2",
  },
  {
    title: "Kodak Vision3 5212 100T",
    category: "Film Emulation",
    image: "/work/kodakVision3/3/1.png",
    slug: "kodak-vision3",
  },
  {
    title: "Kodak Vision 3 500T",
    category: "Film Emulation",
    image: "/work/kodakVision3500T/9/1.png",
    slug: "kodak-vision3-500t",
  },
  {
    title: "Kodak Vision 5246 250D",
    category: "Film Emulation",
    image: "/work/kodakVision5246/6/1.png",
    slug: "kodak-vision-5246",
  },
  {
    title: "Kodak Vision 5263 500T",
    category: "Film Emulation",
    image: "/work/kodakVision5263/11/1.png",
    slug: "kodak-vision-5263",
  },
  {
    title: "Kodak Vision 5246 250D (Premier)",
    category: "Film Emulation",
    image: "/work/kodakVision5432/5/1.png",
    slug: "kodak-vision-5432",
  },
  {
    title: "Kodak Vision 2 | 5225 250D",
    category: "Film Emulation",
    image: "/work/kodakVision25225/7/1.png",
    slug: "kodak-vision-25225",
  },
];

export default function WorkSection() {
  return (
    <section className="w-full py-32 px-6 md:px-10 bg-black text-white">

      {/* Tagline */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
      </motion.div>

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-light tracking-tight">
         SumerFade
        </h2>
        <p className="text-white/50 tracking-wide text-lg md:text-xl">
        The language of film, translated into code and colour.
        </p>
        <p className="text-white/40 mt-5 text-lg tracking-wide">
          Film Emulation • Motion • Stocks Films
        </p>
      </motion.div>

      {/* Projects Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">

        {projects.map((project, index) => (

          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.04,
            }}
            viewport={{ once: true }}
          >

            <Link
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >

              {/* Image Card */}

              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Hover Gradient */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                />

              </div>

              {/* Title */}

              <div className="mt-5">

                <h3
                  className="
                    text-lg
                    font-medium
                    tracking-wide
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  {project.title}
                </h3>

                <p className="text-sm text-white/40 mt-1">
                  {project.category}
                </p>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}