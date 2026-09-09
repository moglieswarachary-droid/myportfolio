import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { Award, CheckCircle2, Languages, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;
  const { languages, strengths } = PORTFOLIO_DATA.profileDetails;

  return (
    <section
      id="certifications"
      className="relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1C1F]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-amber-500/30 text-[11px] font-telemetry uppercase tracking-widest text-amber-400 mb-3 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Qualifications &amp; Credentials</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.2}>
              <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
                CERTIFICATIONS
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xs sm:text-sm text-[#8B949E] max-w-2xl font-normal">
                Validated industry programs across software engineering, business acumen, and technical competencies.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, idx) => (
            <FadeIn
              key={idx}
              delay={0.08 * idx}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.12)"
                spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                spotlightRadius={380}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="h-full p-6 rounded-3xl bg-[#0E1015]/95 border border-[#27272A] transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
              >
                {/* Viewfinder Reticle Corners */}
                <div className="hud-corner-tl opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-tr opacity-30 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8B949E] mb-3">
                    <span className="text-amber-400 font-bold font-telemetry">CERT // 0{idx + 1}</span>
                    <Award className="w-4 h-4 text-[#8B949E] group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h3 className="font-kanit font-bold text-lg text-white group-hover:text-[#FB923C] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#8B949E] font-mono">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    VERIFIED RECORD
                  </span>
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FB923C] hover:underline flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[#646973]">CREDENTIAL ARCHIVED</span>
                  )}
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Minimal Profile Details Section: Languages & Strengths */}
        <FadeIn delay={0.2} className="pt-10 border-t border-[#1C1C1F]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.08)"
              spotlightBorderColor="rgba(245, 158, 11, 0.4)"
              spotlightRadius={450}
              className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-[#27272A]"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-4">
                <Languages className="w-4 h-4" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-4 py-2 rounded-xl bg-[#1C1C20] border border-[#2D2D35] text-xs font-mono font-medium text-white shadow-sm"
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
              className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-[#27272A]"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Core Strengths</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {strengths.map((str, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-[#1C1C20] border border-[#2D2D35] text-xs font-mono font-medium text-[#D7E2EA] shadow-sm"
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
