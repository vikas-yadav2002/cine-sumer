// components/filmbox/AnimatedPreloader.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

type AnimatedPreloaderProps = {
  text?: string;
  targetReady: boolean; // pass Hero's isReady here
  onExited?: () => void; // optional callback after exit
};

export const AnimatedPreloader: React.FC<AnimatedPreloaderProps> = ({
  text = 'CineSummer',
  targetReady,
  onExited,
}) => {
  const [phase, setPhase] = useState<'initial' | 'loop'>('initial');
  const [initialCompleted, setInitialCompleted] = useState(false);
  const shouldExitAfterInitial = useRef(false);
  const [isVisible, setIsVisible] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);


useEffect(() => {
  if (targetReady && minTimePassed) {
    setIsVisible(false);
  }
}, [targetReady, minTimePassed]);


  // Variants typed as Variants for TS correctness
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    loop: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: [-8, 0],
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 700,
        damping: 24,
      },
    },
    loop: {
      y: [0, -6, 0],
      transition: {
        duration: 1.0,
        repeat: Infinity,
        repeatDelay: 0.6,
      },
    },
  };

  // Watch targetReady: if ready while initial still running -> mark shouldExitAfterInitial
  useEffect(() => {
    if (targetReady) {
      if (!initialCompleted) {
        shouldExitAfterInitial.current = true;
      } else {
        // already completed first cycle -> exit now
        setIsVisible(false);
      }
    }
  }, [targetReady, initialCompleted]);

  // Called when parent container 'visible' animation (and its staggered children) completes.
  const handleInitialComplete = () => {
    setInitialCompleted(true);
    // switch to looping animation
    // small timeout for visual continuity
    window.setTimeout(() => setPhase('loop'), 40);

    // if targetReady became true during initial, exit now (but keep a short delay so loop isn't jarring)
    if (shouldExitAfterInitial.current) {
  // Let the loop animation run for ~1 cycle before exit
  timersRef.current.push(
    window.setTimeout(() => setIsVisible(false), 2000) // adjust duration ~1 loop cycle
  );
}

  };

  // cleanup timers on unmount (track ids)
  const timersRef = useRef<number[]>([]);
  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onExited}>
      {isVisible && (
        <motion.div
          key="preloader"
          initial="hidden"
          animate={phase === 'initial' ? 'visible' : 'loop'}
          variants={containerVariants}
          onAnimationComplete={(definition) => {
            // framer-motion calls this when the current animate target completes.
            // We only want to consider the initial "visible" completion as the "first-cycle" end.
            if (phase === 'initial') {
              handleInitialComplete();
            }
          }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]"
          aria-hidden="true"
        >
          <h1 className="flex gap-1 items-end select-none pointer-events-none">
            {text.split('').map((char, idx) => (
              <motion.span
                key={`${char}-${idx}`}
                className="inline-block text-5xl md:text-6xl font-bold tracking-tight text-filmbox-text-primary"
                variants={letterVariants}
                style={{ display: 'inline-block', lineHeight: 1 }}
                aria-hidden="true"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
