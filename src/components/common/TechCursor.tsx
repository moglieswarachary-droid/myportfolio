import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const TechCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(pointer: fine)').matches;
  });

  // Cursor coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring physics for outer ring
  const springConfig = { stiffness: 420, damping: 28, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touchscreen interaction on hybrid/tablet/laptop devices
    const handleTouchStart = () => {
      setIsTouchDevice(true);
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true, once: true });

    if (isTouchDevice) {
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
      };
    }

    let lastCheckTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttled check for interactive element hover (every 30ms) to reduce DOM queries
      const now = performance.now();
      if (now - lastCheckTime > 30) {
        lastCheckTime = now;
        const target = e.target as HTMLElement | null;
        if (target) {
          const isInteractive = Boolean(
            target.closest('a, button, [role="button"], input, textarea, select, [data-magnetic="true"], .cursor-pointer')
          );
          setIsHovered(isInteractive);
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* 1. Fast Sharp Center Micro-Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none z-[99999] shadow-[0_0_8px_#F59E0B]"
        aria-hidden="true"
      />

      {/* 2. Smooth Lagging Cybernetic Outer Focus Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.78 : isHovered ? 1.45 : 1,
          borderColor: isHovered ? 'rgba(251, 191, 36, 0.85)' : 'rgba(245, 158, 11, 0.45)',
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.09)' : 'rgba(245, 158, 11, 0.01)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-500/40 pointer-events-none z-[99998] shadow-[0_0_15px_rgba(245,158,11,0.15)] flex items-center justify-center backdrop-blur-[0.5px]"
        aria-hidden="true"
      >
        {/* Subtle Crosshair Micro-Notches on Hover */}
        {isHovered && (
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-ping" />
        )}
      </motion.div>
    </>
  );
};
