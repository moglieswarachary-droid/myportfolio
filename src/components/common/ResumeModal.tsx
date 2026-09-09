import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { cinematicSound } from '../../utils/cinematicSound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pdf' | 'document'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#0E1015] border border-amber-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-[#D7E2EA] z-10 flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#22242B] bg-[#14161C]/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl overflow-hidden border border-amber-500/30 flex items-center justify-center bg-black">
                  <img
                    src="/logo.jpg"
                    alt="MOGLIACH Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 id="resume-modal-title" className="text-sm sm:text-base font-bold text-white font-kanit tracking-wide">
                    {PORTFOLIO_DATA.identity.fullName}
                  </h2>
                  <p className="text-[11px] font-mono text-amber-400/90 hidden sm:block">
                    {PORTFOLIO_DATA.identity.headline}
                  </p>
                </div>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* View Switcher */}
                <div className="hidden sm:flex items-center p-1 bg-[#1C1E26] rounded-full border border-[#2B2E38] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab('pdf')}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      activeTab === 'pdf'
                        ? 'bg-amber-400 text-black font-bold'
                        : 'text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    PDF View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('document')}
                    className={`px-3 py-1 rounded-full transition-colors ${
                      activeTab === 'document'
                        ? 'bg-amber-400 text-black font-bold'
                        : 'text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    Structured View
                  </button>
                </div>

                {/* Direct Download Button */}
                <a
                  href={PORTFOLIO_DATA.identity.resumeUrl}
                  download="M-Moglieswar-Resume.pdf"
                  onMouseEnter={() => cinematicSound.playMechanicalClick()}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-semibold hover:from-amber-300 hover:to-amber-400 transition-all shadow-md"
                  title="Download Resume PDF"
                >
                  <FileDown className="w-3.5 h-3.5 text-black" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                {/* Open in new tab */}
                <a
                  href={PORTFOLIO_DATA.identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1C1E26] border border-[#2B2E38] text-[#9CA3AF] hover:text-white transition-colors"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close Dialog */}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#1C1E26] border border-[#2B2E38] text-[#9CA3AF] hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B0C0E]">
              {activeTab === 'pdf' ? (
                <div className="w-full h-full min-h-[600px] flex flex-col">
                  <iframe
                    src={PORTFOLIO_DATA.identity.resumeUrl}
                    title="M Moglieswar Resume PDF"
                    className="w-full flex-1 rounded-2xl bg-white border border-[#22242B]"
                  />
                  <div className="mt-2 text-center text-xs font-mono text-[#8B949E] sm:hidden">
                    <p>
                      PDF preview limited on mobile.{' '}
                      <button
                        type="button"
                        onClick={() => setActiveTab('document')}
                        className="text-amber-400 underline font-bold"
                      >
                        Switch to Structured View
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                /* Structured Document View (exact resume text) */
                <div className="max-w-4xl mx-auto bg-[#13151B] border border-[#27272A] rounded-2xl p-6 sm:p-10 space-y-8 font-sans text-[#E5E7EB] shadow-xl">
                  {/* Header */}
                  <div className="text-center space-y-2 border-b border-[#27272A] pb-6">
                    <h1 className="text-2xl sm:text-3xl font-black text-white font-kanit tracking-wide">
                      M. MOGLIESWAR ACHARI
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-amber-400 font-mono">
                      CSE (AI &amp; ML) | SOFTWARE DEVELOPER | AI/ML &amp; FULL-STACK PROJECT BUILDER
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#9CA3AF] font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        Kuppam, Andhra Pradesh, India
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        +91 7799885487
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-amber-400" />
                        moglieswar999@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="space-y-2">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                      {PORTFOLIO_DATA.about.bio}
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      TECHNICAL SKILLS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {PORTFOLIO_DATA.skills.map((cat, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#1A1C24] border border-[#2A2D38]">
                          <span className="font-bold text-white font-mono">{cat.title}: </span>
                          <span className="text-[#9CA3AF]">{cat.skills.join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selected Projects */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      SELECTED PROJECTS
                    </h2>
                    <div className="space-y-4">
                      {PORTFOLIO_DATA.projects.map((proj) => (
                        <div key={proj.id} className="p-4 rounded-xl bg-[#1A1C24] border border-[#2A2D38] space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-bold text-sm text-white font-kanit">
                              {proj.name} &mdash; <span className="text-amber-400 font-normal">{proj.subtitle}</span>
                            </h3>
                          </div>
                          <p className="text-xs text-[#9CA3AF] leading-relaxed">
                            {proj.description}
                          </p>
                          <div className="text-[11px] font-mono text-amber-300/80 pt-1">
                            <span className="font-bold text-white">Tech: </span>
                            {proj.stack.join(', ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      EXPERIENCE
                    </h2>
                    {PORTFOLIO_DATA.experience.map((exp, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#1A1C24] border border-[#2A2D38] space-y-2">
                        <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                          <span className="font-bold text-white text-sm font-kanit">
                            {exp.role} &mdash; <span className="text-amber-400">{exp.company}</span>
                          </span>
                          <span className="text-[#8B949E]">{exp.duration} | {exp.location}</span>
                        </div>
                        <p className="text-xs text-[#9CA3AF] leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="text-[11px] font-mono text-amber-300/80 pt-1">
                          <span className="font-bold text-white">Tech: </span>
                          {exp.technologies.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      EDUCATION
                    </h2>
                    <div className="space-y-2 text-xs font-mono">
                      {PORTFOLIO_DATA.education.map((edu, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#1A1C24] border border-[#2A2D38] flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="font-bold text-white font-kanit text-sm">{edu.degree}</span>
                            <span className="text-[#9CA3AF]"> &mdash; {edu.institution}</span>
                          </div>
                          <span className="text-amber-400 font-bold">{edu.period} | {edu.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold border-b border-white/[0.08] pb-1">
                      CERTIFICATIONS &amp; PROFESSIONAL DEVELOPMENT
                    </h2>
                    <div className="space-y-1.5 text-xs text-[#9CA3AF]">
                      {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-amber-400">&bull;</span>
                          <span className="font-semibold text-white">{cert.title}</span>
                          <span>&mdash;</span>
                          <span className="font-mono text-[#8B949E]">{cert.issuer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional */}
                  <div className="space-y-3 border-t border-[#27272A] pt-4">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      ADDITIONAL
                    </h2>
                    <div className="text-xs font-mono space-y-1">
                      <p>
                        <span className="text-white font-bold">Languages: </span>
                        <span className="text-[#9CA3AF]">{PORTFOLIO_DATA.profileDetails.languages.join(', ')}</span>
                      </p>
                      <p>
                        <span className="text-white font-bold">Strengths: </span>
                        <span className="text-[#9CA3AF]">{PORTFOLIO_DATA.profileDetails.strengths.join(', ')}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
