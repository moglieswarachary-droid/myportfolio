import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none overflow-hidden">
      {/* Background Track */}
      <div className="w-full h-full bg-white/[0.04]" />

      {/* Glowing Gradient Progress Fill */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 bottom-0 right-0 origin-left bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-400 shadow-[0_0_12px_rgba(245,158,11,0.7)]"
      />
    </div>
  );
};
