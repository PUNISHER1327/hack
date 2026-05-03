import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 backdrop-blur-xl border-b border-white/10' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-orbitron font-black tracking-tighter flex items-center gap-2">
            <span className="text-orangeAccent">HACK</span>
            <span className="text-neonBlue">SPRINT</span>
            <span className="text-whiteText ml-1">6.0</span>
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-orbitron text-sm font-medium tracking-widest text-mutedText hover:text-electricBlue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electricBlue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white/60">
            <a href="#" className="hover:text-neonBlue transition-colors text-xl"><FaDiscord /></a>
            <a href="#" className="hover:text-neonBlue transition-colors text-xl"><FaLinkedin /></a>
          </div>
          <button className="px-6 py-2 bg-transparent border border-neonBlue text-neonBlue font-orbitron text-sm tracking-widest rounded-sm hover:bg-neonBlue hover:text-white transition-all duration-300 glow-blue overflow-hidden relative group">
            <span className="relative z-10">REGISTER</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
