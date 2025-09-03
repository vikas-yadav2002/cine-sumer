'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInViewMedia } from '@/lib/hooks/useInViewMedia';

interface MediaProps {
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
}

interface FeatureSectionProps {
  kicker?: string;
  title: string;
  copy: string;
  media: MediaProps;
  align: 'left' | 'right';
}

export function FeatureSection({ kicker, title, copy, media, align }: FeatureSectionProps) {
  const { ref, isInView } = useInViewMedia();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 5 column grid: media gets 3 cols, text gets 2 cols on large screens */}
        <div
          className={`grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center ${
            align === 'right' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Content (2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            // when align === 'right' place content in columns 4-5 (2 cols)
            className={`${
              align === 'right' ? 'lg:col-start-4 lg:col-span-2' : 'lg:col-span-2'
            }`}
          >
            {kicker && (
              <div className="inline-block px-3 py-1 rounded-full bg-filmbox-blue/10 text-filmbox-blue text-sm font-medium mb-4">
                {kicker}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-filmbox-text-secondary leading-7">{copy}</p>
          </motion.div>

          {/* Media (3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: align === 'left' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            // when align === 'right' place media in columns 1-3
            className={`rounded-2xl overflow-hidden shadow-cinematic ${
              align === 'right' ? 'lg:col-start-1 lg:col-span-3 lg:row-start-1' : 'lg:col-span-3'
            }`}
          >
            {/* Fixed responsive heights to avoid tiny media and CLS */}
            {media.type === 'image' ? (
              <div className="relative w-full h-[320px] md:h-[460px] lg:h-[640px]">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
                  className="object-cover"
                  // use placeholder blur if you provide blurDataURL; otherwise remove
                  // placeholder="blur"
                />
              </div>
            ) : (
              <video
                ref={ref}
                className="w-full h-[320px] md:h-[460px] lg:h-[640px] object-cover"
                muted
                playsInline
                loop
                // only preload when in view
                preload={isInView ? 'auto' : 'none'}
                // autoplay only when in view
                autoPlay={isInView}
                poster={media.poster}
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
              >
                {/* Only inject source when in view to further reduce bandwidth */}
                {isInView && <source src={media.src} type="video/mp4" />}
                {/* Fallback text */}
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
