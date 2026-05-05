import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaCertificate, FaRocket, FaGift, FaUserTie, FaGlobe, FaHandshake } from 'react-icons/fa';

const BentoCard = ({ icon: Icon, title, description, size, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.01 }}
    className={`glass-panel p-8 flex flex-col justify-between group cursor-default relative overflow-hidden ${size}`}
  >
    <div className={`text-4xl mb-6 ${color === 'blue' ? 'text-neonBlue text-glow-blue' : 'text-orangeAccent text-glow-orange'} group-hover:scale-110 transition-transform duration-500`}>
      <Icon />
    </div>
    <div>
      <h3 className="font-orbitron text-lg font-bold text-whiteText mb-2 uppercase tracking-tighter">{title}</h3>
      <p className="text-sm text-mutedText leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{description}</p>
    </div>
    
    {/* Decorative corner */}
    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${color === 'blue' ? 'neonBlue' : 'orangeAccent'}/10 to-transparent -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500`} />
  </motion.div>
);

const WhyParticipate = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            THE EXPERIENCE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            WHY <span className="text-glow-blue text-neonBlue">PARTICIPATE?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          <BentoCard 
            size="md:col-span-2 md:row-span-1"
            icon={FaUsers}
            title="Networking"
            description="Connect with like-minded developers, designers, and innovators from across the region."
            color="blue"
          />
          <BentoCard 
            size="md:col-span-1 md:row-span-1"
            icon={FaUserTie}
            title="Industry Connect"
            description="Get direct access to top industry leaders and recruiters to accelerate your career growth."
            color="orange"
          />
          <BentoCard 
            size="md:col-span-1 md:row-span-2"
            icon={FaCertificate}
            title="IEEE Certification"
            description="Boost your resume with globally recognized certificates backed by IEEE PES SBC."
            color="blue"
          />
          <BentoCard 
            size="md:col-span-1 md:row-span-1"
            icon={FaRocket}
            title="Exposure"
            description="Present your ideas to industry experts and gain valuable feedback."
            color="blue"
          />
          <BentoCard 
            size="md:col-span-2 md:row-span-1"
            icon={FaGift}
            title="Goodies & Swag"
            description="Exclusive HackSprint hoodies, stickers, and tech goodies for all participants."
            color="orange"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
