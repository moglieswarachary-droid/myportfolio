import React, { useRef, useState, useCallback } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightBorderColor?: string;
  spotlightRadius?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(245, 158, 11, 0.18)',
  spotlightBorderColor = 'rgba(245, 158, 11, 0.95)',
  spotlightRadius = 500,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* 1. Dynamic Cursor Spotlight Surface Glow (Vivid Warm Amber & Subtle Cyan) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightRadius}px circle at ${position.x}px ${position.y}px, ${spotlightColor} 0%, rgba(217, 119, 6, 0.08) 45%, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Dynamic Cursor-Illuminated Border Glint (Sharp Apple / Linear Hardware Rim) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-200 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightRadius * 0.7}px circle at ${position.x}px ${position.y}px, ${spotlightBorderColor} 0%, rgba(251, 191, 36, 0.65) 25%, rgba(6, 182, 212, 0.25) 50%, transparent 75%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1.5px',
        }}
        aria-hidden="true"
      />

      {/* 3. Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
