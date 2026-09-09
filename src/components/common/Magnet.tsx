import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  className = '',
  padding = 150,
  strength = 3,
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = clientX - centerX;
    const distY = clientY - centerY;

    if (Math.abs(distX) < width / 2 + padding && Math.abs(distY) < height / 2 + padding) {
      setIsHovered(true);
      setPosition({
        x: distX / strength,
        y: distY / strength,
      });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={
        isHovered
          ? { type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }
          : { type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }
      }
      style={{ willChange: 'transform' }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
