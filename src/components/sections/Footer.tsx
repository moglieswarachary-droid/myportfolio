import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ArrowUp, FileDown, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { SpotlightCard } from '../common/SpotlightCard';
import { MagneticButton } from '../common/MagneticButton';
import { BinarySeparator } from '../common/BinarySeparator';
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
    <footer
      id="footer"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-16 pb-16 px-4 sm:px-8 lg:px-14 border-t border-zinc-900 overflow-hidden"
    >
      {/* Top Binary Separator */}
      <div className="max-w-7xl mx-auto mb-12">
        <BinarySeparator
          tag="COMMUNICATION"
          label="CONTACT ENDPOINTS // 2026 INGEST"
          amberAccent
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Editorial Contact Banner */}
        <SpotlightCard
          spotlightColor="rgba(245, 158, 11, 0.16)"
          spotlightBorderColor="rgba(245, 158, 11, 0.65)"
          spotlightRadius={650}
          onMouseEnter={() => cinematicSound.playMechanicalClick()}
          className="rounded-2xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10 md:p-12 mb-12 shadow-2xl relative overflow-hidden group backdrop-blur-md"
        >
          {/* Viewfinder Reticle Corners */}
          <div className="hud-corner-tl opacity-40 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-tr opacity-40 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-bl opacity-40 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-br opacity-40 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
                <span>✦</span>
                <span>COMMUNICATION CHANNEL</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-black text-white tracking-tight uppercase">
                LET'S BUILD <span className="text-amber-400">TOGETHER.</span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-mono">
                // Available for software engineering roles, full-stack product development, and AI/ML initiatives.
              </p>

              {/* Direct Contact Endpoints */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs font-mono">
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold hover:underline"
                  title="Send Direct Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.identity.email}</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">//</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.identity.phone}`}
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white hover:underline"
                  title="Call Phone"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PORTFOLIO_DATA.identity.phone}</span>
                </a>
                <span className="text-zinc-600 hidden sm:inline">//</span>
                <span className="inline-flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PORTFOLIO_DATA.identity.location}</span>
                </span>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton strength={0.3}>
                <a
                  href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded font-mono text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all uppercase tracking-wider"
                  title={`Email ${PORTFOLIO_DATA.identity.email}`}
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>EMAIL ME</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={PORTFOLIO_DATA.identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-amber-400 hover:text-amber-300 transition-all uppercase tracking-wider"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <a
                  href={PORTFOLIO_DATA.identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold text-zinc-200 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all uppercase tracking-wider"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <button
                  type="button"
                  onClick={onOpenResume}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded font-mono text-xs sm:text-sm font-bold text-amber-300 bg-zinc-900 border border-amber-500/40 hover:border-amber-400 hover:bg-zinc-800 transition-all uppercase tracking-wider cursor-pointer"
                  title="View & Download Official Resume"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  <span>RESUME.PDF</span>
                </button>
              </MagneticButton>
            </div>
          </div>
        </SpotlightCard>

        {/* Lower Row: Identity & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded overflow-hidden border border-amber-500/30 flex items-center justify-center bg-black">
              <img
                src="/logo.jpg"
                alt="MOGLIACH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-syne font-bold text-zinc-200 tracking-wider">
                MOGLIESWAR
              </span>{' '}
              &bull; 2026 ARCHITECTURAL EDITION
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>KUPPAM, AP, INDIA</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
