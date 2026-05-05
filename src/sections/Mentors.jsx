import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

const MentorCard = ({ name, role, expertise, image }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-panel p-8 text-center group relative border-t-2 border-t-transparent hover:border-t-neonBlue transition-all duration-500"
  >
    <div className="relative mb-8 inline-block">
      <div className="w-32 h-32 rounded-full border-2 border-neonBlue p-1 group-hover:glow-blue transition-all duration-500 overflow-hidden">
        <div className="w-full h-full rounded-full bg-surface/50 flex items-center justify-center text-neonBlue text-4xl overflow-hidden relative">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="font-bebas text-6xl opacity-20">{name ? name[0] : "Y"}</div>
          )}
        </div>
      </div>
      <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-orangeAccent flex items-center justify-center text-white text-xs glow-orange">
        <FaGlobe />
      </div>
    </div>
    
    <h3 className="font-orbitron text-xl font-bold text-whiteText mb-1 uppercase tracking-tighter">{name || "JUDGE / MENTOR"}</h3>
    <p className="text-neonBlue font-orbitron text-[10px] tracking-widest mb-4 uppercase">{role}</p>
    <p className="text-sm text-mutedText leading-relaxed mb-6 italic">{expertise}</p>
    
    <div className="flex justify-center gap-4 text-white/40">
      <a href="#" className="hover:text-neonBlue transition-colors text-xl"><FaLinkedin /></a>
    </div>
  </motion.div>
);

const Mentors = () => {
  const mentors = [
    { name: "", role: "Bangalore YP Section", expertise: "Expert Mentor & Judge", image: "" },
    { name: "", role: "Bangalore YP Section", expertise: "Expert Mentor & Judge", image: "" },
    { name: "", role: "Bangalore YP Section", expertise: "Expert Mentor & Judge", image: "" },
    { name: "", role: "Bangalore YP Section", expertise: "Expert Mentor & Judge", image: "" },
  ];

  return (
    <section id="judges" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            THE EXPERTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            MENTORS & <span className="text-glow-blue text-neonBlue">JUDGES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((m, i) => (
            <MentorCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
