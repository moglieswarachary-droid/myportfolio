import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { BinarySeparator } from '../common/BinarySeparator';
import { Award, CheckCircle2, Languages, Sparkles, ExternalLink } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;
  const { languages, strengths } = PORTFOLIO_DATA.profileDetails;

  return (
    <section
      id="certifications"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
              <span>✦</span>
              <span>VERIFIED QUALIFICATIONS</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">CREDENTIAL ARCHIVE</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.1}>
              <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
                C E R T S
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
                Industry validated certifications and credentials in software engineering and foundational computer science.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Binary Separator */}
        <div className="mb-8">
          <BinarySeparator
            tag="CREDENTIALS"
            label="VERIFIED ISSUERS // TCS ION • CISCO • ACCENTURE"
          />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {certifications.map((cert, idx) => (
            <FadeIn
              key={idx}
              delay={0.06 * idx}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.12)"
                spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                spotlightRadius={380}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="h-full p-6 rounded-2xl bg-zinc-950/90 border border-white/10 transition-all duration-300 shadow-xl flex flex-col justify-between group relative backdrop-blur-md"
              >
                <div className="hud-corner-tl opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-tr opacity-30 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                    <span className="text-amber-400 font-bold">#CERT-000{idx + 1}</span>
                    <Award className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-amber-300 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED
                  </span>
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-zinc-600">ARCHIVED</span>
                  )}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Minimal Profile Details: Languages & Strengths */}
        <FadeIn delay={0.2} className="pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages */}
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.08)"
              spotlightBorderColor="rgba(245, 158, 11, 0.4)"
              spotlightRadius={450}
              className="p-6 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
                <Languages className="w-4 h-4" />
                <span>COMMUNICATION SPOKEN // READ // WRITTEN</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-white shadow-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            {/* Strengths */}
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.08)"
              spotlightBorderColor="rgba(245, 158, 11, 0.4)"
              spotlightRadius={450}
              className="p-6 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>CORE STRENGTHS // METHODOLOGY</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {strengths.map((str, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm"
                  >
                    {str}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
