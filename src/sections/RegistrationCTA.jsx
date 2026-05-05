import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const RegistrationCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 19, hours: 14, mins: 52, secs: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBox = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-24 md:w-32 md:h-40 glass-panel flex items-center justify-center mb-4 relative overflow-hidden group border-t-2 border-t-neonBlue">
        <span className="font-bebas text-5xl md:text-8xl text-whiteText relative z-10">{value.toString().padStart(2, '0')}</span>
        <div className="absolute inset-0 bg-neonBlue/5 group-hover:bg-neonBlue/10 transition-colors" />
      </div>
      <span className="font-orbitron text-[10px] md:text-xs text-mutedText tracking-[0.4em] uppercase">{label}</span>
    </div>
  );

  return (
    <section className="py-40 relative bg-background overflow-hidden">
      {/* Background Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
        <div className="absolute inset-0 border border-neonBlue/10 rounded-full animate-ping-slow" />
        <div className="absolute inset-0 border border-orangeAccent/10 rounded-full animate-ping-slow-reverse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="font-bebas text-9xl md:text-[12rem] text-whiteText leading-none mb-12"
        >
          HACK THE <span className="text-glow-blue text-neonBlue">FUTURE</span>
        </motion.h2>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16">
          <TimerBox label="Days" value={timeLeft.days} />
          <TimerBox label="Hours" value={timeLeft.hours} />
          <TimerBox label="Mins" value={timeLeft.mins} />
          <TimerBox label="Secs" value={timeLeft.secs} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFqr-ZQb8Ib2t7UvzclOBZCleTzV43jqR3EcDFq9u46SpSHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-orangeAccent text-white font-orbitron font-black tracking-[0.4em] rounded-sm hover:scale-105 active:scale-95 transition-all glow-orange group relative overflow-hidden text-lg block text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">REGISTER NOW <FaArrowRight /></span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </div>
        
        <p className="mt-12 font-orbitron text-xs text-mutedText tracking-[0.3em] uppercase">
          LAST DATE TO REGISTER: MAY 15, 2026 // LIMITED SLOTS REMAINING
        </p>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slow-reverse {
          animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default RegistrationCTA;
