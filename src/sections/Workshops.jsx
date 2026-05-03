import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaPalette, FaRocket } from 'react-icons/fa';

const WorkshopCard = ({ title, icon: Icon, time, speaker, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`glass-panel p-8 group relative overflow-hidden flex flex-col h-full border-l-4 ${color === 'blue' ? 'border-l-neonBlue' : 'border-l-orangeAccent'}`}
  >
    <div className="flex items-center gap-6 mb-6">
      <div className={`text-4xl ${color === 'blue' ? 'text-neonBlue text-glow-blue' : 'text-orangeAccent text-glow-orange'} group-hover:rotate-12 transition-transform`}>
        <Icon />
      </div>
      <div>
        <h3 className="font-orbitron text-xl font-bold text-whiteText tracking-tighter uppercase">{title}</h3>
        <p className="text-[10px] font-orbitron text-mutedText tracking-widest">{time} // SPEAKER: {speaker}</p>
      </div>
    </div>
    
    <p className="text-sm text-mutedText leading-relaxed mb-8">{description}</p>
    
    <button className={`mt-auto px-6 py-2 border ${color === 'blue' ? 'border-neonBlue text-neonBlue' : 'border-orangeAccent text-orangeAccent'} font-orbitron text-[10px] tracking-widest hover:bg-white/5 transition-all`}>
      SAVE_SEAT_NOW
    </button>
  </motion.div>
);

const Workshops = () => {
  const workshops = [
    { title: "AI BOOTCAMP", icon: FaLaptopCode, time: "10:00 AM", speaker: "DR. PUNITH", description: "Learn how to integrate LLMs into your hackathon projects in under 60 minutes.", color: "blue" },
    { title: "IOT MASTERCLASS", icon: FaMicrochip, time: "01:00 PM", speaker: "DR. VINAY", description: "Hands-on session with ESP32 and real-time cloud data visualization.", color: "orange" },
    { title: "UI/UX FOR DEVS", icon: FaPalette, time: "03:00 PM", speaker: "ALUMNI TEAM", description: "Master Figma and Tailwind CSS to make your project stand out from the crowd.", color: "blue" },
    { title: "THE PERFECT PITCH", icon: FaRocket, time: "05:00 PM", speaker: "IEEE MENTORS", description: "How to demo your product and win over the judging panel.", color: "orange" },
  ];

  return (
    <section id="workshops" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            PRE-EVENT BOOTCAMP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            TECH <span className="text-glow-orange text-orangeAccent">WORKSHOPS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((w, i) => (
            <WorkshopCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
