import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
    { name: 'Committee', href: '#committee' },
    { name: 'Sponsors', href: '#sponsors' },
    { 
      name: 'Archives', 
      href: '#archives',
      subLinks: [
        { name: 'Problem Statements', href: '#problem-statements' },
        { name: 'Photos', href: '#photos' }
      ]
    },
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
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className="font-orbitron text-[11px] lg:text-xs font-medium tracking-widest text-mutedText hover:text-electricBlue transition-colors relative flex items-center gap-1"
              >
                {link.name}
                {link.subLinks && (
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electricBlue transition-all duration-300 group-hover:w-full" />
              </a>

              {link.subLinks && (
                <div className="absolute top-full left-0 mt-4 w-48 bg-surface/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 font-orbitron text-[10px] tracking-widest text-mutedText hover:text-white hover:bg-white/5 transition-all"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white/60">


          </div>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFqr-ZQb8Ib2t7UvzclOBZCleTzV43jqR3EcDFq9u46SpSHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-transparent border border-neonBlue text-neonBlue font-orbitron text-sm tracking-widest rounded-sm hover:bg-neonBlue hover:text-white transition-all duration-300 glow-blue overflow-hidden relative group block"
          >
            <span className="relative z-10">REGISTER</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
