import React from 'react';
import { motion } from 'framer-motion';

const VenueExperience = () => {
  return (
    <section id="venue" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
            >
              THE LOCATION
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-bebas text-7xl md:text-8xl text-whiteText leading-none mb-8"
            >
              VENUE <span className="text-glow-orange text-orangeAccent">EXPERIENCE</span>
            </motion.h2>
            
            <div className="glass-panel p-10 border-l-4 border-l-neonBlue mb-12">
              <h3 className="font-orbitron text-xl font-bold text-whiteText mb-4">P.E.S. COLLEGE OF ENGINEERING</h3>
              <p className="text-mutedText leading-relaxed mb-6">
                Located in the heart of Mandya, our campus provides the perfect blend of traditional architecture and modern tech facilities. The hackathon will take place in the state-of-the-art auditorium and innovation labs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded">
                  <p className="text-[10px] font-orbitron text-neonBlue mb-1">CAPACITY</p>
                  <p className="text-lg font-bebas text-white">500+ HACKERS</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded">
                  <p className="text-[10px] font-orbitron text-neonBlue mb-1">CONNECTIVITY</p>
                  <p className="text-lg font-bebas text-white">GIGABIT WIFI</p>
                </div>
              </div>
            </div>
            
            <button className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-orangeAccent flex items-center justify-center text-orangeAccent group-hover:bg-orangeAccent group-hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="font-orbitron text-sm font-bold tracking-widest text-whiteText">OPEN IN MAPS</span>
            </button>
          </div>

          {/* Gallery - Grid Layout */}
          <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="col-span-8 row-span-7 rounded-xl overflow-hidden glass-panel relative group"
            >
              <div className="absolute inset-0 bg-neonBlue/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Venue 1" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="col-span-4 row-span-5 rounded-xl overflow-hidden glass-panel relative group"
            >
              <div className="absolute inset-0 bg-orangeAccent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Venue 2" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="col-span-4 row-span-7 rounded-xl overflow-hidden glass-panel relative group"
            >
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Venue 3" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="col-span-8 row-span-5 rounded-xl overflow-hidden glass-panel relative group"
            >
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Venue 4" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueExperience;
