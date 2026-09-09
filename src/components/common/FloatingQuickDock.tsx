import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Terminal, ArrowUp, FileDown } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { MagneticButton } from './MagneticButton';
import { cinematicSound } from '../../utils/cinematicSound';

interface FloatingQuickDockProps {
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
}

export const FloatingQuickDock: React.FC<FloatingQuickDockProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    cinematicSound.playMechanicalClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#151518]/90 backdrop-blur-xl border border-[#27272A] shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
        >
          {/* Quick Resume Link */}
          <MagneticButton strength={0.25}>
            <button
              type="button"
              onClick={onOpenResume}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#202025] hover:bg-[#282830] text-xs font-mono text-[#D7E2EA] hover:text-amber-400 transition-all border border-[#33333C] hover:border-amber-500/50 cursor-pointer"
              title="View & Download Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-[11px]">RESUME</span>
            </button>
          </MagneticButton>

          {/* Quick LinkedIn Link */}
          <MagneticButton strength={0.3}>
            <a
              href={PORTFOLIO_DATA.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="p-2 block rounded-full bg-[#202025] hover:bg-[#282830] text-[#8B949E] hover:text-[#0A66C2] transition-colors border border-[#33333C]"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>

          {/* Quick Terminal Trigger */}
          {onOpenTerminal && (
            <MagneticButton strength={0.3}>
              <button
                type="button"
                onClick={() => {
                  cinematicSound.playDronePulse();
                  onOpenTerminal();
                }}
                onMouseEnter={() => cinematicSound.playMechanicalClick()}
                className="p-2 block rounded-full bg-[#202025] hover:bg-[#282830] text-[#8B949E] hover:text-amber-400 transition-colors border border-[#33333C]"
                title="Open CLI Terminal"
              >
                <Terminal className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          )}

          {/* Back to top */}
          <MagneticButton strength={0.3}>
            <button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => cinematicSound.playMechanicalClick()}
              className="p-2 block rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:opacity-90 transition-opacity shadow-sm"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
