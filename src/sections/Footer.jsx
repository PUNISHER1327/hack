import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Particles (Subtle) */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1 md:pr-8 lg:pr-12">
      <div className="text-3xl font-orbitron font-black tracking-tighter flex items-center gap-2 mb-6">
        <span className="text-orangeAccent">HACK</span>
        <span className="text-neonBlue">SPRINT</span>
        <span className="text-whiteText">6.0</span>
      </div>
      <p className="text-mutedText text-sm leading-relaxed mb-8">
        P.E.S. College of Engineering, Mandya. Join us for a 24-hour journey of innovation and technical excellence.
      </p>
      <div className="flex gap-4">


        <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-neonBlue hover:border-neonBlue transition-all"><FaInstagram /></a>
        <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-neonBlue hover:border-neonBlue transition-all"><FaTwitter /></a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="md:col-span-1">
      <h4 className="font-orbitron text-whiteText font-bold mb-6 tracking-widest text-sm uppercase">Quick Links</h4>
      <ul className="flex flex-col gap-4">
        {['About', 'Domains', 'Timeline', 'Sponsors', 'FAQ'].map(link => (
          <li key={link}><a href={`#${link.toLowerCase()}`} className="text-mutedText hover:text-neonBlue text-sm transition-all">{link}</a></li>
        ))}
      </ul>
    </div>

    {/* Resources */}
    <div className="md:col-span-1">
      <h4 className="font-orbitron text-whiteText font-bold mb-6 tracking-widest text-sm uppercase">Resources</h4>
      <ul className="flex flex-col gap-4">
        {['Brand Assets', 'Code of Conduct', 'Privacy Policy', 'Terms of Service'].map(link => (
          <li key={link}><a href="#" className="text-mutedText hover:text-neonBlue text-sm transition-all">{link}</a></li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div className="md:col-span-1">
      <h4 className="font-orbitron text-whiteText font-bold mb-6 tracking-widest text-sm uppercase">Contact Us</h4>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-mutedText text-sm">
          <FaEnvelope className="text-neonBlue" />
          <span>hacksprint6.0@pesce.ac.in</span>
        </div>
        <div className="flex items-center gap-3 text-mutedText text-sm">
          <FaPhoneAlt className="text-neonBlue" />
          <span>+91 9591787616</span>
        </div>
        <div className="mt-4 p-4 glass-panel border-dashed border-white/10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest font-orbitron">SYSTEM_LOCATION</p>
          <p className="text-xs text-mutedText">Mandya, Karnataka, India</p>
        </div>
      </div>
    </div>
  </div>

    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-xs text-mutedText font-orbitron tracking-widest">
        © 2026 HACKSPRINT 6.0 | DESIGNED FOR THE FUTURE
      </p>
      <div className="flex items-center gap-6">
        <span className="text-[10px] text-white/20 font-orbitron uppercase tracking-[0.4em]">IEEE PESCE MANDYA</span>
        <div className="w-10 h-[1px] bg-white/10" />
        <span className="text-[10px] text-white/20 font-orbitron uppercase tracking-[0.4em]">BANGALORE SECTION</span>
      </div>
    </div>
      </div >
    </footer >
  );
};

export default Footer;
