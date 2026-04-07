"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import SecurityMethodology from '@/components/SecurityMethodology';
import Contact from '@/components/Contact';

// Dynamic import for ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[-1] bg-cyber-black" />
});

export default function ClientComponent() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050505]">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Glassmorphism Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Security Methodology Section */}
        <SecurityMethodology />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel py-6 mx-4 rounded-xl"
          >
            <p className="text-gray-400 text-sm font-mono">
              <span className="text-cyber-primary">{'//'}</span> SYSTEM STATUS: OPERATIONAL
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © 2024 Syed Muhammad Shayan Uddin. All systems secure.
            </p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
