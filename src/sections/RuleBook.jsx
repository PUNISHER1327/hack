import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaClipboardList, FaCode, FaGavel, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const RuleCard = ({ icon: Icon, title, points, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-panel p-8 group hover:border-neonBlue/50 transition-all duration-500"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-lg bg-neonBlue/10 flex items-center justify-center text-neonBlue text-2xl group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <h3 className="font-orbitron text-whiteText font-bold tracking-widest text-sm uppercase">{title}</h3>
    </div>
    <ul className="space-y-4">
      {points.map((point, index) => (
        <li key={index} className="flex gap-3 text-sm text-mutedText leading-relaxed">
          <span className="text-orangeAccent mt-1">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const RuleBook = () => {
  const ruleCategories = [
    {
      icon: FaUsers,
      title: "Team Composition",
      points: [
        "Each team must consist of 2 to 4 members.",
        "Teams may include students from the same or different institutions and disciplines."
      ]
    },
    {
      icon: FaClipboardList,
      title: "Participation Process",
      points: [
        "Step 1: Registrations start from 4th May 2026. Open Innovation format.",
        "Domain selected during registration cannot be changed later.",
        "Step 2: Submit idea PPT before 14th May 2026 via official portal.",
        "Step 3: Shortlisted teams announced on 18th May 2026.",
        "Step 4: Payment of ₹600 per team by 20th May 2026.",
        "Top 60 teams will be selected for the final offline Hackathon (20 teams from each domain)."
      ]
    },
    {
      icon: FaCode,
      title: "Development Guidelines",
      points: [
        "All code must be written during the 24-hour hackathon only.",
        "Use of open-source tools is allowed with proper citation.",
        "Projects must be original; plagiarism leads to disqualification."
      ]
    },
    {
      icon: FaGavel,
      title: "Judging Criteria",
      points: [
        "Creativity and Innovation",
        "Technical Implementation and Functionality",
        "User Experience and Design",
        "Relevance to Problem Statement",
        "Overall Execution and Presentation"
      ]
    },
    {
      icon: FaLightbulb,
      title: "Rewards & Support",
      points: [
        "Total prize pool of ₹60,000 for top-performing teams.",
        "Startup incubation opportunities for exceptional projects.",
        "Meals and snacks provided; bring your own laptops and hardware."
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Legal & Ethics",
      points: [
        "Maintain professionalism and inclusivity throughout the event.",
        "Intellectual property belongs to the respective teams.",
        "Jury's decision is final and binding."
      ]
    }
  ];

  return (
    <section id="rules" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-neonBlue tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            Guidelines
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            OFFICIAL <span className="text-glow-orange text-orangeAccent">RULE BOOK</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ruleCategories.map((category, index) => (
            <RuleCard 
              key={index}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 border border-white/5 bg-white/[0.02] rounded-sm text-center"
        >
          <p className="font-orbitron text-xs text-mutedText tracking-[0.2em] uppercase">
            HACKATHON DATES: 22nd & 23rd MAY 2026 | 24 HOURS ON-SITE
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RuleBook;
