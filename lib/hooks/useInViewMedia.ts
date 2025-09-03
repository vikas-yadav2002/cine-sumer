'use client';

import { useEffect, useRef, useState } from 'react';

export function useInViewMedia(threshold = 0.4) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting && entry.intersectionRatio >= threshold;
        setIsInView(inView);
        
        if (inView) {
          element.play().catch(() => {
            // Handle autoplay restrictions gracefully
          });
        } else {
          element.pause();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isInView };
}