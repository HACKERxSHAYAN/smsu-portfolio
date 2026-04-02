"use client";

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-cyber-primary/20 shadow-[0_0_30px_rgba(0,243,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <FaShieldAlt className="text-3xl text-cyber-primary group-hover:text-white transition-colors duration-300" />
              <motion.div
                className="absolute inset-0 bg-cyber-primary/30 rounded-full blur-lg"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              SHAYAN.SEC
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-sm font-mono text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute inset-0 bg-cyber-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="navbar-hover"
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyber-primary group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 243, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex px-6 py-2.5 bg-gradient-to-r from-cyber-primary to-cyber-secondary text-black font-bold rounded-lg text-sm relative overflow-hidden group"
          >
            <span className="relative z-10">GET SECURED</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-cyber-primary/10 rounded-lg transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-cyber-primary to-cyber-secondary text-black font-bold rounded-lg text-center"
            >
              GET SECURED
            </a>
          </nav>
        </motion.div>
      </div>

      {/* Animated Border */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.header>
  );
}
