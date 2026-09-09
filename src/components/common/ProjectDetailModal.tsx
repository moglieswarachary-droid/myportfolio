import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, GraduationCap, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#121212] border-2 border-[#27272A] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2.5 rounded-full bg-[#1A1A1A] border border-[#27272A] text-[#8B949E] hover:text-white hover:border-[#D7E2EA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8 border-b border-[#27272A] pb-6">
              <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#FB923C] mb-2">
                <span>{project.number}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
              <h2 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 font-kanit">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-[#BBCCD7] font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Content Grid */}
            <div className="space-y-8 text-sm sm:text-base">
              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#181818] p-5 rounded-2xl border border-[#27272A]">
                  <div className="flex items-center gap-2 text-[#FB923C] font-semibold text-sm mb-2 uppercase tracking-wide">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-[#BBCCD7] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-[#181818] p-5 rounded-2xl border border-[#27272A]">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-[#BBCCD7] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Engineering Rationale */}
              <div className="bg-[#181818] p-6 rounded-2xl border border-[#27272A]">
                <div className="flex items-center gap-2 text-[#D7E2EA] font-semibold text-sm mb-3 uppercase tracking-wide">
                  <Wrench className="w-4 h-4 text-[#FB923C]" />
                  <span>Engineering &amp; Architecture</span>
                </div>
                <p className="text-[#BBCCD7] leading-relaxed">
                  {project.engineering}
                </p>

                {project.architecture && (
                  <div className="mt-5 pt-4 border-t border-[#27272A]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#8B949E] mb-3">
                      Data Flow &amp; Topology
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.architecture.map((node, i) => (
                        <React.Fragment key={i}>
                          <span className="px-3 py-1.5 rounded-lg bg-[#222222] border border-[#333] text-xs font-mono font-medium text-white shadow-sm">
                            {node}
                          </span>
                          {i < project.architecture!.length - 1 && (
                            <span className="text-[#FB923C] font-bold text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-2 text-[#D7E2EA] font-semibold text-sm mb-3 uppercase tracking-wide">
                  <Cpu className="w-4 h-4 text-[#FB923C]" />
                  <span>Key Technical Capabilities</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#181818]/60 border border-[#27272A]/80 text-xs sm:text-sm text-[#D7E2EA]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8B949E] mb-3">
                  Verified Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-[#222222] border border-[#333] text-xs font-mono font-medium text-[#D7E2EA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning / Challenges */}
              <div className="bg-[#181818] p-5 rounded-2xl border border-[#27272A]">
                <div className="flex items-center gap-2 text-[#D7E2EA] font-semibold text-sm mb-2 uppercase tracking-wide">
                  <GraduationCap className="w-4 h-4 text-[#FB923C]" />
                  <span>Key Learnings &amp; Growth</span>
                </div>
                <p className="text-[#BBCCD7] leading-relaxed">
                  {project.learning}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#27272A]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#222] border border-[#333] text-white hover:border-[#FB923C] hover:text-[#FB923C] transition-colors text-xs font-semibold uppercase tracking-wider"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F59E0B] text-black font-semibold uppercase tracking-wider text-xs shadow-lg hover:opacity-95 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live App</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
