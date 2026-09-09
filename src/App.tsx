import React, { useState, useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Timeline } from './components/sections/Timeline';
import { Certifications } from './components/sections/Certifications';
import { Terminal } from './components/sections/Terminal';
import { Footer } from './components/sections/Footer';
import { FloatingQuickDock } from './components/common/FloatingQuickDock';
import { AmberNeuralGrid } from './components/common/AmberNeuralGrid';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { TechCursor } from './components/common/TechCursor';
import { ResumeModal } from './components/common/ResumeModal';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.title = 'M. MOGLIESWAR ACHARI | Software Developer | AI/ML & Full-Stack';
  }, []);

  return (
    <div className="min-h-screen bg-[#07080B] text-[#D7E2EA] font-kanit selection:bg-amber-400 selection:text-black overflow-x-clip relative">
      {/* Precision Glowing Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Cybernetic Precision Tech Cursor (Desktop/Mouse Only) */}
      <TechCursor />

      {/* Premium Cinematic Amber Neural & Anamorphic Atmosphere */}
      <AmberNeuralGrid grainLevel={1} />

      {/* 1. Hero Section (Dominant Senior Software Engineer Architecture) */}
      <Hero
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* 2. Engineering Disciplines & Services */}
      <Services />

      {/* 3. Featured Projects (Flagship Case Studies) */}
      <Projects />

      {/* 4. Skills (Core Tech Matrix & Telemetry) */}
      <Skills />

      {/* 5. Experience & Education Timeline */}
      <Timeline />

      {/* 6. Certifications & Profile Credentials */}
      <Certifications />

      {/* 7. Footer with Connect CTA */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive CLI Terminal Modal (Triggered on Demand) */}
      <Terminal
        isModal={true}
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Interactive Official Resume Modal (PDF & Structured View) */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Quick Action Dock */}
      <FloatingQuickDock
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />
    </div>
  );
};

export default App;
