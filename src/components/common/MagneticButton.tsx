import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.28,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth spring physics for magnetic pull
  const springConfig = { stiffness: 260, damping: 18, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block relative cursor-pointer ${className}`}
      data-magnetic="true"
    >
      {/* Dynamic glow aura on magnetic lock */}
      {isHovered && (
        <div
          className="absolute -inset-1.5 rounded-[inherit] bg-amber-500/20 blur-md pointer-events-none -z-10 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  );
};
