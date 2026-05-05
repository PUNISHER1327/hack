import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaLightbulb, FaRobot, FaMicrochip } from 'react-icons/fa';

const PrizeCard = ({ icon: Icon, title, amount, color }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.05 }}
    className={`glass-panel p-8 flex flex-col items-center text-center relative group border-t-4 ${color === 'blue' ? 'border-t-neonBlue' : 'border-t-orangeAccent'}`}
  >
    <div className={`text-4xl mb-6 ${color === 'blue' ? 'text-neonBlue text-glow-blue' : 'text-orangeAccent text-glow-orange'} group-hover:scale-110 transition-transform`}>
      <Icon />
    </div>
    <h3 className="font-orbitron text-whiteText text-lg font-bold mb-2 tracking-tighter">{title}</h3>
    <div className={`font-bebas text-3xl ${color === 'blue' ? 'text-white' : 'text-orangeAccent'}`}>₹{amount}</div>
    
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

const PrizePool = () => {
  return (
    <section id="prizes" className="py-32 relative bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-orangeAccent/5 to-transparent pointer-events-none" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-neonBlue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-48 h-48 border border-orangeAccent/20 rounded-full blur-2xl animate-pulse delay-1000" />
      
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orangeAccent/5 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            Total Reward Pool
          </motion.span>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h2 className="font-bebas text-9xl md:text-[15rem] leading-none text-whiteText tracking-tighter relative z-10">
              ₹60,000<span className="text-orangeAccent">+</span>
            </h2>
            <div className="absolute inset-0 bg-orangeAccent/20 blur-[100px] -z-10" />
            {/* Decorative particles (simplified) */}
            <div className="absolute -top-10 -right-10 text-orangeAccent animate-bounce"><FaTrophy className="text-4xl" /></div>
          </motion.div>
          <p className="font-orbitron text-mutedText text-xl tracking-widest mt-4">WORTH EXCITING PRIZES & SWAGS!</p>
        </div>

        {/* Prize Breakdown */}
        <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PrizeCard 
            icon={FaTrophy}
            title="Winner (Per Domain)"
            amount="12,500"
            color="orange"
          />
          <PrizeCard 
            icon={FaMedal}
            title="Runner Up (Per Domain)"
            amount="7,500"
            color="blue"
          />
        </div>

        <div className="mt-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-xs text-white/40 tracking-[0.3em] uppercase"
          >
            * Prizes awarded in each of the 3 specialized domains
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
