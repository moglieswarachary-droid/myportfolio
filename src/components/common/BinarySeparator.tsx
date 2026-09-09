import React, { useState, useEffect } from 'react';

interface BinarySeparatorProps {
  label?: string;
  tag?: string;
  className?: string;
  amberAccent?: boolean;
}

export const BinarySeparator: React.FC<BinarySeparatorProps> = ({
  label,
  tag,
  className = '',
  amberAccent = false,
}) => {
  // 64-character binary stream
  const [binaryStream, setBinaryStream] = useState<string[]>(() =>
    Array.from({ length: 48 }, () => (Math.random() > 0.5 ? '1' : '0'))
  );
  const [activeGlitchIndex, setActiveGlitchIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 2-3 random indices to flip and illuminate
      const targetIndex = Math.floor(Math.random() * 48);
      setActiveGlitchIndex(targetIndex);

      setBinaryStream((prev) => {
        const next = [...prev];
        next[targetIndex] = next[targetIndex] === '1' ? '0' : '1';
        return next;
      });

      setTimeout(() => {
        setActiveGlitchIndex(null);
      }, 350);
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`a-separator-container group ${className}`}
      role="separator"
      aria-hidden="true"
    >
      {/* Left Hazard Stripes */}
      <div
        className={`a-separator-stripes ${
          amberAccent ? 'a-separator-stripes-amber' : ''
        }`}
      />

      {/* Left Triangle Indicator */}
      <div className="mx-2 flex items-center text-amber-500/80 text-[10px] select-none">
        ▶
      </div>

      {/* Optional Custom Tag */}
      {tag && (
        <div className="mr-3 shrink-0 font-mono text-[10px] font-semibold tracking-widest text-amber-400/90 uppercase">
          [{tag}]
        </div>
      )}

      {/* Running Binary Code Stream */}
      <div className="a-separator-code">
        <span className="hidden sm:inline opacity-40 font-mono text-[10px] mr-2 text-zinc-500">
          HEX //
        </span>
        {binaryStream.map((bit, idx) => (
          <span
            key={idx}
            className={`transition-colors duration-150 inline-block px-[1px] ${
              idx === activeGlitchIndex
                ? 'a-separator-char-active font-bold scale-110'
                : 'text-zinc-500/60'
            }`}
          >
            {bit}
          </span>
        ))}
      </div>

      {/* Optional Right Label */}
      {label && (
        <div className="ml-3 shrink-0 font-mono text-[10px] tracking-widest text-zinc-400 uppercase hidden md:block">
          {label}
        </div>
      )}

      {/* Right Triangle Indicator */}
      <div className="mx-2 flex items-center text-amber-500/80 text-[10px] select-none">
        ◀
      </div>

      {/* Right Hazard Stripes */}
      <div
        className={`a-separator-stripes ${
          amberAccent ? 'a-separator-stripes-amber' : ''
        }`}
      />
    </div>
  );
};
