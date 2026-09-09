import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { BinarySeparator } from '../common/BinarySeparator';
import { Layers, Cpu, Server, Smartphone, Layout, ArrowUpRight } from 'lucide-react';
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
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] pt-16 sm:pt-24 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
              <span>✦</span>
              <span>ENGINEERING DISCIPLINES</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">ARCHITECTURAL DOMAINS</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.1}>
              <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
                D I S C I P L I N E S
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md">
                Full-lifecycle engineering execution across distributed backends, ultra-fast client interfaces, and machine learning pipelines.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Binary Separator */}
        <div className="mb-8">
          <BinarySeparator
            tag="CAPABILITIES"
            label="DISTRIBUTED SYSTEMS // CLIENT UI // ML INFERENCE"
          />
        </div>

        {/* Services Widescreen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={service.number} delay={0.06 * idx} className="h-full">
              <SpotlightCard
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                spotlightColor="rgba(245, 158, 11, 0.12)"
                spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                spotlightRadius={450}
                className="h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between transition-all duration-300 group hover:translate-y-[-4px] backdrop-blur-md"
              >
                {/* Viewfinder Reticle Corners */}
                <div className="hud-corner-tl opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-tr opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-700/80 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                        {serviceIcons[idx % serviceIcons.length]}
                      </div>
                      <span className="font-mono font-bold text-xs text-amber-400">
                        SPEC // {service.number}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-syne font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 group-hover:border-amber-500/30 group-hover:text-amber-200 transition-colors"
                      >
                        #{tag}
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
