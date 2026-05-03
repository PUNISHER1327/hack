import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLeaf, FaWifi } from 'react-icons/fa';

const DomainCard = ({ icon: Icon, title, description, color, accent }) => (
  <motion.div
    whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
    className="glass-panel p-10 flex flex-col items-center text-center group h-full relative cursor-pointer"
  >
    {/* Border Animation */}
    <div className={`absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-${accent} rounded-xl`} />

    <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 text-5xl transition-all duration-500 bg-${color}/10 text-${color} text-glow-${color} group-hover:scale-125`}>
      <Icon />
    </div>

    <h3 className="font-orbitron text-2xl font-black text-whiteText mb-4 tracking-tighter uppercase">{title}</h3>
    <p className="text-mutedText font-inter leading-relaxed mb-6">{description}</p>

    <div className="mt-auto pt-6 w-full border-t border-white/5 flex items-center justify-center gap-2 text-xs font-orbitron text-white/40 tracking-[0.2em]">
      <span>EXPLORE</span>
      <div className={`w-2 h-2 rounded-full bg-${color} animate-pulse`} />
      <span>DOMAINS</span>
    </div>

    {/* Hover Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
  </motion.div>
);

const Domains = () => {
  return (
    <section id="domains" className="py-32 relative bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
            >
              CHOOSE YOUR ARENA
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
            >
              HACKATHON <span className="text-glow-blue text-neonBlue">DOMAINS</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="font-orbitron text-[10px] text-mutedText tracking-[0.3em] uppercase mb-2">FILTER_BY: INNOVATION</div>
            <div className="flex gap-2">
              <div className="w-10 h-1 bg-neonBlue" />
              <div className="w-10 h-1 bg-orangeAccent" />
              <div className="w-10 h-1 bg-white/20" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DomainCard
            icon={FaBrain}
            title="Artificial Intelligence"
            description="Build the future with Generative AI, Machine Learning models, and intelligent automation systems."
            color="neonBlue"
            accent="neonBlue"
          />
          <DomainCard
            icon={FaLeaf}
            title="Agritech"
            description="Solve critical challenges in agriculture using technology for a sustainable tomorrow."
            color="orangeAccent"
            accent="orangeAccent"
          />
          <DomainCard
            icon={FaWifi}
            title="Internet of Things"
            description="Connect the physical world with the digital realm through smart sensors and integrated networks."
            color="neonBlue"
            accent="neonBlue"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel p-6 flex items-center justify-center gap-8 border-white/5"
        >
          <span className="font-orbitron text-[10px] text-mutedText tracking-widest">WANT TO PROPOSE A DIFFERENT TRACK?</span>
          <a href="#contact" className="text-neonBlue font-orbitron text-xs font-bold hover:underline">CONTACT COORDINATORS</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;
