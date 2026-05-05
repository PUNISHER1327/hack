import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="w-full relative z-20 py-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-2xl border border-white/5 shadow-2xl glow-blue"
        >
          <img
            src="/bannerr.png"
            alt="HackSprint 6.0 Banner"
            className="w-full h-auto object-contain max-h-[120px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
