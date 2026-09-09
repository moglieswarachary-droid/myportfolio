import React, { useEffect, useRef } from 'react';

interface AWavesProps {
  className?: string;
  linesCount?: number;
  speedMultiplier?: number;
}

export const AWaves: React.FC<AWavesProps> = ({
  className = '',
  linesCount = 6,
  speedMultiplier = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause when not in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let step = 0;

    const wavePalette = [
      'rgba(245, 158, 11, 0.22)',  // amber gold
      'rgba(6, 182, 212, 0.16)',   // cyan
      'rgba(255, 255, 255, 0.08)',  // subtle white
      'rgba(251, 146, 60, 0.18)',  // warm amber
      'rgba(56, 189, 248, 0.12)',  // light sky
      'rgba(215, 226, 234, 0.06)', // muted silver
      'rgba(245, 158, 11, 0.14)',
      'rgba(14, 165, 233, 0.10)',
    ];

    const render = () => {
      if (isVisible) {
        // Linear interpolation for gentle mouse tracking
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        ctx.clearRect(0, 0, width, height);

        step += 0.008 * speedMultiplier;

        const count = Math.min(linesCount, wavePalette.length);

        for (let i = 0; i < count; i++) {
          ctx.beginPath();
          ctx.lineWidth = i === 0 || i === 1 ? 1.4 : 1;
          ctx.strokeStyle = wavePalette[i % wavePalette.length];

          const lineOffset = (i / count) * Math.PI * 2;
          const baseHeight = height * 0.48 + Math.sin(step + lineOffset) * 45;
          const mouseDistortion = ((mouseY - height / 2) / height) * 80;

          ctx.moveTo(0, baseHeight);

          const segments = 45;
          for (let s = 0; s <= segments; s++) {
            const x = (s / segments) * width;
            const distFromMouse = Math.abs(x - mouseX) / width;
            const waveDip = Math.exp(-distFromMouse * 4) * mouseDistortion;

            const y =
              baseHeight +
              Math.sin(s * 0.28 + step * 1.5 + lineOffset) * (40 + i * 8) +
              Math.cos(s * 0.18 - step * 0.8 + lineOffset) * 25 +
              waveDip;

            ctx.lineTo(x, y);
          }

          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [linesCount, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 h-full w-full opacity-65 ${className}`}
      style={{ willChange: 'transform' }}
    />
  );
};
