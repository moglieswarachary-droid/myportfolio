import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  pulsePhase: number;
}

interface PulsePacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

interface ClickParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface StardustEmber {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
  phase: number;
}

interface AmberNeuralGridProps {
  grainLevel?: number;
}

export const AmberNeuralGrid: React.FC<AmberNeuralGridProps> = ({ grainLevel = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    realX: number;
    realY: number;
    isHovering: boolean;
  }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    realX: -999,
    realY: -999,
    isHovering: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isRunning = true;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.realX = e.clientX;
      mouseRef.current.realY = e.clientY;
      mouseRef.current.isHovering = true;
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 35;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 35;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    let scrollOffsetY = window.scrollY || 0;
    const handleScroll = () => {
      scrollOffsetY = window.scrollY || 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animId);
      } else {
        if (!isRunning && !prefersReducedMotion) {
          isRunning = true;
          animId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Adaptive Neural Network Nodes based on device performance
    const isTouchOrMobile =
      width < 768 ||
      (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) ||
      (typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 4);
    const nodeCount = isTouchOrMobile ? 12 : 32;
    const maxConnectionDistance = isTouchOrMobile ? 120 : 180;

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        baseRadius: Math.random() * 1.5 + 1.2,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Ambient Quantum Stardust Embers (Floating Micro-Particles)
    const embers: StardustEmber[] = [];
    const emberCount = isTouchOrMobile ? 16 : 46;
    for (let e = 0; e < emberCount; e++) {
      const isCyan = Math.random() > 0.65;
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: Math.random() * 0.4 + 0.2,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.55 + 0.2,
        color: isCyan ? '#06B6D4' : Math.random() > 0.4 ? '#F59E0B' : '#FDE68A',
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Synaptic Signal Pulses, Shockwaves & Spark Particles
    const packets: PulsePacket[] = [];
    const shockwaves: Shockwave[] = [];
    const particles: ClickParticle[] = [];

    const spawnPulse = () => {
      if (packets.length < 10 && nodes.length > 2) {
        const from = Math.floor(Math.random() * nodes.length);
        // Find a nearby node to send pulse to
        const neighbors: number[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (from === j) continue;
          const dx = nodes[from].x - nodes[j].x;
          const dy = nodes[from].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < maxConnectionDistance) {
            neighbors.push(j);
          }
        }
        if (neighbors.length > 0) {
          const to = neighbors[Math.floor(Math.random() * neighbors.length)];
          packets.push({
            fromNode: from,
            toNode: to,
            progress: 0,
            speed: Math.random() * 0.018 + 0.01,
          });
        }
      }
    };

    // Interactive Click Impulse (fires neural action potentials)
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Primary shockwave ring
      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 6,
        maxRadius: Math.min(width, 380),
        alpha: 1.0,
      });

      // Spawn 16 high-velocity burst spark particles
      for (let p = 0; p < 16; p++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 1.5;
        particles.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: Math.random() > 0.4 ? '#F59E0B' : '#06B6D4',
          size: Math.random() * 2.2 + 1.2,
        });
      }

      // Find nearby nodes to stimulate
      const stimulatedNodes: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - clickX;
        const dy = nodes[i].y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 280) {
          nodes[i].pulsePhase = Math.PI / 2; // Instant flare
          stimulatedNodes.push(i);
        }
      }

      // Fire rapid synaptic pulse packets outward from stimulated nodes
      for (const fromIdx of stimulatedNodes) {
        for (let j = 0; j < nodes.length; j++) {
          if (fromIdx === j) continue;
          const dx = nodes[fromIdx].x - nodes[j].x;
          const dy = nodes[fromIdx].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < maxConnectionDistance) {
            packets.push({
              fromNode: fromIdx,
              toNode: j,
              progress: 0,
              speed: Math.random() * 0.03 + 0.025, // 3x faster burst
            });
            break;
          }
        }
      }
    };

    window.addEventListener('click', handleClick);

    let pulseTimer = 0;

    const render = () => {
      // Smooth mouse parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Periodically spawn synaptic packet
      pulseTimer++;
      if (pulseTimer % 45 === 0) {
        spawnPulse();
      }

      // Update and draw nodes with parallax offset & scroll depth
      const ox = mouseRef.current.x;
      const oy = mouseRef.current.y - (scrollOffsetY * 0.12);

      // 0. Render ambient floating quantum stardust embers (cinematic space dust)
      for (let e = 0; e < embers.length; e++) {
        const emb = embers[e];
        emb.y -= emb.vy;
        emb.x += Math.sin(emb.phase) * 0.35 + emb.vx;
        emb.phase += 0.025;

        if (emb.y < -20) {
          emb.y = height + 20;
          emb.x = Math.random() * width;
        }

        const twinkle = Math.sin(emb.phase * 1.5) * 0.35 + 0.65;
        const renderEmbY = (emb.y - (scrollOffsetY * 0.06)) % (height + 40);
        const finalEmbY = renderEmbY < -20 ? renderEmbY + height + 40 : renderEmbY;

        ctx.beginPath();
        ctx.arc(emb.x, finalEmbY, emb.radius, 0, Math.PI * 2);
        ctx.fillStyle = emb.color;
        ctx.globalAlpha = emb.baseAlpha * twinkle;
        ctx.shadowBlur = 8;
        ctx.shadowColor = emb.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.022;

        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        const renderX = n.x + ox * 0.6;
        const renderY = n.y + oy * 0.6;
        const pulseFactor = Math.sin(n.pulsePhase) * 0.3 + 0.7;

        // 1. Outer Breathing Synaptic Constellation Aura (Cinematic Star Bloom)
        const auraRadius = n.baseRadius * (3.8 + Math.sin(n.pulsePhase) * 1.6);
        const auraGrad = ctx.createRadialGradient(renderX, renderY, 0, renderX, renderY, auraRadius);
        auraGrad.addColorStop(0, 'rgba(253, 230, 138, 0.75)');
        auraGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.3)');
        auraGrad.addColorStop(0.7, 'rgba(245, 158, 11, 0.06)');
        auraGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(renderX, renderY, auraRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Inner Luminescent Core Dot
        ctx.beginPath();
        ctx.arc(renderX, renderY, n.baseRadius * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = '#FDE68A';
        ctx.globalAlpha = 0.9 * pulseFactor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#F59E0B';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw synaptic connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const r2X = n2.x + ox * 0.6;
          const r2Y = n2.y + oy * 0.6;

          const dx = renderX - r2X;
          const dy = renderY - r2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const connectionAlpha = (1 - dist / maxConnectionDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(r2X, r2Y);
            ctx.strokeStyle = '#D97706';
            ctx.globalAlpha = connectionAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and advance synaptic signal packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const nodeA = nodes[p.fromNode];
        const nodeB = nodes[p.toNode];
        if (!nodeA || !nodeB) {
          packets.splice(k, 1);
          continue;
        }

        const xA = nodeA.x + ox * 0.6;
        const yA = nodeA.y + oy * 0.6;
        const xB = nodeB.x + ox * 0.6;
        const yB = nodeB.y + oy * 0.6;

        const currentX = xA + (xB - xA) * p.progress;
        const currentY = yA + (yB - yA) * p.progress;

        // Subtle amber signal dot
        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FDE68A';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#F59E0B';
        ctx.globalAlpha = 0.75 * Math.sin(p.progress * Math.PI);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 1. Cursor Active Synaptic Laser Threads (Network reaches out to cursor)
      if (mouseRef.current.isHovering && mouseRef.current.realX > 0) {
        const mx = mouseRef.current.realX;
        const my = mouseRef.current.realY;

        // Draw cursor core glow
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#F59E0B';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#F59E0B';
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect to nearest nodes within 240px
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const nx = n.x + ox * 0.6;
          const ny = n.y + oy * 0.6;
          const dx = mx - nx;
          const dy = my - ny;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 240) {
            const proximity = 1 - dist / 240;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = proximity * 1.6;
            ctx.globalAlpha = proximity * 0.55;
            ctx.stroke();
          }
        }
      }

      // 2. Render expanding neural shockwaves from user clicks
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 5.5;
        sw.alpha -= 0.018;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        // Primary amber shockwave ring with intense neon glow
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 14;
        ctx.shadowColor = '#F59E0B';
        ctx.globalAlpha = sw.alpha * 0.95;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Secondary cyan electric ripple
        if (sw.radius > 16) {
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius * 0.75, 0, Math.PI * 2);
          ctx.strokeStyle = '#06B6D4';
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#06B6D4';
          ctx.globalAlpha = sw.alpha * 0.75;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // 3. Render and advance click spark particles
      for (let p = particles.length - 1; p >= 0; p--) {
        const part = particles[p];
        part.x += part.vx;
        part.y += part.vy;
        part.vx *= 0.96;
        part.vy *= 0.96;
        part.alpha -= 0.022;

        if (part.alpha <= 0) {
          particles.splice(p, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
        ctx.fillStyle = part.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = part.color;
        ctx.globalAlpha = part.alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      if (isRunning && !prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#090A0C]">
      {/* 1. Deep Graphite Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090A0C] via-[#0B0C0E] to-[#08080A]" />

      {/* 2. Cinematic Fluid Light Morphing Shapes (Warm Amber & Quantum Deep Cyan/Blue) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shape 1: Brand Warm Amber / Sunset Orange (Upper Right / Behind Avatar) */}
        <div
          className="absolute -top-[10%] right-[-5%] sm:right-[5%] w-[580px] sm:w-[780px] h-[480px] sm:h-[620px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-fluid-amber opacity-40 blur-[120px] sm:blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 45% 45%, rgba(245, 158, 11, 0.42) 0%, rgba(234, 88, 12, 0.25) 45%, rgba(180, 83, 9, 0.05) 75%, transparent 85%)',
          }}
        />

        {/* Shape 2: Complementary Deep Cyan / Teal (Left Side / Behind Hero Headline) */}
        <div
          className="absolute top-[8%] -left-[10%] sm:left-[-2%] w-[520px] sm:w-[720px] h-[440px] sm:h-[580px] rounded-[40%_60%_60%_40%/60%_40%_60%_40%] animate-fluid-cyan opacity-35 blur-[120px] sm:blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 55% 50%, rgba(14, 116, 144, 0.38) 0%, rgba(3, 105, 161, 0.22) 45%, rgba(12, 74, 110, 0.06) 75%, transparent 85%)',
          }}
        />

        {/* Shape 3: Deep Midnight Blue / Cosmic Indigo (Center Depth Anchor) */}
        <div
          className="absolute top-[40%] left-[20%] sm:left-[30%] w-[500px] sm:w-[680px] h-[420px] sm:h-[560px] rounded-[50%_50%_40%_60%/50%_40%_60%_50%] animate-fluid-deepblue opacity-30 blur-[130px] sm:blur-[160px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.32) 0%, rgba(2, 132, 199, 0.15) 45%, transparent 75%)',
          }}
        />

        {/* Shape 4: Warm Amber / Gold Synaptic Highlight (Lower Drift) */}
        <div
          className="absolute top-[68%] -right-[8%] sm:right-[10%] w-[420px] sm:w-[580px] h-[360px] sm:h-[480px] rounded-[55%_45%_65%_35%/45%_55%_35%_65%] animate-fluid-warmaccent opacity-30 blur-[110px] sm:blur-[140px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.25) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 75%)',
          }}
        />

        {/* Dark Calibrated Scrim (Keeps foreground text and avatar rim light pristine & legible) */}
        <div className="absolute inset-0 bg-[#090A0C]/75 backdrop-blur-[1px]" />
      </div>

      {/* 3. Extremely Subtle Perspective Architectural Ground Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 25%, black 25%, transparent 80%)',
        }}
      />

      {/* 4. 3D Cybernetic Horizon Floor Plane (Infinite Depth) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[48vh] pointer-events-none opacity-[0.14] overflow-hidden select-none"
        style={{
          perspective: '550px',
          maskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 35%, transparent 100%)',
        }}
      >
        <div
          className="w-[200%] -ml-[50%] h-full origin-bottom"
          style={{
            transform: 'rotateX(64deg)',
            backgroundImage: `
              linear-gradient(to right, rgba(245, 158, 11, 0.45) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Luminous Horizon Laser Line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-[0_0_24px_#F59E0B]" />
      </div>

      {/* 4. Canvas-Driven Neural Network Nodes & Synaptic Pulses */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 5. Sweeping Anamorphic Cinema Lens Flare */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="anamorphic-beam absolute top-[32%] -left-[10%] w-[120%] h-8 opacity-45 transform -rotate-1 pointer-events-none" />
      </div>

      {/* 6. Dynamic 35mm Analog Film Grain Overlay */}
      {grainLevel > 0 && (
        <div
          className="absolute inset-0 mix-blend-overlay pointer-events-none z-10"
          style={{
            opacity: grainLevel === 1 ? 0.038 : 0.072,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* 7. Deep Cinematic Perimeter Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,6,8,0.85)_100%)] pointer-events-none" />
    </div>
  );
};
