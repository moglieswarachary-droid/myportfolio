import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SiteFrameProps {
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const SiteFrame: React.FC<SiteFrameProps> = ({
  onOpenResume,
  onOpenTerminal,
}) => {
  const [timeString, setTimeString] = useState('');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [fps, setFps] = useState(60);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Frame rate estimation
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // High contrast mode toggle
  const toggleContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    if (next) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {/* Pinned Architectural Perimeter Borders */}
      <div className="site-frame-line-top" aria-hidden="true" />
      <div className="site-frame-line-bottom" aria-hidden="true" />
      <div className="site-frame-line-left" aria-hidden="true" />
      <div className="site-frame-line-right" aria-hidden="true" />

      {/* Top Telemetry Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 py-2.5 sm:px-6 lg:px-8 lg:top-4 pointer-events-none">
        <div className="mx-auto flex items-center justify-between text-[11px] font-mono tracking-wider backdrop-blur-md bg-zinc-950/70 border border-white/10 rounded px-4 py-2 pointer-events-auto shadow-2xl">
          {/* Brand & Star Motif */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-zinc-200 hover:text-amber-400 transition-colors group"
          >
            <span className="text-amber-400 text-sm animate-star-slow">✦</span>
            <span className="font-syne font-extrabold tracking-widest text-xs uppercase text-zinc-100 group-hover:text-amber-300">
              MOGLIESWAR
            </span>
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ● ONLINE
            </span>
          </a>

          {/* Central Telemetry Readout (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-zinc-400 text-[10px]">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="text-amber-400">SYS:</span> {fps} FPS
            </span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-1.5">
              <span className="text-cyan-400">LOC:</span> 12.74°N 78.36°E (KUPPAM)
            </span>
            <span className="text-zinc-600">/</span>
            <span className="flex items-center gap-1.5 text-amber-200 font-bold">
              <span className="text-amber-400">IST:</span> {timeString || '19:22:00'}
            </span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Trigger */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[10px] rounded bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                title="Launch CLI Terminal"
              >
                <span>&gt;_</span> CLI
              </button>
            )}

            {/* Resume Trigger */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-black transition-all"
              >
                RESUME.PDF
              </button>
            )}

            {/* QR Code Quick View */}
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              title="Mobile Quick Scan"
              aria-label="Scan QR Code"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <path d="M14 14h2v2h-2z" />
                <path d="M18 14h3v3h-3z" />
                <path d="M14 18h3v3h-3z" />
                <path d="M19 19h2v2h-2z" />
              </svg>
            </button>

            {/* Contrast Mode Toggle */}
            <button
              onClick={toggleContrast}
              className={`p-1.5 rounded border transition-colors ${
                isHighContrast
                  ? 'bg-amber-400 text-black border-amber-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
              title="Toggle High Contrast Mode"
              aria-label="Toggle Contrast"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Bottom Corner Architectural Coordinates */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 px-3 py-2 sm:px-6 lg:px-8 lg:bottom-4 pointer-events-none hidden md:block">
        <div className="mx-auto flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
          <div className="flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            <span>EDITION 2026 // FULLSTACK & AI SYSTEMS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>MOGLIESWAR999@GMAIL.COM</span>
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-1.5 bg-amber-500 animate-pulse" />
              <span className="w-0.5 h-3 bg-cyan-400 animate-pulse delay-75" />
              <span className="w-0.5 h-2 bg-amber-400 animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Recruiter Modal */}
      <AnimatePresence>
        {isQRModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsQRModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-xl bg-zinc-950 border border-zinc-800 p-6 shadow-2xl text-center font-mono"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <span className="text-xs font-bold tracking-widest text-amber-400">
                  // MOBILE SYNC QR
                </span>
                <button
                  onClick={() => setIsQRModalOpen(false)}
                  className="text-zinc-500 hover:text-white text-xs px-2 py-1 rounded bg-zinc-900 border border-zinc-800"
                >
                  ESC [×]
                </button>
              </div>

              {/* Stylized QR representation */}
              <div className="mx-auto my-4 w-48 h-48 bg-white p-3 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-full h-full text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                >
                  <rect x="2" y="2" width="6" height="6" stroke="black" strokeWidth="2" fill="none" />
                  <rect x="4" y="4" width="2" height="2" fill="black" />
                  <rect x="16" y="2" width="6" height="6" stroke="black" strokeWidth="2" fill="none" />
                  <rect x="18" y="4" width="2" height="2" fill="black" />
                  <rect x="2" y="16" width="6" height="6" stroke="black" strokeWidth="2" fill="none" />
                  <rect x="4" y="18" width="2" height="2" fill="black" />
                  <path d="M10 2h4v2h-4z" fill="black" />
                  <path d="M12 6h2v4h-2z" fill="black" />
                  <path d="M2 10h4v2H2z" fill="black" />
                  <path d="M16 10h6v2h-6z" fill="black" />
                  <path d="M10 14h4v4h-4z" fill="black" />
                  <path d="M16 16h2v2h-2z" fill="black" />
                  <path d="M20 16h2v6h-2z" fill="black" />
                  <path d="M16 20h2v2h-2z" fill="black" />
                  <path d="M10 20h4v2h-4z" fill="black" />
                </svg>
              </div>

              <div className="space-y-2 text-left bg-zinc-900/60 p-3 rounded border border-zinc-800/80 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-zinc-500">CANDIDATE:</span>
                  <span className="text-zinc-200 font-bold">MOGLIESWAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">ROLE:</span>
                  <span className="text-amber-400">FULLSTACK & AI/ML</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">CONTACT:</span>
                  <a
                    href="mailto:moglieswar999@gmail.com"
                    className="text-cyan-400 hover:underline"
                  >
                    moglieswar999@gmail.com
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">LOCATION:</span>
                  <span className="text-zinc-300">Kuppam, Andhra Pradesh</span>
                </div>
              </div>

              <p className="mt-4 text-[10px] text-zinc-500">
                Scan with any smartphone camera to open instant contact card.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
