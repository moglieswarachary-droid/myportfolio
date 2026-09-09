import React, { useState } from 'react';
import { PORTFOLIO_DATA, type Project } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { ProjectDetailModal } from '../common/ProjectDetailModal';
import { SpotlightCard } from '../common/SpotlightCard';
import { BinarySeparator } from '../common/BinarySeparator';
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
} from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const totalCards = projects.length;

  const projectCodes: Record<string, string> = {
    campusnet: '#CAMP-0001/03',
    ridetotrack: '#RIDE-0002/03',
    paytrack: '#PAYT-0003/03',
  };

  return (
    <section
      id="projects"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-16 sm:pt-24 pb-20 px-4 sm:px-6 md:px-10"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header: Wodniack Editorial Style */}
      <div className="max-w-7xl mx-auto mb-10">
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
            <span>✦</span>
            <span>PORTFOLIO SHOWCASE</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400">ARCHITECTURAL PRODUCTION SYSTEMS</span>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <FadeIn delay={0.1}>
            <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
              W O R K
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
              Full-stack, mobile telemetry, and AI/ML production solutions developed with enterprise performance standards and verifiable code repositories.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Editorial Binary Separator */}
      <div className="max-w-7xl mx-auto mb-8">
        <BinarySeparator
          tag="CASE_STUDIES"
          label="INDEX // ARCHITECTURE FLOW & DEEP INSPECT"
        />
      </div>

      {/* Stacking Projects Cards */}
      <div className="max-w-7xl mx-auto relative space-y-8 sm:space-y-10 pb-4">
        {projects.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.02;
          const topOffset = 70 + index * 18;
          const codeTag = projectCodes[project.id] || `#PROJ-000${index + 1}/03`;

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
              spotlightRadius={600}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="static sm:sticky h-auto rounded-2xl border border-white/10 bg-zinc-950/90 p-5 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between transition-all duration-300 relative group/card backdrop-blur-md"
            >
              {/* Corner Reticle Viewfinders */}
              <div className="hud-corner-tl opacity-40 group-hover/card:opacity-100 transition-opacity" />
              <div className="hud-corner-tr opacity-40 group-hover/card:opacity-100 transition-opacity" />
              <div className="hud-corner-bl opacity-40 group-hover/card:opacity-100 transition-opacity" />
              <div className="hud-corner-br opacity-40 group-hover/card:opacity-100 transition-opacity" />

              {/* Card Header Row: Code ID, Category, Project Name, Actions */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono">
                  <span className="text-sm sm:text-base font-bold text-amber-400 tracking-wider">
                    {codeTag}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase text-zinc-300 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                    {project.category}
                  </span>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2.5 self-end sm:self-auto font-mono">
                  {project.liveUrl && (
                    <LiveProjectButton
                      url={project.liveUrl}
                      label="Live"
                    />
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => cinematicSound.playMechanicalClick()}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-xs text-zinc-200 hover:border-amber-400 hover:text-amber-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">REPO</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      cinematicSound.playDronePulse();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => cinematicSound.playMechanicalClick()}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
                  >
                    <span>INSPECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Body Grid: 5 cols Left + 7 cols Right */}
              <div className="relative z-10 my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
                {/* 5 cols Left: Overview & Tech Specification */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  {/* Overview */}
                  <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                        <span>OVERVIEW</span>
                        <span className="text-[10px] text-zinc-500">REV.01</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-syne">
                        {project.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>STATUS: REPOSITORY AUDITED</span>
                      <span className="text-emerald-400 font-semibold">● ACTIVE</span>
                    </div>
                  </div>

                  {/* Stack Specification */}
                  <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800">
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                      // STACK SPECIFICATION
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 8).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-700/80 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 8 && (
                        <span className="px-2 py-1 rounded bg-zinc-950 text-[10px] font-mono text-zinc-500">
                          +{project.stack.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 7 cols Right: Interactive Architecture Preview Flow */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="lg:col-span-7 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/50 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-300 group/arch shadow-lg"
                >
                  {/* Top Bar of Architecture Box */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-200">
                      <Activity className="w-3.5 h-3.5 text-amber-400" />
                      <span>TOPOLOGY PREVIEW</span>
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-300">
                      INTERACTIVE FLOW [CLICK]
                    </span>
                  </div>

                  {/* Visualizations for each project */}
                  {project.id === 'campusnet' && (
                    <div className="my-auto py-3 space-y-3">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Decoupled Microservice Topology
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                        {project.architecture?.map((node, nIdx) => (
                          <div
                            key={nIdx}
                            className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center group/node hover:border-amber-500 hover:bg-zinc-900 transition-colors"
                          >
                            <span className="text-[9px] font-mono text-amber-400 mb-1">
                              STEP 0{nIdx + 1}
                            </span>
                            <span className="text-xs font-mono font-bold text-white tracking-wide">
                              {node}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Network className="w-4 h-4 text-cyan-400" />
                          <span>Async Redis &amp; WebSockets</span>
                        </span>
                        <span className="text-emerald-400 font-bold text-[10px]">
                          LOW LATENCY &lt;45ms
                        </span>
                      </div>
                    </div>
                  )}

                  {project.id === 'ridetotrack' && (
                    <div className="my-auto py-3 space-y-3">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Mobile Telemetry Pipeline // Adaptive GPS + FastAPI
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <Smartphone className="w-5 h-5 text-cyan-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Flutter Client</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Adaptive GPS Telemetry</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <Radio className="w-5 h-5 text-amber-400 mb-2 animate-pulse" />
                          <span className="text-xs font-mono font-bold text-white">FastAPI Ingest</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Async High-Throughput</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <Shield className="w-5 h-5 text-emerald-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Safety Engine</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Route &amp; Threshold Alerts</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span>Deploy: Docker Containerized on Railway</span>
                        <span className="text-amber-400 font-bold text-[10px]">PYTHON &bull; DART</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'paytrack' && (
                    <div className="my-auto py-3 space-y-3">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Fintech Pipeline // Ledger + Cards + Due Alerts
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <CreditCard className="w-5 h-5 text-emerald-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Payment Monitor</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Due Dates &amp; History</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <BarChart3 className="w-5 h-5 text-cyan-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Credit Ratio</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Health Insights</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center">
                          <Cpu className="w-5 h-5 text-amber-400 mb-2" />
                          <span className="text-xs font-mono font-bold text-white">Cloud Sync</span>
                          <span className="text-[10px] text-zinc-400 mt-1">Atomic Firebase Store</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span>Responsive Full-Stack Financial Architecture</span>
                        <span className="text-emerald-400 font-bold text-[10px]">REAL-TIME NO-SQL</span>
                      </div>
                    </div>
                  )}

                  {/* Card Bottom Trigger */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">
                      Click anywhere to open full technical case study
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>EXPAND</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer Tagline */}
              <div className="relative z-10 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>// {project.tagline}</span>
                <span className="text-amber-400/90 font-bold">MOGLIESWAR // VERIFIED</span>
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
