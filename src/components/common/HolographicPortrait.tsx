import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cinematicSound } from '../../utils/cinematicSound';

interface HolographicPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

export const HolographicPortrait: React.FC<HolographicPortraitProps> = ({
  src,
  alt,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Raw cursor motion values normalized between -0.5 and 0.5
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareOpacityRaw = useMotionValue(0.15);

  // Silky physics springs
  const springConfig = { stiffness: 240, damping: 20 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);
  const smoothGlare = useSpring(glareOpacityRaw, { stiffness: 180, damping: 20 });

  // 3D rotation angles with bold responsive range
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);

  // Page-wide ambient tracking when not hovering directly
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isInside) {
        // Subtle ambient parallax across the entire page
        const globalNx = (e.clientX / window.innerWidth - 0.5) * 0.35;
        const globalNy = (e.clientY / window.innerHeight - 0.5) * 0.35;
        rawX.set(globalNx);
        rawY.set(globalNy);
        glareOpacityRaw.set(0.12);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [rawX, rawY, glareOpacityRaw]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    rawX.set(nx);
    rawY.set(ny);
    glareOpacityRaw.set(0.7);

    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, [rawX, rawY, glareOpacityRaw]);

  const handleMouseEnter = useCallback(() => {
    glareOpacityRaw.set(0.7);
    cinematicSound.playMechanicalClick();
  }, [glareOpacityRaw]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    glareOpacityRaw.set(0.12);
    setGlarePos({ x: 50, y: 50 });
  }, [rawX, rawY, glareOpacityRaw]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => cinematicSound.playMechanicalClick()}
      className={`relative select-none flex items-center justify-center [perspective:1000px] ${className}`}
      title={alt}
    >
      {/* Ambient Warm Amber Halo (Behind) */}
      <div className="absolute w-[340px] sm:w-[460px] aspect-square rounded-full bg-gradient-to-tr from-amber-500/[0.18] via-amber-600/[0.08] to-cyan-500/[0.08] blur-3xl pointer-events-none -z-10" />

      {/* 3D Tilted Card Container */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center transition-shadow duration-300 group"
      >
        {/* Main Portrait Frame with preserve-3d */}
        <div
          style={{
            transform: 'translateZ(10px)',
          }}
          className="relative overflow-hidden rounded-[32px] border border-amber-500/30 group-hover:border-amber-400/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.2)] bg-gradient-to-b from-[#16181D] to-[#0D0E11] transition-all duration-300"
        >
          {/* Portrait Image */}
          <img
            src={src}
            alt={alt}
            className="w-[280px] sm:w-[350px] md:w-[380px] lg:w-[410px] h-auto object-cover block select-none pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
            }}
          />

          {/* Anamorphic Horizontal Flare Sweep across Lens */}
          <motion.div
            style={{
              top: `${glarePos.y}%`,
              opacity: smoothGlare,
            }}
            className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-[0_0_15px_#F59E0B,0_0_30px_#06B6D4] -translate-y-1/2 mix-blend-screen"
            aria-hidden="true"
          />

          {/* Dynamic Specular Holographic Glare Sweep */}
          <motion.div
            style={{
              opacity: smoothGlare,
              background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(245, 158, 11, 0.38) 0%, rgba(6, 182, 212, 0.2) 35%, transparent 75%)`,
            }}
            className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-200"
            aria-hidden="true"
          />

          {/* Holographic Iridescent Edge Shimmer */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] border border-amber-400/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  );
};
