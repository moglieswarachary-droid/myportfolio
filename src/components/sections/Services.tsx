import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { Layers, Cpu, Server, Smartphone, Layout, Sparkles, ArrowUpRight } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Services: React.FC = () => {
  const services = PORTFOLIO_DATA.engineeringServices;

  const serviceIcons = [
    <Layout className="w-5 h-5 text-amber-400" key="0" />,
    <Cpu className="w-5 h-5 text-cyan-400" key="1" />,
    <Server className="w-5 h-5 text-purple-400" key="2" />,
    <Smartphone className="w-5 h-5 text-emerald-400" key="3" />,
    <Layers className="w-5 h-5 text-orange-400" key="4" />,
  ];

  return (
    <section
      id="services"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-20 sm:pt-28 pb-20 px-5 sm:px-8 md:px-12 border-t border-[#1C1C1F] overflow-hidden"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[350px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Engineering Disciplines</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.2}>
              <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
                ENGINEERING DISCIPLINES
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xs sm:text-sm text-[#8B949E] max-w-md font-normal">
                End-to-end technical execution across high-throughput server backends, modern frontend systems, and AI inference pipelines.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Services Widescreen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={service.number} delay={0.08 * idx} className="h-full">
              <SpotlightCard
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                spotlightColor="rgba(245, 158, 11, 0.12)"
                spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                spotlightRadius={450}
                className="h-full p-6 sm:p-8 rounded-3xl bg-[#101216]/90 border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between transition-all duration-300 group hover:translate-y-[-4px]"
              >
                {/* Viewfinder Reticle Corners */}
                <div className="hud-corner-tl opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-tr opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#181A22] border border-white/[0.1] flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                        {serviceIcons[idx % serviceIcons.length]}
                      </div>
                      <span className="font-telemetry font-bold text-xs text-amber-400">
                        SPEC // {service.number}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-kanit font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-amber-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#161820] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono text-[#D7E2EA] group-hover:border-amber-500/20 group-hover:text-amber-200/90 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
