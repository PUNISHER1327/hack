import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { stage: '01', title: 'REGISTRATIONS START', date: 'MAY 04, 2026', desc: 'Secure your spot and select your domains.', side: 'left' },
  { stage: '02', title: 'IDEA SUBMISSION DEADLINE', date: 'MAY 14, 2026', desc: 'Submit your innovative idea PPT via the official portal.', side: 'right' },
  { stage: '03', title: 'SHORTLIST ANNOUNCEMENT', date: 'MAY 18, 2026', desc: 'Selected teams will be notified for the next phase.', side: 'left' },
  { stage: '04', title: 'FINAL REGISTRATION & PAYMENT', date: 'MAY 20, 2026', desc: 'Complete the registration fee payment of ₹600 per team.', side: 'right' },
  { stage: '05', title: 'THE GRAND FINALE', date: 'MAY 22-23, 2026', desc: 'The 24-hour on-site coding marathon at PESCE campus.', side: 'left' },
];

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex items-center justify-between w-full mb-16 ${item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
  >
    <div className="hidden md:block w-5/12" />
    
    {/* Center Line Dot */}
    <div className="z-20 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-neonBlue glow-blue relative">
      <div className="w-2 h-2 rounded-full bg-neonBlue animate-ping" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-orbitron text-[8px] font-bold text-neonBlue mt-6 whitespace-nowrap">STEP_{item.stage}</div>
    </div>
    
    <div className="w-full md:w-5/12 glass-panel p-6 group hover:border-neonBlue transition-colors">
      <span className="font-orbitron text-orangeAccent text-[10px] font-bold tracking-[0.3em] mb-2 block">{item.date}</span>
      <h3 className="font-orbitron text-xl font-black text-whiteText mb-2 group-hover:text-neonBlue transition-colors">{item.title}</h3>
      <p className="text-sm text-mutedText leading-relaxed">{item.desc}</p>
    </div>
  </motion.div>
);

const Timeline = () => {
  return (
    <section id="timeline" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            THE ROADMAP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            EVENT <span className="text-glow-orange text-orangeAccent">TIMELINE</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonBlue via-orangeAccent to-neonBlue opacity-30 -translate-x-1/2" />
          
          <div className="flex flex-col">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
