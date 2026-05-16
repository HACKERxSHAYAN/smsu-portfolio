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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505]">
      {/* Particle Background */}
      <ParticleBackground aria-hidden="true" />

      {/* Glassmorphism Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="SHAYAN.DEVSEC Portfolio Main Content">
        {/* Hero Section */}
        <section aria-label="Hero" id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>

        {/* About Section */}
        <section aria-label="About" id="about" aria-labelledby="about-heading">
          <About />
        </section>

        {/* Security Methodology Section */}
        <section aria-label="Security Methodology" id="methodology" aria-labelledby="methodology-heading">
          <SecurityMethodology />
        </section>

        {/* Skills Section */}
        <section aria-label="Skills" id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>

        {/* Projects Section */}
        <section aria-label="Security Projects & Certifications" id="projects" aria-labelledby="projects-heading">
          <Projects />
        </section>

        {/* Contact Section */}
        <section aria-label="Contact SHAYAN.DEVSEC" id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800/50" role="contentinfo" aria-label="Site footer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel py-6 mx-4 rounded-xl"
          >
            <p className="sr-only">
              SHAYAN.DEVSEC — AI Developer, Full-Stack Developer, Cyber Security Analyst & Penetration Tester. Copyright and system status for Syed Muhammad Shayan Uddin portfolio.
            </p>
            <p className="text-gray-400 text-sm font-mono" role="status">
              <span className="text-cyber-primary">{'//'}</span> SYSTEM STATUS: OPERATIONAL
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © {new Date().getFullYear()} Syed Muhammad Shayan Uddin. All systems secure.
            </p>
          </motion.div>
        </footer>
      </main>

      {/* Skip link for keyboard navigation */}
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-cyber-primary focus:text-black focus:px-4 focus:py-2 focus:rounded font-bold">
        Skip to main content
      </a>
    </div>
  );
}
