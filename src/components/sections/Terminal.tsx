import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TerminalOutput {
  id: string;
  command: string;
  result: React.ReactNode;
}

interface TerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({
  isOpen = true,
  onClose,
  isModal = false,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      id: 'init-0',
      command: 'welcome',
      result: (
        <div className="space-y-1 text-xs sm:text-sm font-mono text-[#BBCCD7]">
          <p className="text-[#FB923C] font-bold">
            Moglieswar Portfolio CLI [Version 2.5.0-release]
          </p>
          <p className="text-[#8B949E]">
            Type <span className="text-white font-bold">'help'</span> or click the suggested commands below to inspect portfolio records.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (isModal && !isOpen) {
    return null;
  }

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    if (raw === 'clear' || raw === 'cls') {
      setHistory([]);
      setInput('');
      return;
    }

    let resultNode: React.ReactNode = null;

    switch (raw) {
      case 'help':
        resultNode = (
          <div className="text-xs font-mono space-y-1.5 py-1">
            <p className="text-[#FB923C] font-semibold">AVAILABLE SYSTEM COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[#D7E2EA]">
              <p><span className="text-amber-400 font-bold">about</span> - Identity and bio</p>
              <p><span className="text-amber-400 font-bold">projects</span> - 01 CampusNet, 02 RideToTrack, 03 PayTrack</p>
              <p><span className="text-amber-400 font-bold">skills</span> - Verified programming &amp; AI/ML stack</p>
              <p><span className="text-amber-400 font-bold">experience</span> - VaultSphere AI internship</p>
              <p><span className="text-amber-400 font-bold">education</span> - B.Tech CSE (AI &amp; ML)</p>
              <p><span className="text-amber-400 font-bold">certifications</span> - Verified industry certifications</p>
              <p><span className="text-amber-400 font-bold">github</span> - Direct repository &amp; code links</p>
              <p><span className="text-amber-400 font-bold">linkedin</span> - Professional profile URL</p>
              <p><span className="text-amber-400 font-bold">resume</span> - Download official resume PDF</p>
              <p><span className="text-amber-400 font-bold">clear</span> - Clear terminal buffer</p>
            </div>
          </div>
        );
        break;

      case 'about':
        resultNode = (
          <div className="text-xs font-mono space-y-2 py-1 text-[#BBCCD7]">
            <p className="text-white font-bold">{PORTFOLIO_DATA.identity.name}</p>
            <p className="text-[#FB923C]">{PORTFOLIO_DATA.identity.role}</p>
            <p className="text-[#8B949E]">{PORTFOLIO_DATA.about.bio}</p>
            <p className="text-emerald-400">Education: {PORTFOLIO_DATA.about.profile.education}</p>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="text-xs font-mono space-y-3 py-1">
            <p className="text-[#FB923C] font-bold">FLAGSHIP PROJECTS:</p>
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="p-2.5 rounded bg-[#1C1C22] border border-[#2D2D35]">
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span>{p.number} // {p.name.toUpperCase()}</span>
                  <span className="text-[10px] text-[#FB923C]">{p.category}</span>
                </div>
                <p className="text-[#BBCCD7] text-[11px] mb-1.5">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1 text-[9px] text-[#8B949E]">
                  {p.stack.slice(0, 6).map((s, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-black/40 rounded border border-[#333]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="text-xs font-mono space-y-2 py-1">
            <p className="text-[#FB923C] font-bold">CORE COMPETENCIES:</p>
            {PORTFOLIO_DATA.skills.map((c) => (
              <p key={c.title} className="text-[#BBCCD7]">
                <span className="text-white font-semibold">{c.title}:</span>{' '}
                {c.skills.join(', ')}
              </p>
            ))}
          </div>
        );
        break;

      case 'experience':
        resultNode = (
          <div className="text-xs font-mono space-y-2 py-1 text-[#BBCCD7]">
            {PORTFOLIO_DATA.experience.map((e, idx) => (
              <div key={idx} className="p-2 rounded bg-[#1C1C22] border border-[#2D2D35]">
                <p className="font-bold text-white">
                  {e.role} @ {e.company} ({e.duration})
                </p>
                <p className="text-[11px] text-[#8B949E] mt-1">{e.description}</p>
                <p className="text-[11px] text-amber-400 mt-1">Project: {e.projectTitle}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        resultNode = (
          <div className="text-xs font-mono space-y-2 py-1 text-[#BBCCD7]">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <p key={idx}>
                <span className="text-white font-bold">{edu.degree}</span> ({edu.period})
                <br />
                <span className="text-[#8B949E]">{edu.institution} — {edu.score || 'Pursuing'}</span>
              </p>
            ))}
          </div>
        );
        break;

      case 'certifications':
        resultNode = (
          <div className="text-xs font-mono space-y-1 py-1 text-[#BBCCD7]">
            <p className="text-[#FB923C] font-bold">COMPLETED CERTIFICATIONS:</p>
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <p key={idx}>
                &bull; <span className="text-white">{cert.title}</span> — {cert.issuer}
              </p>
            ))}
          </div>
        );
        break;

      case 'github':
        resultNode = (
          <div className="text-xs font-mono space-y-1 py-1 text-[#BBCCD7]">
            <p className="text-white font-bold">GitHub Repository Space:</p>
            <a
              href={PORTFOLIO_DATA.identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FB923C] hover:underline"
            >
              {PORTFOLIO_DATA.identity.github}
            </a>
          </div>
        );
        break;

      case 'linkedin':
        resultNode = (
          <div className="text-xs font-mono space-y-1 py-1 text-[#BBCCD7]">
            <p className="text-white font-bold">LinkedIn Profile:</p>
            <a
              href={PORTFOLIO_DATA.identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FB923C] hover:underline"
            >
              {PORTFOLIO_DATA.identity.linkedin}
            </a>
          </div>
        );
        break;

      case 'resume':
        resultNode = (
          <div className="text-xs font-mono space-y-1 py-1 text-[#BBCCD7]">
            <p className="text-white font-bold">Download Official Resume:</p>
            <a
              href={PORTFOLIO_DATA.identity.resumeUrl}
              download="M-Moglieswar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FB923C] hover:underline"
            >
              {PORTFOLIO_DATA.identity.resumeUrl}
            </a>
          </div>
        );
        break;

      case 'contact':
        try {
          confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
        } catch {
          // ignore
        }
        resultNode = (
          <div className="text-xs font-mono space-y-1 py-1 text-[#BBCCD7]">
            <p className="text-[#FB923C] font-bold">PROFESSIONAL CONNECT ENDPOINTS:</p>
            <p>LinkedIn: <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">{PORTFOLIO_DATA.identity.linkedin}</a></p>
            <p>GitHub: <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">{PORTFOLIO_DATA.identity.github}</a></p>
            <p>Resume: <a href={PORTFOLIO_DATA.identity.resumeUrl} download="M-Moglieswar-Resume.pdf" className="text-white hover:underline">Download PDF</a></p>
          </div>
        );
        break;

      default:
        resultNode = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: <span className="font-bold">{raw}</span>. Type <span className="text-white underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for list of commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: raw,
        result: resultNode,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  };

  const terminalBody = (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#0F0F12] border border-[#27272A] shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col h-[520px]">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#151518] border-b border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
          </div>
          <span className="ml-2 text-xs font-mono text-[#8B949E] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#FB923C]" />
            <span>moglieswar@portfolio:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setHistory([])}
            className="p-1.5 rounded hover:bg-[#222226] text-[#8B949E] hover:text-[#D7E2EA] transition-colors"
            title="Clear buffer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          {isModal && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#222226] text-[#8B949E] hover:text-white transition-colors"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Suggested Quick Commands */}
      <div className="px-4 py-2 bg-[#121215] border-b border-[#222226] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
        <span className="text-[#646973] uppercase text-[10px]">Suggestions:</span>
        {['projects', 'skills', 'experience', 'education', 'certifications', 'github', 'linkedin'].map(
          (cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#1A1A1E] text-[#BBCCD7] hover:text-white hover:bg-[#282830] transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          )
        )}
      </div>

      {/* Terminal Output Log Area */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 font-mono text-xs sm:text-sm leading-relaxed">
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="text-[#FB923C]">&gt;</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.result}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt Row */}
      <div className="px-4 sm:px-6 py-3 bg-[#151518] border-t border-[#27272A] flex items-center gap-2 font-mono text-xs sm:text-sm">
        <span className="text-[#FB923C] font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command (e.g. 'projects', 'skills', 'help')..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-[#555] font-mono"
        />
        <button
          type="button"
          onClick={() => handleCommand(input)}
          className="p-1.5 rounded text-[#8B949E] hover:text-[#FB923C] transition-colors"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="w-full max-w-4xl relative animate-in fade-in zoom-in-95 duration-200">
          {terminalBody}
        </div>
      </div>
    );
  }

  return (
    <section id="terminal" className="relative bg-transparent text-[#D7E2EA] py-16 px-4 sm:px-6 md:px-10 border-t border-[#1C1C1F]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FB923C]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      {terminalBody}
    </section>
  );
};
