import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: "IEEE", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg" },
    { name: "PESCE", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/P.E.S._College_of_Engineering%2C_Mandya_logo.png/150px-P.E.S._College_of_Engineering%2C_Mandya_logo.png" },
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ];

  return (
    <section id="sponsors" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-20 text-center">
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
          className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
        >
          OUR <span className="text-glow-blue text-neonBlue">SPONSORS</span>
        </motion.h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden py-10 bg-surface/30 backdrop-blur-sm border-y border-white/5">
        <div className="animate-marquee flex items-center gap-20 whitespace-nowrap px-10">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer">
              <img 
                src={s.logo} 
                alt={s.name} 
                className="h-12 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" 
              />
              <span className="font-orbitron text-[10px] text-white/20 mt-4 tracking-widest">{s.name.toUpperCase()}</span>
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
