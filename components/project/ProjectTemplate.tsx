"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WorkSection from "@/components/filmbox/WorkSection";
import { FaqAccordion } from "../filmbox/Question";
import dynamic from "next/dynamic";
import { FeatureComparison } from "../filmbox/FeatureComparison";

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
    (_, i) => `${imagesPath}/${i + 1}.png`,
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
          <Detail label="Negative Stock" value={details.negativeStock} />

          <Detail label="Print Stock" value={details.printStock} />

          <Detail label="Camera" value={details.camera} />
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
      <FeatureComparison
        title="Bleach Bypass"
        description="
        Bleach Bypass isn't dialing saturation down and contrast up — it's a photochemical failure, by design. Retaining silver alongside color dye couplers collapses saturation, seals shadows, and pushes contrast beyond any normal development curve. SumerFade models this per-stock, because Vision3 holds bypass differently than Fuji Eterna or Eastman — each emulsion's dye architecture responds uniquely. Dial the Bleach Bypass slider from partial retention to full crush, push exposure, trim printer lights, and let the chemistry do what the lab would.
        "
        folder="Bleach Bypass"
        totalImages={12}
      />
      <FeatureComparison
        title="Bloom"
        description="
       Bloom is what film does when a lens meets more light than it was designed to contain — highlight energy scatters through the optics, softening edges and breathing luminance outward in a way digital sensors simply clip and discard. 
Bloom is the soft glow you see around bright light sources on film — practical bulbs, windows, skin catching the sun.
It starts in the lens, where light scatters at high-contrast edges, and then the emulsion takes over, amplifying that scatter through its layers until what was a clean highlight becomes something that breathes.
It's not a filter sitting on top of your image, it's the optical path failing gracefully. 
SumerFade's bloom works the same way: it finds the light, spreads it naturally, and rolls off the way a real optical path does — nothing like the uniform blur that passes for glow in most digital tools.
        "
        folder="Bloom"
        totalImages={8}
      />

      <FeatureComparison
        title="Film Damage"
        description="
        Film damage is the natural wear and imperfections that occur as physical film is handled, processed, and aged — including scratches, dust, dirt, hair and chemical marks.
Unlike digital overlays, these flaws are organic and unpredictable, formed by real contact, motion, and environmental exposure. 
SumerFade's damage isn't randomised texture dropped on top of your image. It's weighted the way real wear actually accumulates
adding texture, depth, and a sense of history that makes the image feel lived-in rather than perfectly rendered.
        "
        folder="Film Damage"
        totalImages={10}
      />

      <FeatureComparison
        title="Grain"
        description="
        
Film grain isn't noise — it's silver halide crystals clumping into randomised clusters during development, and their size, distribution, and luminance bias are all baked into the emulsion's 
Presets and chemistry and their size is determined by the format the film was shot on. 16mm crystals are coarser and more visible because the frame is smaller and gets enlarged more. 35mm sits in the middle — structured, organic, present without being aggressive. 65mm grain is fine to the point of being felt rather than seen. SumerFade models this per-format, so the grain behaves the way developed silver actually does — heavier in the midtones, organic in its clumping, and responsive to the image underneath it rather than sitting flat on top of your footage like a texture overlay.
        "
        folder="GRAIN"
        totalImages={6}
      />
      <FeatureComparison
        title="Halation"
        description="
        Light doesn't stop at the emulsion surface — it pushes through, bounces off the film base, and re-exposes the layer from behind. That warm bleed around practical lights, windows, and high-contrast edges isn't added on top, it's happening inside the film itself. And how much it spreads depends on the format. 8mm halos hard and wide because the frame is tiny and the emulsion is thick relative to it. 16mm pulls back slightly. 35mm is subtler — present but controlled. 65mm is barely a whisper, the frame so large that the scatter barely registers. SumerFade models halation per-format, so the bleed you get on 8mm isn't the same as 65mm — because physically, it never was.
        "
        folder="Halation"
        totalImages={6}
      />
      <FeatureComparison
        title="HUE Split"
        description="
        Every film stock carries its own hue bias baked into its dye layers — and Hue Split works directly with that. Rather than a global color push, it shifts specific hues within the emulsion, letting the stock's own character determine the result And because dye layers don't respond in isolation, that shift pulls density and saturation with it — change the hue, and the weight and richness of that color changes too.
Every print stock was formulated with its own dye chemistry — and Hue Split works inside that. Rotating a hue on Kodak 2393 lands differently than the same value on Fujifilm 3513, differently again on Eastman Color Print, and differently once more on Fujifilm Eterna CP. The control is the same. The result isn't — because the dye layers underneath each stock respond to that rotation on their own terms. One adjustment, five stocks, five genuinely distinct looks. That's not a feature, that's just how emulsion works.
        "
        folder="HUE Split"
        totalImages={8}
      />
      <FeatureComparison
        title="Printerlight"
        description="
        Printer lights are how the lab communicates with your negative — individual R, G, and B intensity adjustments made before the print stock sees the light. One channel up, one down, and the entire color foundation of the image shifts. SumerFade's printer lights work the same way, with one difference — every stock responds to that push differently. Lifting the red channel on Kodak 2393 isn't the same as lifting it on Fujifilm 3513, because the dye layers underneath each stock absorb that adjustment on their own terms. And with the Show Curve feature, you're not pushing blind — you can see exactly how hard you're driving the look, watching the curve move in real time as you dial each channel in.
        "
        folder="Printerlight"
        totalImages={6}
      />

      {/* INFINITE CAROUSEL */}

      <InfiniteCarousel imagesPath={imagesPath} imageCount={imageCount} />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <p className="text-white/40 text-sm mb-1">{label}</p>

      <p className="text-lg">{value}</p>
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
    (_, i) => `${imagesPath}/${i + 1}.png`,
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
