"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

export default function Hero() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks: { icon?: IconType; isImage?: boolean; color?: string; href: string; label: string }[] = [
    { icon: FaGithub, color: 'hover:text-white', href: 'https://github.com', label: 'GitHub Profile' },
    { icon: FaLinkedin, color: 'hover:text-[#0077b5]', href: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { isImage: true, href: '#', label: 'Security Expertise' }
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-between items-center relative overflow-hidden px-4 pt-32 pb-8 bg-[#050505]">
      {/* Glowing Orb Effects - GPU accelerated, static on mobile */}
      <motion.div 
        style={{ y }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 rounded-full -z-10 ${isMobile ? 'w-[200px] h-[200px] blur-[40px]' : 'w-[600px] h-[600px] blur-[150px]'}`}
        animate={isMobile ? {
          opacity: [0.3, 0.4, 0.3],
        } : {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: isMobile ? 3 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        layout={false}
      />
      
      <motion.div 
        className={`absolute top-1/3 right-1/4 bg-purple-500/10 rounded-full -z-10 ${isMobile ? 'w-[150px] h-[150px] blur-[40px]' : 'w-[400px] h-[400px] blur-[120px]'}`}
        animate={isMobile ? {
          opacity: [0.2, 0.3, 0.2],
        } : {
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: isMobile ? 3 : 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        layout={false}
      />

      {/* Top: Status Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-2 mt-4 border border-cyan-400/50 rounded-full bg-cyan-400/5 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 spacing">
          <motion.span 
            className="w-2 h-2 rounded-full bg-cyan-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-cyan-400 font-mono text-sm tracking-wider">SYSTEM ONLINE // SECURE</span>
        </div>
      </motion.div>

      {/* Center: Main Content */}
      <motion.div 
        style={{ opacity }}
        className="text-center z-10 max-w-4xl will-change-opacity"
      >
        {/* Main Title with Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          layout="position"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Syed Muhammad</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
            Shayan Uddin
          </span>
        </motion.h1>

        {/* Gradient Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          layout="position"
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-cyan-400">
              Digital Integrity.
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite] [animation-delay:0.5s]">
              Absolute Security.
            </span>
          </h2>
        </motion.div>

        {/* Typing Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 font-mono h-10"
        >
          <TypeAnimation
            sequence={[
              'Ethical Hacker',
              1500,
              'Developer',
              1500,
              'Tech Enthusiast',
              1500,
              'Cybersecurity Expert',
              1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap gap-6 justify-center mb-8"
        >
          {/* View Operations - Primary Button */}
          <PrimaryButton href="#projects" aria-label="View Projects">
            VIEW OPERATIONS
          </PrimaryButton>

          {/* Initialize Contact - Secondary */}
          <motion.a 
            href="#contact"
            aria-label="Initialize Contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">INITIALIZE CONTACT</span>
            <motion.div
              className="absolute inset-0 bg-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom: Social Icons + Scroll Indicator */}
      <div className="flex flex-col items-center gap-6 pb-8 z-20">
        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center gap-8"
        >
          {socialLinks.map((item, index) => (
            item.isImage ? (
              <motion.a
                key={index}
                href={item.href}
                aria-label={item.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Image 
                  src="/Cyber-Sheild-cyan-purple.png" 
                  alt="Cyber Shield Logo" 
                  width={32} 
                  height={32}
                  priority={true}
                  className="object-contain"
                />
              </motion.a>
            ) : (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl text-gray-400 ${item.color} transition-all duration-300 relative`}
              >
                {item.icon && <item.icon />}
                <motion.div
                  className="absolute -inset-2 bg-currentColor opacity-0 rounded-full blur-lg"
                  whileHover={{ opacity: 0.3 }}
                />
              </motion.a>
            )
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-cyan-400/50 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            role="button"
            aria-label="Scroll down to content"
          >
            <FaChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-400/30 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30 rounded-br-lg pointer-events-none" />
    </section>
  );
}