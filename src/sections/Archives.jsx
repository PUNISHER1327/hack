import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Archives = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const problemStatements = [
    { year: "2023", title: "AI in Sustainable Agriculture", file: "#", category: "AGRITECH" },
    { year: "2023", title: "Blockchain for Supply Chain", file: "#", category: "FINTECH" },
    { year: "2022", title: "Smart City Infrastructure", file: "#", category: "IOT" },
    { year: "2022", title: "HealthTech Monitoring Systems", file: "#", category: "HEALTHCARE" },
  ];

  const row1 = [
    { url: "/hackphotos/1.png", title: "Inauguration Ceremony", width: "w-64 md:w-96" },
    { url: "/hackphotos/2.png", title: "Workshop Session", width: "w-48 md:w-72" },
    { url: "/hackphotos/3.png", title: "Deep Focus Coding", width: "w-64 md:w-80" },
    { url: "/hackphotos/4.png", title: "Mentor Interaction", width: "w-80 md:w-[400px]" },
    { url: "/hackphotos/5.png", title: "Team Collaboration", width: "w-56 md:w-80" },
  ];

  const row2 = [
    { url: "/hackphotos/6.png", title: "Prototype Demo", width: "w-48 md:w-64" },
    { url: "/hackphotos/7.png", title: "Panel Discussion", width: "w-80 md:w-96" },
    { url: "/hackphotos/8.png", title: "Networking Hour", width: "w-64 md:w-80" },
    { url: "/hackphotos/9.png", title: "Award Ceremony", width: "w-48 md:w-72" },
  ];

  return (
    <section id="archives" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block">HISTORY</span>
          <h2 className="font-bebas text-8xl md:text-9xl text-whiteText tracking-tight">
            THE <span className="text-glow-orange text-orangeAccent">ARCHIVES</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Gallery */}
      <div id="photos" className="space-y-8 mb-32">
        {/* Row 1 */}
        <div className="relative flex overflow-hidden py-2">
          <div className="animate-gallery-marquee-left flex items-center gap-8 whitespace-nowrap px-4">
            {[...row1, ...row1, ...row1].map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(img)}
                className={`relative flex-shrink-0 ${img.width} aspect-video overflow-hidden rounded-xl border border-white/10 group cursor-zoom-in`}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-[10px] font-orbitron font-bold tracking-widest uppercase">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative flex overflow-hidden py-2">
          <div className="animate-gallery-marquee-right flex items-center gap-8 whitespace-nowrap px-4">
            {[...row2, ...row2, ...row2].map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(img)}
                className={`relative flex-shrink-0 ${img.width} aspect-video overflow-hidden rounded-xl border border-white/10 group cursor-zoom-in`}
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-[10px] font-orbitron font-bold tracking-widest uppercase">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Statements */}
      <div id="problem-statements" className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h3 className="font-orbitron text-whiteText text-xl font-bold flex items-center gap-4">
            <span className="w-12 h-[2px] bg-neonBlue" />
            PROBLEM STATEMENTS
          </h3>
          <p className="text-mutedText font-inter text-sm max-w-md">
            Review challenges from previous editions to understand the technical depth and innovation expected at HackSprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemStatements.map((ps, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-8 flex items-center justify-between group cursor-pointer border-l-4 border-l-transparent hover:border-l-neonBlue transition-all duration-300"
            >
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="text-neonBlue font-bebas text-3xl leading-none block">{ps.year}</span>
                  <span className="text-[10px] font-orbitron text-white/30 tracking-widest uppercase">YEAR</span>
                </div>
                <div className="h-12 w-[1px] bg-white/10" />
                <div>
                  <span className="text-white/40 font-orbitron text-[10px] tracking-widest block mb-1 uppercase">{ps.category}</span>
                  <h4 className="text-whiteText font-orbitron text-sm font-bold group-hover:text-neonBlue transition-colors">{ps.title}</h4>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neonBlue group-hover:border-neonBlue transition-all duration-300 shadow-xl">
                <svg className="w-6 h-6 text-white/40 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.url} 
                alt={selectedImg.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-orbitron text-white text-xl font-bold">{selectedImg.title}</h4>
                  <p className="text-orangeAccent font-orbitron text-[10px] tracking-[0.3em] uppercase mt-1">HACKSPRINT ARCHIVES</p>
                </div>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gallery-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes gallery-marquee-right {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-gallery-marquee-left {
          animation: gallery-marquee-left 60s linear infinite;
        }
        .animate-gallery-marquee-right {
          animation: gallery-marquee-right 60s linear infinite;
        }
        .animate-gallery-marquee-left:hover, .animate-gallery-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Archives;
