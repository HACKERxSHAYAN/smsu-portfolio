"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({ children, href, onClick, className = '' }: PrimaryButtonProps) {
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-10 py-4 bg-gradient-to-r from-cyan-400 via-white to-purple-500 text-black font-bold rounded-lg transition-all duration-300 overflow-hidden group ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(0, 243, 255, 0.4), 0 0 40px rgba(0, 243, 255, 0.2)'
      }}
      onClick={onClick}
    >
      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.4), transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 243, 255, 0.4)',
            '0 0 40px rgba(0, 243, 255, 0.6)',
            '0 0 20px rgba(0, 243, 255, 0.4)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400/50" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} aria-label={typeof children === 'string' ? children : 'View more'} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
