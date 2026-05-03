import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMicrochip, FaLeaf } from 'react-icons/fa';

const ChallengeCard = ({ title, icon: Icon, difficulty, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass-panel p-8 group relative overflow-hidden flex flex-col h-full border-b-4 border-b-neonBlue/30"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="text-4xl text-neonBlue text-glow-blue group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-[10px] font-orbitron px-2 py-1 bg-white/5 rounded border border-white/10 text-mutedText">DIFF: {difficulty}</span>
      </div>
    </div>
    
    <h3 className="font-orbitron text-xl font-bold text-whiteText mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-sm text-mutedText leading-relaxed mb-6 flex-grow">{description}</p>
    
    <button className="w-full py-3 bg-neonBlue/10 hover:bg-neonBlue/20 border border-neonBlue/30 text-neonBlue font-orbitron text-xs tracking-[0.2em] transition-all">
      VIEW CHALLENGE_DOC
    </button>
    
    {/* Background Grid Scan */}
    <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" />
  </motion.div>
);

const TracksAndChallenges = () => {
  const challenges = [
    { title: "AI/ML Innovations", icon: FaRobot, difficulty: "ELITE", description: "Build models that solve real-world problems using NLP, CV, or LLMs." },
    { title: "Agritech Solutions", icon: FaLeaf, difficulty: "HARD", description: "Develop innovative solutions for precision farming, crop monitoring, and agricultural sustainability." },
    { title: "Smart City IoT", icon: FaMicrochip, difficulty: "PRO", description: "Create integrated hardware solutions for urban sustainability and smart infrastructure." },
  ];

  return (
    <section id="tracks" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            THE ARENA
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            TRACKS & <span className="text-glow-blue text-neonBlue">CHALLENGES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {challenges.map((c, i) => (
            <ChallengeCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksAndChallenges;
