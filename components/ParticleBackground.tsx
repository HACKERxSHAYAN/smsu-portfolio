"use client";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-cyber-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black opacity-80 z-10 pointer-events-none" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-10 pointer-events-none" />
      
      {/* CSS Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-secondary/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-accent/5 rounded-full blur-[120px]" />
        
        {/* Additional animated dots */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyber-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyber-secondary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyber-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyber-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-cyber-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-cyber-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
      </div>
    </div>
  );
}
