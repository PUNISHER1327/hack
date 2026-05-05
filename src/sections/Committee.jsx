import React from 'react';
import { motion } from 'framer-motion';

const Committee = () => {
  const categories = [
    {
      title: "ORGANIZING COMMITTEE",
      members: [
        { name: "Dr. R. M. Mahalinge Gowda", role: "Principal, PESCE", image: "/committee/principal.png" },
        { name: "Dr. M. C. Padma", role: "HOD, Dept of CSE", image: "/committee/hod.png" },
      ]
    },
    {
      title: "FACULTY COORDINATORS",
      members: [
        { name: "Prof. Puneeth P", role: "Assistant Professor", image: "/committee/faculty1.png" },
        { name: "Prof. Shruthi G", role: "Assistant Professor", image: "/committee/faculty2.png" },
      ]
    },
    {
      title: "STUDENT LEADS",
      members: [
        { name: "Student Name 1", role: "Lead Organizer", image: "/committee/student1.png" },
        { name: "Student Name 2", role: "Technical Lead", image: "/committee/student2.png" },
      ]
    }
  ];

  const allMembers = categories.flatMap(cat => cat.members);

  return (
    <section id="committee" className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block">THE TEAM</span>
          <h2 className="font-bebas text-7xl md:text-8xl text-whiteText tracking-tight">
            EVENT <span className="text-glow-blue text-neonBlue">COMMITTEE</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden py-10">
        <div className="animate-committee-marquee flex items-center gap-8 whitespace-nowrap px-4">
          {/* Repeat multiple times to ensure full width coverage */}
          {[...allMembers, ...allMembers, ...allMembers].map((member, i) => (
            <div 
              key={i} 
              className="glass-panel p-6 w-72 flex-shrink-0 group hover:border-neonBlue/50 transition-all duration-500"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-white/5 rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <h4 className="font-orbitron text-whiteText text-base font-bold mb-1 truncate">{member.name}</h4>
              <p className="text-mutedText text-[10px] font-medium tracking-wider uppercase truncate">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes committee-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-committee-marquee {
          animation: committee-marquee 40s linear infinite;
        }
        .animate-committee-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Committee;
