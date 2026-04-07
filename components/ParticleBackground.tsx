"use client";

import { useMemo } from "react";

export default function ParticleBackground() {
  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    color: i % 3 === 0 ? 'bg-cyber-primary' : i % 3 === 1 ? 'bg-cyber-secondary' : 'bg-cyber-accent',
    delay: Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.3
  })), []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80 z-10 pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-30 z-10 pointer-events-none" style={{ willChange: 'opacity' }} />
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${p.color}`}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              willChange: 'opacity'
            }}
          />
        ))}
      </div>
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px]" />
      </div>
    </div>
  );
}
