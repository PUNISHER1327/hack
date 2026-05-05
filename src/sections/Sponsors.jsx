import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: "PESCE", logo: "/pesce_logo.png" },
  ];

  return (
    <section id="sponsors" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
        >
          SUPPORTED BY
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-bebas text-8xl md:text-9xl text-whiteText leading-none"
        >
          OUR <span className="text-glow-blue text-neonBlue">SPONSORS</span>
        </motion.h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden py-32 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="animate-marquee flex items-center gap-64 whitespace-nowrap px-20">
          {/* Repeat many times to ensure full width coverage for single sponsor */}
          {Array(10).fill(sponsors[0]).map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer">
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-32 md:h-48 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" 
              />
              <span className="font-orbitron text-sm md:text-base text-white/40 mt-10 tracking-[0.5em] font-bold">{s.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-mutedText font-orbitron text-sm mb-6">WANT TO PARTNER WITH US?</p>
        <button className="px-10 py-4 border border-neonBlue text-neonBlue font-orbitron text-xs tracking-widest hover:bg-neonBlue hover:text-white transition-all glow-blue">
          BECOME A SPONSOR
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
