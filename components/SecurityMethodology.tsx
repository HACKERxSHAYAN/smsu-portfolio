"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import { FaShieldAlt, FaSearch, FaLock, FaBug, FaNetworkWired, FaUserShield } from 'react-icons/fa';

const methodologies = [
  {
    icon: FaSearch,
    title: "Reconnaissance & Intelligence",
    description: "Comprehensive information gathering and threat landscape analysis to identify potential attack vectors and vulnerabilities before they can be exploited.",
    color: "#00f3ff",
    glowColor: "rgba(0, 243, 255, 0.3)",
  },
  {
    icon: FaBug,
    title: "Vulnerability Assessment",
    description: "Systematic evaluation of security weaknesses using advanced scanning tools and manual testing techniques to prioritize remediation efforts.",
    color: "#bd00ff",
    glowColor: "rgba(189, 0, 255, 0.3)",
  },
  {
    icon: FaNetworkWired,
    title: "Penetration Testing",
    description: "Controlled exploitation of identified vulnerabilities to validate security controls and assess potential impact on critical systems.",
    color: "#ff0055",
    glowColor: "rgba(255, 0, 85, 0.3)",
  },
  {
    icon: FaLock,
    title: "Security Hardening",
    description: "Implementation of defense-in-depth strategies and configuration优化 to strengthen system resilience against sophisticated attacks.",
    color: "#00ff88",
    glowColor: "rgba(0, 255, 136, 0.3)",
  },
  {
    icon: FaUserShield,
    title: "Incident Response",
    description: "Rapid detection, containment, and recovery procedures to minimize damage and restore normal operations during security incidents.",
    color: "#ffaa00",
    glowColor: "rgba(255, 170, 0, 0.3)",
  },
  {
    icon: FaShieldAlt,
    title: "Continuous Monitoring",
    description: "24/7 surveillance and threat intelligence integration to detect anomalies and respond to emerging threats in real-time.",
    color: "#00f3ff",
    glowColor: "rgba(0, 243, 255, 0.3)",
  },
];

export default function SecurityMethodology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methodology" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-primary/5 rounded-full blur-[200px] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-[150px] -z-10" />
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionTitle 
          title="// SECURITY METHODOLOGY" 
          subtitle="Our Proven Approach to Digital Defense" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${method.glowColor}, transparent, ${method.glowColor})`
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              {/* Card Content */}
              <div className="relative glass-panel p-8 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-500 h-full">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `linear-gradient(135deg, ${method.color}20, transparent, ${method.color}20)`,
                    border: `1px solid ${method.color}40`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative"
                  style={{ 
                    backgroundColor: `${method.color}15`,
                    border: `1px solid ${method.color}30`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <method.icon 
                    className="text-3xl transition-all duration-300" 
                    style={{ color: method.color }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      boxShadow: [
                        `0 0 20px ${method.color}00`,
                        `0 0 30px ${method.color}40`,
                        `0 0 20px ${method.color}00`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: method.color }}
                >
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {method.description}
                </p>

                {/* Corner Decorations */}
                <div 
                  className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 opacity-20 group-hover:opacity-60 transition-opacity"
                  style={{ borderColor: method.color }}
                />
                <div 
                  className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 opacity-20 group-hover:opacity-60 transition-opacity"
                  style={{ borderColor: method.color }}
                />

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${method.color}10, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 font-mono">
            Ready to secure your digital assets?
          </p>
          <motion.a
            href="#contact"
            aria-label="Start Your Security Audit"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 243, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary text-black font-bold rounded-xl relative overflow-hidden group"
          >
            <span className="relative z-10">START YOUR SECURITY AUDIT</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
