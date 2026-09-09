import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { Briefcase, GraduationCap, Calendar, MapPin, Terminal } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Timeline: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;
  const educations = PORTFOLIO_DATA.education;

  return (
    <section className="section-visibility-auto relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1C1F]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* ================= EXPERIENCE SECTION ================= */}
        <div id="experience">
          <div className="mb-8 sm:mb-10">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Industry Practice</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
                EXPERIENCE
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-3 text-xs sm:text-sm text-[#8B949E] max-w-2xl font-normal">
                Hands-on practical industry internship focusing on data science pipelines, model evaluation, and machine learning systems.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <FadeIn
                key={idx}
                delay={0.2}
                className="w-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  spotlightBorderColor="rgba(245, 158, 11, 0.55)"
                  spotlightRadius={550}
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0E1015]/95 border border-[#27272A] shadow-2xl relative overflow-hidden group"
                >
                  {/* Viewfinder Reticle Corners */}
                  <div className="hud-corner-tl opacity-30 group-hover:opacity-100 transition-opacity" />
                  <div className="hud-corner-tr opacity-30 group-hover:opacity-100 transition-opacity" />

                  {/* Circuit Grid Accent */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#222]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-kanit font-black text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm sm:text-base font-bold text-[#FB923C]">
                        @ {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8B949E]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FB923C]" />
                        {exp.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <span className="self-start px-3.5 py-1.5 rounded-full bg-[#1F1F24] border border-[#333] text-xs font-mono text-[#BBCCD7]">
                    VERIFIED INTERNSHIP
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <p className="text-sm sm:text-base text-[#BBCCD7] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Internship Project Highlight */}
                  <div className="p-5 rounded-2xl bg-[#18181C] border border-[#27272A]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#FB923C] mb-1.5 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Internship Capstone Project: {exp.projectTitle}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
                      {exp.projectDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#27272A]">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#222228] border border-[#333] text-[11px] font-mono text-[#D7E2EA]"
                        >
                          {tech}
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
          <div className="mb-8 sm:mb-10">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundations</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
                EDUCATION
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-3 text-xs sm:text-sm text-[#8B949E] max-w-2xl font-normal">
                Academic trajectory in Computer Science &amp; Engineering with a focus on Artificial Intelligence and Machine Learning.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Visually Dominant B.Tech Card */}
            {educations.filter((edu) => edu.isDominant).map((edu, idx) => (
              <FadeIn
                key={`dom-${idx}`}
                delay={0.2}
                className="lg:col-span-8 h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  spotlightBorderColor="rgba(245, 158, 11, 0.65)"
                  spotlightRadius={600}
                  className="h-full p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#18181C] via-[#141416] to-[#0E0E10] border-2 border-[#D7E2EA] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FB923C]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F59E0B] text-black font-bold text-xs font-mono uppercase tracking-wider">
                        PRIMARY DEGREE &bull; PURSUING
                      </span>
                      <span className="text-xs font-mono text-[#8B949E] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FB923C]" />
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-kanit font-black text-white tracking-tight mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-[#FB923C] mb-4">
                      Specialization: {edu.field}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#1E1E24] border border-[#2F2F38] space-y-1">
                      <p className="text-sm sm:text-base font-semibold text-white">
                        {edu.institution}
                      </p>
                      {edu.affiliation && (
                        <p className="text-xs sm:text-sm text-[#8B949E] font-mono">
                          Affiliated with: {edu.affiliation}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#27272A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8B949E]">
                    <span>COURSEWORK: DATA STRUCTURES &bull; ALGORITHMS &bull; AI/ML &bull; OS &bull; DBMS &bull; WEB ARCHITECTURES</span>
                    <span className="text-emerald-400 font-bold">ACTIVE ENROLLMENT</span>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}

            {/* Secondary Academic Entries */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {educations.filter((edu) => !edu.isDominant).map((edu, idx) => (
                <FadeIn
                  key={`sec-${idx}`}
                  delay={0.3 + idx * 0.1}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.1)"
                    spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                    spotlightRadius={400}
                    className="p-6 sm:p-7 rounded-3xl bg-[#141416] border border-[#27272A] flex flex-col justify-between hover:border-[#FB923C]/50 transition-colors h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#8B949E] mb-2">
                        <span>{edu.period}</span>
                        {edu.score && (
                          <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-[#181818] border border-[#27272A]">
                            SCORE: {edu.score}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-kanit font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-[#FB923C] font-mono mb-2">
                        {edu.field}
                      </p>
                      <p className="text-xs text-[#8B949E]">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#222] text-[11px] font-mono text-[#646973]">
                      COMPLETED WITH DISTINCTION
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
