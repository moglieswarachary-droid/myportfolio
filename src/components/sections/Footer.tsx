import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowUp, FileDown, ExternalLink, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { SpotlightCard } from '../common/SpotlightCard';
import { MagneticButton } from '../common/MagneticButton';
import { cinematicSound } from '../../utils/cinematicSound';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    cinematicSound.playMechanicalClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-20 pb-14 px-6 md:px-10 lg:px-16 border-t border-[#1C1C1F] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Professional Connect CTA Banner */}
        <SpotlightCard
          spotlightColor="rgba(245, 158, 11, 0.16)"
          spotlightBorderColor="rgba(245, 158, 11, 0.65)"
          spotlightRadius={650}
          onMouseEnter={() => cinematicSound.playMechanicalClick()}
          className="rounded-3xl bg-gradient-to-b from-[#13151A] to-[#0A0B0E] border border-amber-500/20 p-8 sm:p-12 mb-14 shadow-2xl relative overflow-hidden group"
        >
          {/* Viewfinder Reticle Corners */}
          <div className="hud-corner-tl opacity-30 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-tr opacity-30 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-bl opacity-30 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-br opacity-30 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1C22] border border-amber-500/30 text-[11px] font-telemetry uppercase tracking-widest text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-black text-white tracking-tight">
                Let's Build Something <span className="gold-chrome-gradient">Exceptional.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF]">
                Open for software engineering roles, AI/ML initiatives, and high-performance product development.
              </p>

              {/* Direct Contact Endpoints */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs font-mono">
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold hover:underline"
                  title="Send Direct Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.identity.email}</span>
                </a>
                <span className="text-[#4B5563] hidden sm:inline">&bull;</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.identity.phone}`}
                  className="inline-flex items-center gap-1.5 text-[#D1D5DB] hover:text-white hover:underline"
                  title="Call Phone"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PORTFOLIO_DATA.identity.phone}</span>
                </a>
                <span className="text-[#4B5563] hidden sm:inline">&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-[#9CA3AF]">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PORTFOLIO_DATA.identity.location}</span>
                </span>
              </div>
            </div>

            {/* Direct Professional Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <MagneticButton strength={0.3}>
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5"
                  title={`Email ${PORTFOLIO_DATA.identity.email}`}
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>{PORTFOLIO_DATA.identity.email}</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={PORTFOLIO_DATA.identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#0855A1] shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all transform hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={PORTFOLIO_DATA.identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#D7E2EA] bg-[#18181B] border border-[#2E2E36] hover:bg-[#222226] hover:text-white transition-all transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <button
                  type="button"
                  onClick={onOpenResume}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-amber-300 bg-[#141519] border border-amber-500/30 hover:border-amber-500/60 hover:bg-[#1A1C23] shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  title="View & Download Official Resume"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  <span>Resume</span>
                </button>
              </MagneticButton>
            </div>
          </div>
        </SpotlightCard>

        {/* Lower Row: Identity & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#1C1C1F]">
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center bg-black">
              <img
                src="/logo.jpg"
                alt="MOGLIACH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-kanit font-black text-white tracking-tight text-base">
              MOGLIESWAR
            </span>
            <span className="text-xs text-[#646973] font-mono hidden sm:inline">&bull; 2026</span>
            <span className="text-xs text-[#646973] font-mono hidden sm:inline">&bull;</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              className="text-xs text-amber-400/90 font-mono hover:text-amber-300 hover:underline"
            >
              {PORTFOLIO_DATA.identity.email}
            </a>
          </div>

          {/* Back to top button */}
          <MagneticButton strength={0.35}>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141416] border border-[#27272A] text-xs font-mono text-[#BBCCD7] hover:border-[#FB923C] hover:text-[#FB923C] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FB923C]" />
            </button>
          </MagneticButton>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-[#646973]">
          &copy; {new Date().getFullYear()} M Moglieswar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
