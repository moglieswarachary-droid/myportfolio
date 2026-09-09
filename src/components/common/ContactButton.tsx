import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from './Magnet';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href = '#contact',
  children = 'CONTACT ME',
  className = '',
  icon = true,
}) => {
  const content = (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-[#0C0C0C] bg-gradient-to-r from-[#FB923C] via-[#F59E0B] to-[#D97706] shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] border border-amber-300/40 transition-all duration-300 ${className}`}
    >
      <span className="relative z-10 font-bold">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      )}
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );

  return (
    <Magnet padding={80} strength={2.5}>
      {href && !onClick ? (
        <a href={href} className="inline-block no-underline">
          {content}
        </a>
      ) : (
        content
      )}
    </Magnet>
  );
};
