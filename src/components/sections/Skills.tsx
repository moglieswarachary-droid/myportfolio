import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FadeIn } from '../common/FadeIn';
import { SpotlightCard } from '../common/SpotlightCard';
import { BinarySeparator } from '../common/BinarySeparator';
import { Code2, Cpu, Smartphone, Database, ShieldCheck, Terminal, Search, X } from 'lucide-react';
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
      className="section-visibility-auto relative bg-transparent text-[#D7E2EA] py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
              <span>✦</span>
              <span>TECHNICAL REPERTOIRE</span>
              <span className="text-zinc-600">//</span>
              <span className="text-zinc-400">CORE COMPETENCIES &amp; RUNTIMES</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <FadeIn delay={0.1}>
              <h2 className="font-syne font-extrabold uppercase tracking-widest text-4xl sm:text-6xl md:text-7xl text-white select-none">
                S T A C K
              </h2>
            </FadeIn>

            {/* Instant Search Bar */}
            <FadeIn delay={0.15} className="w-full lg:w-80">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter skill or tool..."
                  className="w-full pl-10 pr-9 py-2 rounded bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="mt-3 text-sm text-zinc-400 max-w-2xl font-mono">
              // Industry standard tools, programming languages, and frameworks applied across production repositories.
            </p>
          </FadeIn>
        </div>

        {/* Binary Separator */}
        <div className="mb-8">
          <BinarySeparator
            tag="TECH_TAXONOMY"
            label="DOMAINS // FRONTEND • BACKEND • AI/ML • CLOUD"
          />
        </div>

        {/* Filter Pills */}
        <FadeIn delay={0.25} className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                cinematicSound.playMechanicalClick();
                setActiveCategory('ALL');
              }}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'ALL'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/40'
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
                className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat.title
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {searchQuery && (
            <div className="mt-3 text-xs font-mono text-zinc-400">
              Found <span className="text-amber-400 font-bold">{totalMatches}</span> matching skill{totalMatches === 1 ? '' : 's'}
            </div>
          )}
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <FadeIn
              key={category.title}
              delay={0.06 * catIdx}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.12)"
                spotlightBorderColor="rgba(245, 158, 11, 0.45)"
                spotlightRadius={360}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="h-full p-6 rounded-2xl bg-zinc-950/90 border border-white/10 transition-all duration-300 shadow-xl flex flex-col justify-between group relative backdrop-blur-md"
              >
                {/* Viewfinder Reticle Corners */}
                <div className="hud-corner-tl opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-tr opacity-30 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-700/80 flex items-center justify-center">
                        {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-amber-400" />}
                      </div>
                      <h3 className="font-syne font-bold text-base text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      ({category.skills.length})
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
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 cursor-default ${
                            isHighlighted
                              ? 'bg-amber-400 text-black font-bold shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                              : 'bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 hover:!border-amber-400 hover:!text-amber-300'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>PRODUCTION TESTED</span>
                  <span className="text-emerald-400">● READY</span>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
