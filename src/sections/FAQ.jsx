import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 flex items-center justify-between glass-panel transition-all duration-300 ${isOpen ? 'border-neonBlue glow-blue' : 'hover:border-white/20'}`}
      >
        <span className="font-orbitron text-left font-bold text-whiteText tracking-tighter uppercase">{question}</span>
        <div className={`text-neonBlue transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <FaPlus />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 bg-surface/50 border-x border-b border-white/10 rounded-b-xl text-mutedText text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "Who can participate?", answer: "HackSprint 6.0 is open to all students currently enrolled in any undergraduate or postgraduate program. Both beginners and experts are welcome!" },
    { question: "What is the team size?", answer: "Teams can consist of 2 to 4 members. You can register as a complete team or individually if you already have a group planned." },
    { question: "Is there a registration fee?", answer: "Yes, once a team is shortlisted, they are required to complete a registration payment of ₹600 per team by 20th May 2026." },
    { question: "What should I bring?", answer: "Bring your laptop, charger, and any hardware components you might need for your project. Don't forget your enthusiasm!" },
    { question: "Are cross-college teams allowed?", answer: "Yes, teams can have members from different colleges. We encourage collaboration across institutions." },
    { question: "What is the judging criteria?", answer: "Projects will be judged based on Innovation, Technical Complexity, UI/UX, and the Impact of the solution." },
  ];

  return (
    <section id="faq" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-orangeAccent tracking-[0.5em] text-sm font-bold uppercase mb-4 block"
          >
            COMMON_QUERIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-7xl md:text-8xl text-whiteText leading-none"
          >
            FREQUENTLY <span className="text-glow-blue text-neonBlue">ASKED</span>
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
