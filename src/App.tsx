import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Timeline } from './components/sections/Timeline';
import { Certifications } from './components/sections/Certifications';
import { Footer } from './components/sections/Footer';
import { FloatingQuickDock } from './components/common/FloatingQuickDock';
import { AmberNeuralGrid } from './components/common/AmberNeuralGrid';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { TechCursor } from './components/common/TechCursor';
import { SiteFrame } from './components/common/SiteFrame';
import { AWaves } from './components/common/AWaves';

// Lazy-loaded on demand to ensure instant initial viewport rendering across all devices
const Terminal = lazy(() =>
  import('./components/sections/Terminal').then((m) => ({ default: m.Terminal }))
);
const ResumeModal = lazy(() =>
  import('./components/common/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.title = 'MOGLIESWAR — Creative Developer & AI Systems Architect';
  }, []);

  return (
    <div className="min-h-screen bg-[#07080B] text-[#D7E2EA] font-sans selection:bg-amber-400 selection:text-black overflow-x-clip relative">
      {/* Precision Glowing Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Cybernetic Precision Tech Cursor (Desktop/Mouse Only) */}
      <TechCursor />

      {/* Architectural Perimeter Frame & Live Telemetry Console */}
      <SiteFrame
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Parametric Undulating Wave Canvas (inspired by wodniack.dev <a-waves>) */}
      <AWaves linesCount={7} speedMultiplier={1} />

      {/* Cinematic Amber Neural Atmospheric Grid */}
      <AmberNeuralGrid grainLevel={1} />

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* 1. Hero Section (Wodniack Editorial Brutalism & Monumental Typography) */}
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 2. Engineering Disciplines */}
        <Services />

        {/* 3. W O R K // Selected Case Studies */}
        <Projects />

        {/* 4. S T A C K // Core Tech Matrix & Telemetry */}
        <Skills />

        {/* 5. E X P E R I E N C E & A C A D E M I C S */}
        <Timeline />

        {/* 6. C E R T S // Verified Qualifications */}
        <Certifications />

        {/* 7. Footer & Contact Endpoints */}
        <Footer onOpenResume={() => setResumeOpen(true)} />
      </div>

      {/* Interactive CLI Terminal Modal (Lazy loaded when opened) */}
      {terminalOpen && (
        <Suspense fallback={null}>
          <Terminal
            isModal={true}
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
        </Suspense>
      )}

      {/* Interactive Official Resume Modal (Lazy loaded when opened) */}
      {resumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </Suspense>
      )}

      {/* Floating Quick Action Dock */}
      <FloatingQuickDock
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />
    </div>
  );
};

export default App;
