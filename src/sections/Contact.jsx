import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaComment } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
            >
              GET_IN_TOUCH
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-bebas text-7xl md:text-8xl text-whiteText leading-none mb-12"
            >
              HAVE A <span className="text-glow-orange text-orangeAccent">QUERY?</span>
            </motion.h2>

            <p className="text-mutedText font-inter text-sm mb-12">
              Have questions or need technical support? Our team is available 24/7 to help you out.<br/>
              Email: <a href="mailto:hacksprint6.0@pesce.ac.in" className="text-neonBlue hover:underline">hacksprint6.0@pesce.ac.in</a>
            </p>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-lg glass-panel flex items-center justify-center text-neonBlue text-2xl group-hover:glow-blue transition-all">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-orbitron text-whiteText font-bold mb-1 tracking-widest text-sm">FACULTY COORDINATORS</h4>
                  <p className="text-mutedText text-sm mb-1">Dr. Punith Kumar M B: +91 98444 82308</p>
                  <p className="text-mutedText text-sm">Dr. Vinaykumar H S: +91 91644 70009</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-lg glass-panel flex items-center justify-center text-orangeAccent text-2xl group-hover:glow-orange transition-all">
                  <FaUser />
                </div>
                <div>
                  <h4 className="font-orbitron text-whiteText font-bold mb-1 tracking-widest text-sm">STUDENT COORDINATORS</h4>
                  <p className="text-mutedText text-sm mb-1">Sonal H: +91 95917 87616</p>
                  <p className="text-mutedText text-sm mb-1">Ashwin S: +91 89517 28170</p>
                  <p className="text-mutedText text-sm">Mahendra Reddy: +91 74160 01477</p>
                </div>
              </div>


            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-10 relative">
            <div className="absolute top-0 right-0 p-6 font-orbitron text-[10px] text-white/10">MESSAGE_PORTAL_V1.0</div>
            
            <form className="space-y-6">
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neonBlue transition-colors" />
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full bg-background/50 border border-white/10 rounded p-4 pl-12 font-orbitron text-xs tracking-widest text-white outline-none focus:border-neonBlue transition-all"
                />
              </div>

              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neonBlue transition-colors" />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-background/50 border border-white/10 rounded p-4 pl-12 font-orbitron text-xs tracking-widest text-white outline-none focus:border-neonBlue transition-all"
                />
              </div>

              <div className="relative group">
                <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-neonBlue transition-colors" />
                <input 
                  type="text" 
                  placeholder="TEAM NAME (OPTIONAL)" 
                  className="w-full bg-background/50 border border-white/10 rounded p-4 pl-12 font-orbitron text-xs tracking-widest text-white outline-none focus:border-neonBlue transition-all"
                />
              </div>

              <div className="relative group">
                <FaComment className="absolute left-4 top-6 text-white/20 group-focus-within:text-neonBlue transition-colors" />
                <textarea 
                  rows="5" 
                  placeholder="YOUR QUERY" 
                  className="w-full bg-background/50 border border-white/10 rounded p-4 pl-12 font-orbitron text-xs tracking-widest text-white outline-none focus:border-neonBlue transition-all"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-neonBlue text-white font-orbitron font-bold tracking-[0.3em] rounded group flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all glow-blue overflow-hidden relative">
                <span className="relative z-10">SEND MESSAGE</span>
                <FaPaperPlane className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
