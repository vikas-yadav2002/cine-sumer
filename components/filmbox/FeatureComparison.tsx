'use client';

import { ComparisonSlider } from "./ComparisonSlider";

type FeatureComparisonProps = {
  title: string;
  description: string;
  folder: string;
  totalImages: number;
};

export function FeatureComparison({
  title,
  description,
  folder,
  totalImages,
}: FeatureComparisonProps) {

  const slides = [];

  for (let i = 1; i <= totalImages; i += 2) {
    slides.push({
      before: `/Feature/${folder}/${i}.webp`,
      after: `/Feature/${folder}/${i + 1}.webp`,
    });
  }

  return (
    <section className=" bg-black">

      <div className=" mx-auto px-6">

        {/* HEADER */}
        <div className="
          text-center
          mx-auto
        ">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            tracking-tight
            // mb-4
          ">
            {title}
          </h2>

          <p className="
            text-lg
            md:text-xl
            text-zinc-400
            leading-relaxed
          ">
            {description}
          </p>

        </div>

        {/* SLIDER */}
        <ComparisonSlider
          slides={slides}
          afterLabel="SumerFade"
        />

      </div>

    </section>
  );
}