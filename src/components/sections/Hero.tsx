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
} from 'lucide-react';
import { HolographicPortrait } from '../common/HolographicPortrait';
import { MagneticButton } from '../common/MagneticButton';
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
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-transparent text-[#D7E2EA] px-6 md:px-10 lg:px-16 pt-5 md:pt-7 pb-8">
      {/* Sticky Header / Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full transition-all duration-300 z-50 ${
          isScrolled
            ? 'fixed top-4 left-0 right-0 max-w-5xl mx-auto px-5 py-2.5 rounded-full bg-[#101114]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.7)]'
            : 'relative'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 group no-underline text-[#D7E2EA] hover:text-white"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-amber-500/30 group-hover:border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center bg-black">
              <img
                src="/logo.jpg"
                alt="MOGLIACH Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="font-kanit font-black tracking-tight text-sm sm:text-base text-white group-hover:text-amber-400 transition-colors">
              MOGLIESWAR
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="text-xs uppercase font-medium tracking-wider text-[#9CA3AF] hover:text-amber-400 hover:text-shadow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Header Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {onOpenTerminal && (
              <MagneticButton strength={0.25}>
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141519] border border-white/[0.08] text-xs font-mono text-[#9CA3AF] hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  title="Launch CLI Terminal"
                >
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>CLI</span>
                </button>
              </MagneticButton>
            )}

            <MagneticButton strength={0.3}>
              <a
                href={PORTFOLIO_DATA.identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 block rounded-full bg-[#141519] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <a
                href={PORTFOLIO_DATA.identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 block rounded-full bg-[#141519] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.22}>
              <button
                type="button"
                onClick={onOpenResume}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_1px_14px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
                title="View & Download Official Resume"
              >
                <FileDown className="w-3.5 h-3.5 text-black" />
                <span>Resume</span>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#141519] border border-white/[0.08] text-[#D7E2EA]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 pt-3 border-t border-white/[0.08] flex flex-col gap-2 pb-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-amber-400 py-1.5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-white"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-white"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="flex items-center gap-1.5 text-xs text-amber-400 ml-auto font-semibold"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Hero Body: 2-Column Senior Engineer Architecture */}
      <div className="my-auto py-8 sm:py-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Authoritative Dominant Typography (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#131418] border border-white/[0.08] shadow-sm text-xs font-mono text-[#D1D5DB]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span className="text-emerald-400 font-medium">Available for Developer Roles</span>
            <span className="text-[#646973] hidden sm:inline">&bull; 2026</span>
          </div>

          {/* Dominant Headline */}
          <div className="space-y-2 relative">
            {/* Ambient Lens Flare Background Glow */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-96 h-28 bg-amber-500/10 blur-3xl pointer-events-none -z-10" />

            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white font-kanit leading-[0.98]">
              Hi, I'm{' '}
              <span className="gold-chrome-gradient drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                MOGLIESWAR
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-400/90 tracking-tight font-space">
              CSE (AI &amp; ML) <span className="text-amber-500/80 font-normal mx-1">&bull;</span> Software Developer <span className="text-amber-500/80 font-normal mx-1">&bull;</span> AI/ML &amp; Full-Stack Project Builder
            </p>
          </div>

          {/* Authentic Technical Summary */}
          <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
            Computer Science and Engineering (Artificial Intelligence &amp; Machine Learning) undergraduate with hands-on experience designing and building full-stack, mobile, AI/ML and student-focused digital products.
          </p>

          {/* Clean Graphite Tech Stack Badges with Amber Hover */}
          <div className="flex flex-wrap gap-2 pt-1">
            {PORTFOLIO_DATA.identity.heroBadges.map((badge) => (
              <span
                key={badge}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="px-3 py-1 rounded-full bg-[#131418] border border-[#23252B] text-xs font-mono text-[#D1D5DB] hover:border-amber-500/50 hover:text-amber-300 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all cursor-default select-none"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Primary & Secondary CTAs with Magnetic Physics */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <MagneticButton strength={0.24}>
              <a
                href="#projects"
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                onClick={() => cinematicSound.playDronePulse()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_2px_20px_rgba(245,158,11,0.35)] transition-all"
              >
                <span>Explore Feature Projects</span>
                <ArrowDown className="w-4 h-4 text-black" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.24}>
              <button
                type="button"
                onClick={onOpenResume}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#23252B] bg-[#121316] hover:bg-[#18191E] hover:border-amber-500/40 text-[#D1D5DB] hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
                title="View & Download Official Resume"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>Resume PDF</span>
              </button>
            </MagneticButton>

            <div className="flex items-center gap-2 pl-1">
              <MagneticButton strength={0.32}>
                <a
                  href={PORTFOLIO_DATA.identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 block rounded-full bg-[#131418] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:border-white/25 hover:bg-[#1A1B20] transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.32}>
                <a
                  href={PORTFOLIO_DATA.identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 block rounded-full bg-[#131418] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:border-amber-500/40 hover:bg-[#1A1B20] transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Holographic Developer Portrait with Parallax Tilt & Glare (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
        >
          <HolographicPortrait
            src="/moglieswar-neural.jpg"
            alt="Moglieswar — Software Developer & AI/ML Engineer"
          />
        </motion.div>
      </div>

      {/* Bottom Summary Strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>{PORTFOLIO_DATA.identity.bottomBarText}</span>
        </div>

        <div className="flex items-center gap-5 font-mono text-[11px] text-[#6B7280]">
          <span className="text-[#9CA3AF]">3 Flagship Projects</span>
          <span className="text-[#374151]">&bull;</span>
          <span>FastAPI &bull; NestJS &bull; React &bull; Flutter</span>
        </div>
      </motion.div>
    </section>
  );
};
