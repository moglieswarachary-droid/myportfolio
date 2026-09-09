import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import {
  Menu,
  X,
  ArrowDown,
  FileDown,
  Terminal,
  Mail,
} from 'lucide-react';
import { HolographicPortrait } from '../common/HolographicPortrait';
import { MagneticButton } from '../common/MagneticButton';
import { BinarySeparator } from '../common/BinarySeparator';
import { cinematicSound } from '../../utils/cinematicSound';

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#projects' },
    { label: 'STACK', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#footer' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-transparent text-[#D7E2EA] px-4 sm:px-8 lg:px-14 pt-16 lg:pt-20 pb-6"
    >
      {/* Sticky Quick Nav for Easy Jump */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full transition-all duration-300 z-30 ${
          isScrolled
            ? 'fixed top-14 left-0 right-0 max-w-4xl mx-auto px-4 py-2 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'relative mb-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Avatar */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group no-underline text-[#D7E2EA] hover:text-white"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-amber-500/30 group-hover:border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all bg-black flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="MOGLIACH Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="font-syne font-black tracking-wider text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors uppercase">
              MOGLIESWAR
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="text-[11px] font-mono tracking-widest text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Header Actions */}
          <div className="hidden md:flex items-center gap-2">
            {onOpenTerminal && (
              <MagneticButton strength={0.2}>
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  title="Launch CLI Terminal"
                >
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>CLI</span>
                </button>
              </MagneticButton>
            )}

            <MagneticButton strength={0.25}>
              <a
                href={PORTFOLIO_DATA.identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 block rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href={PORTFOLIO_DATA.identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 block rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <button
                type="button"
                onClick={onOpenResume}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-[11px] font-mono font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
                title="View & Download Official Resume"
              >
                <FileDown className="w-3.5 h-3.5 text-black" />
                <span>RESUME</span>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-2 pb-2 font-mono text-xs"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-amber-400 py-1.5"
                >
                  // {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  className="text-amber-400 hover:underline"
                >
                  {PORTFOLIO_DATA.identity.email}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Top Editorial Binary Separator */}
      <div className="w-full my-2">
        <BinarySeparator
          tag="CREATIVE_DEV_SYS"
          label="MOGLIESWAR // ARCHITECTURAL PORTFOLIO 2026"
          amberAccent
        />
      </div>

      {/* Main Hero Body: Wodniack Editorial Brutalism */}
      <div className="my-auto py-6 sm:py-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Monumental Editorial Typography (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Telemetry Chips & Direct Contact */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/90 border border-white/10 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-emerald-400 font-semibold">AVAILABLE FOR HIRE</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">2026 ROLES</span>
            </div>

            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white transition-all shadow-sm group"
              title={`Direct Email: ${PORTFOLIO_DATA.identity.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{PORTFOLIO_DATA.identity.email}</span>
            </a>
          </div>

          {/* Editorial Monumental Heading */}
          <div className="space-y-1 relative w-full">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest text-amber-400/90 uppercase">
              <span className="text-amber-500">✦</span>
              <span>CREATIVE DEVELOPER &amp; AI ENGINEER</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter text-white font-syne leading-[0.92] uppercase">
              MOGLIESWAR
            </h1>

            {/* Editorial Secondary Line with Rotating Star Motif */}
            <div className="flex items-center gap-3 pt-2 text-zinc-400 font-syne text-lg sm:text-2xl md:text-3xl tracking-tight">
              <span className="text-amber-400 text-xl md:text-2xl animate-star-slow">✦</span>
              <span className="italic font-cinzel text-zinc-200">Creative Technologist</span>
              <span className="text-zinc-600">//</span>
              <span className="font-mono text-xs sm:text-sm tracking-widest text-amber-300/80 uppercase">
                CSE (AI &amp; ML)
              </span>
            </div>
          </div>

          {/* Concise Technical Manifesto */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-normal font-sans border-l-2 border-amber-500/50 pl-4 py-1">
            Undergraduate software developer with deep hands-on expertise building production-grade full-stack architectures, mobile apps, and machine learning systems. Focused on cinematic interfaces, ultra-fast render performance, and robust system integrity.
          </p>

          {/* Editorial Tech Badges (TAG x COUNT style) */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
            {PORTFOLIO_DATA.identity.heroBadges.map((badge) => (
              <span
                key={badge}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-amber-500/60 hover:text-amber-300 hover:bg-zinc-850 transition-all select-none"
              >
                #{badge}
              </span>
            ))}
          </div>

          {/* CTAs with Magnetic Physics */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <MagneticButton strength={0.24}>
              <a
                href="#projects"
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                onClick={() => cinematicSound.playDronePulse()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-mono font-bold text-xs sm:text-sm tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all"
              >
                <span>VIEW WORK // 03</span>
                <ArrowDown className="w-4 h-4 text-black" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.24}>
              <button
                type="button"
                onClick={onOpenResume}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-zinc-700 bg-zinc-900 hover:bg-zinc-850 hover:border-amber-500/50 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm cursor-pointer"
                title="View & Download Official Resume"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>RESUME.PDF</span>
              </button>
            </MagneticButton>

            <MagneticButton strength={0.24}>
              <a
                href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm"
                title={`Send direct email to ${PORTFOLIO_DATA.identity.email}`}
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>CONTACT</span>
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Column: Holographic Architectural Portrait (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
        >
          {/* Subtle Technical Frame Tag */}
          <div className="w-full max-w-sm relative">
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 tracking-widest pb-1 border-b border-zinc-800/80 mb-2">
              <span>IDENT // MOG-2026-ARCH</span>
              <span className="text-amber-400">STATUS: VERIFIED</span>
            </div>

            <HolographicPortrait
              src="/moglieswar-neural.jpg"
              alt="Moglieswar — Software Developer & AI/ML Engineer"
            />

            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 tracking-widest pt-1 border-t border-zinc-800/80 mt-2">
              <span>KUPPAM, AP, INDIA</span>
              <span>12.7485° N / 78.3639° E</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Binary Separator */}
      <div className="w-full my-3">
        <BinarySeparator
          tag="FLAGSHIP_WORKS"
          label="CAMPUSNET // RIDETOTRACK // PAYTRACK"
        />
      </div>
    </section>
  );
};
