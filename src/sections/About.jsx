import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grid opacity-10" />
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-neonBlue/20 rounded-lg rotate-45 animate-pulse" />
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="font-orbitron text-electricBlue tracking-widest text-sm font-bold block mb-4">SYSTEM_INFO // 01</span>
          <h2 className="font-bebas text-6xl md:text-8xl leading-tight text-whiteText">
            WHERE <span className="text-orangeAccent">INNOVATION</span><br />
            MEETS <span className="text-glow-blue text-neonBlue">COMPETITION</span>
          </h2>
          
          <div className="mt-12 relative">
            <div className="w-full h-1 bg-gradient-to-r from-neonBlue via-orangeAccent to-transparent opacity-30" />
            <div className="absolute -top-2 left-0 w-4 h-4 bg-neonBlue rounded-full glow-blue" />
          </div>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div className="glass-panel p-8 relative group">
            <div className="absolute top-0 right-0 p-4 font-orbitron text-[10px] text-neonBlue/20">MANIFESTO_FRAGMENT_v6.0</div>
            <p className="text-mutedText font-inter text-lg leading-relaxed">
              HackSprint 6.0 is more than just a coding competition; it's a <span className="text-whiteText font-bold">high-intensity 24-hour national-level endurance challenge</span> organized by P.E.S. College of Engineering, Mandya. In elite collaboration with the IEEE Student Chapter and global tech partners, we've engineered an arena where innovation, scalability, and social impact converge.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-l-4 border-l-neonBlue">
              <h4 className="font-orbitron text-whiteText text-sm font-bold mb-2">PROTOTYPE SCALE</h4>
              <p className="text-xs text-mutedText leading-relaxed">Transform raw ideas into production-ready prototypes within a single day of focused execution.</p>
            </div>
            <div className="glass-panel p-6 border-l-4 border-l-orangeAccent">
              <h4 className="font-orbitron text-whiteText text-sm font-bold mb-2">EXPERT MENTORSHIP</h4>
              <p className="text-xs text-mutedText leading-relaxed">Work alongside industry leaders and academic veterans to refine your technical architecture.</p>
            </div>
          </div>

          <p className="text-mutedText font-inter text-lg leading-relaxed">
            The journey begins with a rigorous nationwide screening, where teams submit their most ambitious concepts via detailed PPT proposals. From this massive pool of talent, only the <span className="text-whiteText font-bold">top 60 elite teams—20 from each specialized domain</span>—are selected to converge at the PESCE campus for the final 24-hour sprint.
          </p>

          <p className="text-mutedText font-inter text-lg leading-relaxed">
            Participants dive deep into three critical technological frontiers: <span className="text-neonBlue font-bold">Artificial Intelligence</span> (focusing on Predictive Analytics, Computer Vision, and NLP), <span className="text-orangeAccent font-bold">Agritech</span> (pioneering Precision Farming and Sustainable Agri-solutions), and <span className="text-neonBlue font-bold">Smart IoT Systems</span> (architecting Automation and Smart City Infrastructure). HackSprint 6.0 provides the network and the pressure-cooker environment needed to launch the next generation of technical leaders.
          </p>

          <button className="font-orbitron text-neonBlue flex items-center gap-4 group w-fit">
            <span className="tracking-widest font-bold group-hover:mr-2 transition-all">READ MANIFESTO</span>
            <div className="w-12 h-[1px] bg-neonBlue transition-all group-hover:w-20" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
