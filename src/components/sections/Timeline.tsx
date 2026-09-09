import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { BinarySeparator } from '../common/BinarySeparator';
import { Calendar, MapPin, Terminal } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Timeline: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;
  const educations = PORTFOLIO_DATA.education;

  return (
    <section className="section-visibility-auto relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* ================= EXPERIENCE SECTION ================= */}
        <div id="experience">
          <div className="mb-8">
            <FadeIn delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
                <span>✦</span>
                <span>PRACTICAL INDUSTRY TRACK RECORD</span>
                <span className="text-zinc-600">//</span>
                <span className="text-zinc-400">ENGINEERING INTERNSHIP</span>
              </div>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <FadeIn delay={0.1}>
                <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
                  E X P E R I E N C E
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
                  Hands-on industry machine learning and data science workflows, real-world data pipelines, and predictive model deployment.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Binary Separator */}
          <div className="mb-8">
            <BinarySeparator
              tag="PRACTICE_RECORD"
              label="VAULTSPHERE AI // DATA SCIENCE & PREDICTIVE ML"
            />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <FadeIn
                key={idx}
                delay={0.15}
                className="w-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  spotlightBorderColor="rgba(245, 158, 11, 0.55)"
                  spotlightRadius={550}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="p-6 sm:p-8 md:p-10 rounded-2xl bg-zinc-950/90 border border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md"
                >
                  {/* Viewfinder Reticle Corners */}
                  <div className="hud-corner-tl opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="hud-corner-tr opacity-40 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2 font-mono">
                        <h3 className="text-2xl sm:text-3xl font-syne font-black text-white">
                          {exp.role}
                        </h3>
                        <span className="text-sm sm:text-base font-bold text-amber-400">
                          @ {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          {exp.location}
                        </span>
                        <span className="text-zinc-600">//</span>
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <span className="self-start px-3 py-1 rounded bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-amber-300">
                      (ROLE // AI INTERN)
                    </span>
                  </div>

                  <div className="py-6 space-y-4 font-mono">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                      {exp.description}
                    </p>

                    {/* Internship Capstone Highlight */}
                    <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>CAPSTONE: {exp.projectTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                        {exp.projectDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-zinc-800">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION SECTION ================= */}
        <div id="education">
          <div className="mb-8">
            <FadeIn delay={0.05}>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
                <span>✦</span>
                <span>ACADEMIC FOUNDATIONS</span>
                <span className="text-zinc-600">//</span>
                <span className="text-zinc-400">COMPUTER SCIENCE &amp; ENGINEERING</span>
              </div>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <FadeIn delay={0.1}>
                <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
                  A C A D E M I C S
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
                  Undergraduate program in Computer Science &amp; Engineering with specialization in Artificial Intelligence and Machine Learning.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Binary Separator */}
          <div className="mb-8">
            <BinarySeparator
              tag="ACADEMIC_AUDIT"
              label="B.TECH CSE (AI & ML) // DRAVIDIAN UNIVERSITY"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Primary Degree Card */}
            {educations.filter((edu) => edu.isDominant).map((edu, idx) => (
              <FadeIn
                key={`dom-${idx}`}
                delay={0.15}
                className="lg:col-span-8 h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  spotlightBorderColor="rgba(245, 158, 11, 0.65)"
                  spotlightRadius={600}
                  className="h-full p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between backdrop-blur-md"
                >
                  <div className="hud-corner-tl opacity-40" />
                  <div className="hud-corner-tr opacity-40" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 font-mono">
                      <span className="px-3 py-1 rounded bg-amber-400 text-black font-bold text-xs uppercase tracking-wider">
                        DEGREE IN PROGRESS &bull; 2022 - 2026
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-syne font-black text-white tracking-tight mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-amber-400 mb-4 font-mono">
                      // Specialization: {edu.field}
                    </p>

                    <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                      <p className="text-sm sm:text-base font-bold text-white font-syne">
                        {edu.institution}
                      </p>
                      {edu.affiliation && (
                        <p className="text-xs text-zinc-400 font-mono">
                          Affiliation: {edu.affiliation}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                    <span>COURSEWORK: DATA STRUCTURES &bull; AI/ML &bull; OS &bull; DBMS &bull; NETWORKS</span>
                    <span className="text-emerald-400 font-bold">● ACTIVE CANDIDATE</span>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}

            {/* Secondary Academic Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {educations.filter((edu) => !edu.isDominant).map((edu, idx) => (
                <FadeIn
                  key={`sec-${idx}`}
                  delay={0.2 + idx * 0.1}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.1)"
                    spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                    spotlightRadius={400}
                    className="p-6 rounded-2xl bg-zinc-950/90 border border-white/10 flex flex-col justify-between hover:border-amber-400/50 transition-colors h-full backdrop-blur-md"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                        <span>{edu.period}</span>
                        {edu.score && (
                          <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                            SCORE: {edu.score}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-syne font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-amber-400 font-mono mb-2">
                        {edu.field}
                      </p>
                      <p className="text-xs text-zinc-400 font-sans">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] font-mono text-zinc-500">
                      COMPLETED CREDENTIAL
                    </div>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
