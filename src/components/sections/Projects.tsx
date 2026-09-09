import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { ProjectDetailModal } from '../common/ProjectDetailModal';
import { SpotlightCard } from '../common/SpotlightCard';
import { GithubIcon } from '../common/Icons';
import {
  ArrowUpRight,
  Cpu,
  Smartphone,
  CreditCard,
  Network,
  Activity,
  Shield,
  Radio,
  BarChart3,
  Flame,
} from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const totalCards = projects.length;

  return (
    <section
      id="projects"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-20 sm:pt-28 pb-24 px-4 sm:px-6 md:px-10 border-t border-[#1C1C1F]"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#F59E0B]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-14">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <FadeIn delay={0.2}>
            <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
              FEATURED PROJECTS
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xs sm:text-sm text-[#8B949E] max-w-md">
              Full-stack, mobile, and AI/ML architectures developed with production-ready standards and authentic technical specs.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Sticky Stacking Projects Container */}
      <div className="max-w-7xl mx-auto relative space-y-8 sm:space-y-10 pb-8">
        {projects.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.02;
          const topOffset = 80 + index * 20;

          return (
            <SpotlightCard
              key={project.id}
              style={{
                top: `${topOffset}px`,
                transform: `scale(${targetScale})`,
                transformOrigin: 'top center',
              }}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              spotlightBorderColor="rgba(245, 158, 11, 0.55)"
              spotlightRadius={620}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="static sm:sticky h-auto rounded-3xl border border-[#27272A] bg-[#0E1015]/95 p-5 sm:p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between transition-all duration-300 relative group/card"
            >
              {/* Viewfinder Reticle Corners */}
              <div className="hud-corner-tl opacity-30 group-hover/card:opacity-90 transition-opacity" />
              <div className="hud-corner-tr opacity-30 group-hover/card:opacity-90 transition-opacity" />
              <div className="hud-corner-bl opacity-30 group-hover/card:opacity-90 transition-opacity" />
              <div className="hud-corner-br opacity-30 group-hover/card:opacity-90 transition-opacity" />

              {/* Background Accent Grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#BBCCD7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              {/* Card Top Row: Number, Category, Project Name, Explore / GitHub */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272A] pb-5">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="font-telemetry text-base sm:text-xl font-bold text-amber-400">
                    {project.number}
                  </span>
                  <span className="text-xs font-telemetry tracking-widest uppercase text-amber-300/80 px-2.5 py-0.5 rounded bg-[#181A22] border border-amber-500/20">
                    {project.category}
                  </span>
                  <h3 className="font-kanit font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {project.liveUrl && (
                    <LiveProjectButton
                      url={project.liveUrl}
                      label="Live Project"
                    />
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cinematicSound.playMechanicalClick()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono text-[#D7E2EA] hover:border-[#FB923C] hover:text-[#FB923C] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      cinematicSound.playDronePulse();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => cinematicSound.playMechanicalClick()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-semibold uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Body: 40% Left + 60% Right */}
              <div className="relative z-10 my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
                {/* 40% Left: Two Stacked Visuals / Features */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  {/* Visual 1: Summary & Purpose */}
                  <div className="p-5 rounded-2xl bg-[#141416] border border-[#27272A] flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#FB923C] mb-1">
                        OVERVIEW
                      </p>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-kanit">
                        {project.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#BBCCD7] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
                      <span>STATUS: REPOSITORY VERIFIED</span>
                      <span className="text-emerald-400 font-semibold">&bull; ACTIVE</span>
                    </div>
                  </div>

                  {/* Visual 2: Tech Badges & Capabilities */}
                  <div className="p-5 rounded-2xl bg-[#141416] border border-[#27272A]">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#8B949E] mb-3">
                      STACK SPECIFICATION
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.stack.slice(0, 8).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-[#1D1D20] border border-[#333] text-[10px] sm:text-xs font-mono text-[#D7E2EA]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 8 && (
                        <span className="px-2 py-1 rounded-md bg-[#252528] text-[10px] font-mono text-[#8B949E]">
                          +{project.stack.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 60% Right: One Tall Visual / Interactive Architecture Flow */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 rounded-2xl bg-[#141416] border border-[#27272A] hover:border-[#FB923C]/50 p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-300 group/arch shadow-lg"
                >
                  {/* Visual Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#27272A] pb-3 mb-4 text-xs font-mono text-[#8B949E]">
                    <span className="flex items-center gap-1.5 text-white">
                      <Activity className="w-3.5 h-3.5 text-[#FB923C]" />
                      <span>SYSTEM ARCHITECTURE PREVIEW</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#222]">
                      INTERACTIVE FLOW
                    </span>
                  </div>

                  {/* Custom Visualizations for each project */}
                  {project.id === 'campusnet' && (
                    <div className="my-auto py-4 space-y-3">
                      <div className="text-[11px] font-mono text-[#8B949E] uppercase tracking-wider mb-2">
                        Decoupled Microservice Topology
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        {project.architecture?.map((node, nIdx) => (
                          <div
                            key={nIdx}
                            className="p-3 rounded-xl bg-[#1C1C20] border border-[#333] flex flex-col items-center justify-center text-center group/node hover:border-[#FB923C] hover:bg-[#25252A] transition-colors"
                          >
                            <span className="text-[9px] font-mono text-[#FB923C] mb-1">
                              STEP 0{nIdx + 1}
                            </span>
                            <span className="text-xs font-mono font-bold text-white tracking-wide">
                              {node}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Connection Wire Diagram Line */}
                      <div className="p-3 rounded-xl bg-[#0F0F12] border border-[#27272A] text-xs font-mono text-[#BBCCD7] flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Network className="w-4 h-4 text-blue-400" />
                          <span>Async Communication via Redis &amp; WebSockets</span>
                        </span>
                        <span className="text-emerald-400 font-bold text-[10px]">
                          LOW LATENCY
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === 'ridetotrack' && (
                    <div className="my-auto py-4 space-y-4">
                      <div className="text-[11px] font-mono text-[#8B949E] uppercase tracking-wider">
                        Telemetry Pipeline // Mobile + GPS + Safety
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <Smartphone className="w-6 h-6 text-blue-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Flutter Client</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">Adaptive GPS Telemetry</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <Radio className="w-6 h-6 text-[#FB923C] mb-2 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-white">FastAPI Ingest</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">High-throughput Asynchronous</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <Shield className="w-6 h-6 text-emerald-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Safety Engine</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">Route &amp; Threshold Alerts</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0F0F12] border border-[#27272A] text-xs font-mono text-[#BBCCD7] flex items-center justify-between">
                        <span>Deploy: Containerized Docker on Railway</span>
                        <span className="text-[#FB923C] font-bold text-[10px]">PYTHON &bull; DART</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'paytrack' && (
                    <div className="my-auto py-4 space-y-4">
                      <div className="text-[11px] font-mono text-[#8B949E] uppercase tracking-wider">
                        Fintech Pipeline // Dashboard + Payments + Dues
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <CreditCard className="w-6 h-6 text-emerald-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Payment Monitor</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">Due Dates &amp; History</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <BarChart3 className="w-6 h-6 text-blue-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Credit Utilization</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">Health Insights &amp; Ratios</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#1C1C20] border border-[#333] text-center flex flex-col items-center">
                          <Cpu className="w-6 h-6 text-[#FB923C] mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Firebase Sync</span>
                          <span className="text-[10px] text-[#8B949E] mt-1">Atomic Cloud Records</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0F0F12] border border-[#27272A] text-xs font-mono text-[#BBCCD7] flex items-center justify-between">
                        <span>Responsive Full-Stack Financial Architecture</span>
                        <span className="text-emerald-400 font-bold text-[10px]">REAL-TIME NO-SQL</span>
                      </div>
                    </div>
                  )}

                  {/* Card Bottom Inspection Trigger */}
                  <div className="pt-3 border-t border-[#27272A] flex items-center justify-between text-xs">
                    <span className="text-[#8B949E]">
                      Click to inspect full architecture, problems &amp; solutions
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-[#FB923C] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer Tagline */}
              <div className="relative z-10 pt-3 border-t border-[#1C1C1F] flex items-center justify-between text-xs text-[#8B949E] font-mono">
                <span>// {project.tagline}</span>
                <span className="text-[#FB923C]">MOGLIESWAR PORTFOLIO</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
