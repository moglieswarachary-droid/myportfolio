import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { Code2, Cpu, Smartphone, Database, ShieldCheck, Terminal, Search, X, Sparkles } from 'lucide-react';
import { cinematicSound } from '../../utils/cinematicSound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = PORTFOLIO_DATA.skills;

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code2 className="w-4 h-4 text-amber-400" />,
    Programming: <Code2 className="w-4 h-4 text-amber-400" />,
    'AI / Machine Learning': <Cpu className="w-4 h-4 text-cyan-400" />,
    'Frontend / Mobile': <Smartphone className="w-4 h-4 text-emerald-400" />,
    'Backend / Data': <Database className="w-4 h-4 text-purple-400" />,
    'Security / Architecture': <ShieldCheck className="w-4 h-4 text-amber-400" />,
    'Tools / Deployment': <Terminal className="w-4 h-4 text-cyan-400" />,
  };

  const filteredCategories = useMemo(() => {
    return categories
      .filter((c) => activeCategory === 'ALL' || c.title === activeCategory)
      .map((c) => {
        if (!searchQuery.trim()) return c;
        const filteredSkills = c.skills.filter((s) =>
          s.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
        return {
          ...c,
          skills: filteredSkills,
        };
      })
      .filter((c) => c.skills.length > 0);
  }, [categories, activeCategory, searchQuery]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, curr) => acc + curr.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section
      id="skills"
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-5 sm:px-8 md:px-10 border-t border-[#1C1C1F] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#FB923C] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Tech Stack</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.2}>
              <h2 className="font-kanit font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-white select-none">
                TECHNICAL SKILLS
              </h2>
            </FadeIn>

            {/* Instant Search Bar for High Usability */}
            <FadeIn delay={0.3} className="w-full lg:w-80">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B949E]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Instant skill filter..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#151518] border border-[#27272A] text-xs font-mono text-white placeholder:text-[#555] focus:outline-none focus:border-[#FB923C] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B949E] hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-[#8B949E] max-w-2xl font-normal">
              Tools and technologies I use to build practical digital products.
            </p>
          </FadeIn>
        </div>

        {/* Filter Pills */}
        <FadeIn delay={0.35} className="mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                cinematicSound.playMechanicalClick();
                setActiveCategory('ALL');
              }}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'ALL'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-[#151518] border border-[#27272A] text-[#8B949E] hover:text-white hover:border-amber-500/40'
              }`}
            >
              ALL DOMAINS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => {
                  cinematicSound.playMechanicalClick();
                  setActiveCategory(cat.title);
                }}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.title
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    : 'bg-[#151518] border border-[#27272A] text-[#8B949E] hover:text-white hover:border-amber-500/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {searchQuery && (
            <div className="mt-3 text-xs font-mono text-[#8B949E]">
              Found <span className="text-amber-400 font-bold">{totalMatches}</span> matching skill{totalMatches === 1 ? '' : 's'}
            </div>
          )}
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <FadeIn
              key={category.title}
              delay={0.08 * catIdx}
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
                  <div className="flex items-center justify-between border-b border-[#222] pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1D1D20] border border-[#2D2D32] flex items-center justify-center">
                        {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-amber-400" />}
                      </div>
                      <h3 className="font-kanit font-bold text-lg text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-telemetry text-amber-400 font-bold">
                      0{category.skills.length}
                    </span>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const isHighlighted = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={sIdx}
                          onMouseEnter={() => cinematicSound.playMechanicalClick()}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default ${
                            isHighlighted
                              ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                              : 'bg-[#181A22] border border-[#2A2A30] text-[#D7E2EA] group-hover:border-[#383842] hover:!border-amber-500/50 hover:!text-amber-300'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Micro Bar */}
                <div className="mt-6 pt-4 border-t border-[#222] flex items-center justify-between text-[11px] font-mono text-[#646973]">
                  <span>PRACTICAL &bull; PRODUCTION READY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
