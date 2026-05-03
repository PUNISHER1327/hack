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
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orangeAccent/5 rounded-full blur-[150px] animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            Total Reward Pool
          </motion.span>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <PrizeCard icon={FaTrophy} title="WINNER" amount="25,000" color="orange" />
          <PrizeCard icon={FaMedal} title="RUNNER UP" amount="15,000" color="blue" />
          <PrizeCard icon={FaLightbulb} title="BEST INNOVATION" amount="10,000" color="orange" />
          <PrizeCard icon={FaRobot} title="AI TRACK" amount="5,000" color="blue" />
          <PrizeCard icon={FaMicrochip} title="IOT TRACK" amount="5,000" color="orange" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <PrizeCard icon={FaTrophy} title="WINNER" amount="12,500" color="orange" />
          <PrizeCard icon={FaMedal} title="RUNNER UP" amount="7,500" color="blue" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-panel p-10 flex flex-col md:flex-row items-center justify-between gap-10 border-dashed border-2 border-white/10"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-neonBlue/20 flex items-center justify-center text-neonBlue text-3xl">
              <FaTrophy />
            </div>
            <div>
              <h4 className="font-orbitron text-whiteText font-bold">ADDITIONAL PERKS</h4>
              <p className="text-sm text-mutedText">Certificates, Goodies, and Internship opportunities for top performers.</p>
            </div>
          </div>

          <button className="px-10 py-4 bg-transparent border border-white/20 hover:border-neonBlue transition-all text-white font-orbitron text-sm tracking-widest">
            VIEW FULL BREAKDOWN
          </button>

          

        </motion.div>
      </div>
    </section>
  );
};

export default PrizePool;
