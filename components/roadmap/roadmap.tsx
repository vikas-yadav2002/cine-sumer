"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    version: "SumerFade 1.0 – The Foundation",
    tag: "DWG-DWG",
    items: [
      "Core DCTL release with Film Grain, Halation, Gate Weave.",
      "Essential creative looks: Bleach Bypass, Film Saturation, Film Density.",
      "Negative Stock, Print Look, and Print Stock options inspired by Kodak & Fuji.",
      "Advanced Skin Control + Split Tone + Temp & Tint for precise color refinement.",
    ],
  },
  {
    version: "SumerFade 1.2 – Refinement Update (Already Out)",
    items: [
      "Improved grain response and halation accuracy.",
      "Added fine-tuned controls for skin tones and density.",
      "Smoother tonal roll-offs for more natural film emulation.",
    ],
  },
  {
    version: "SumerFade 1.2.1",
    items: [
      "FilmTexture v2.0 → Authentic 16mm, 35mm, 65mm textures.",
      "One-click presets → Fast analog looks.",
      "Gate Weave & Aspect Ratios → Adds real film motion + framing.",
      "Border Radius & Vintage Borders → True cinematic edges.",
      "Upcoming Borders → Gritty, grungy textures coming soon.",
      "Built-in Tone Mapping (Basic) → Cleaner highlights & balanced contrast.",
    ],
  },
  {
    version: "SumerFade 2.0β – The Expansion (Coming Soon)",
    items: [
      "HDR support + full colorspace transforms (ACES, DWG, Log-C3/4, REDLog3G10).",
      "20+ Negative Film Stocks → Expanded Kodak, Fuji, Cinestill library.",
      "New Print Look library → Modern creative grades + Printer Lights control.",
      "Refined Film Texture Engine → Targeted grain for shadows, midtones, highlights.",
      "New Creative Tools → Radial Blur, Film Sharpness, Texture Pop, Vignette, organic lens diffusion, Film Compression.",
      "Enhanced UI → Emoji-labeled sliders for fast, intuitive control.",
    ],
  },
  {
    version: "Beyond 2.0 – Full Plugin Evolution",
    items: [
      "No 3.0: instead evolving into a full plugin (OFX/VST-style).",
      "Works across multiple editing & grading platforms, not just DaVinci Resolve.",
      "Adds advanced features: halation glow layers, organic lens diffusion, subtractive saturation, and AI-assisted film tone matching.",
      "Designed as the ultimate all-in-one film emulation toolkit for modern creators.",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
          SumerFade Roadmap
        </h2>

        <div className="relative border-l-2 border-zinc-700 pl-8">
          {roadmap.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] border-4 border-black"></div>

              <h3 className="text-2xl font-semibold mb-1 text-white">
                {milestone.version}
              </h3>
              
              {milestone.tag && (
                <span className="inline-block text-sm text-zinc-500 mb-3">
                  {milestone.tag}
                </span>
              )}

              <ul className="space-y-3 text-zinc-300">
                {milestone.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}