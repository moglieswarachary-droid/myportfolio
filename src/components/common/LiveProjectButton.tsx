import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { ExternalLink, Layers } from 'lucide-react';

interface LiveProjectButtonProps {
  url?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  url,
  onClick,
  label,
  className = '',
}) => {
  const displayLabel = label || (url ? 'LIVE PROJECT' : 'EXPLORE ARCHITECTURE');
  const isExternal = Boolean(url);

  const buttonContent = (
    <motion.button
      type="button"
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:border-white hover:text-white ${className}`}
    >
      <span>{displayLabel}</span>
      {isExternal ? (
        <ExternalLink className="w-3.5 h-3.5" />
      ) : (
        <Layers className="w-3.5 h-3.5" />
      )}
    </motion.button>
  );

  return (
    <MagneticButton strength={0.3}>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block no-underline"
        >
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </MagneticButton>
  );
};
