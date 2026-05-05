import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import PrizePool from './sections/PrizePool';
import Domains from './sections/Domains';
import WhyParticipate from './sections/WhyParticipate';
import Timeline from './sections/Timeline';
import TracksAndChallenges from './sections/TracksAndChallenges';
import Mentors from './sections/Mentors';
import Committee from './sections/Committee';
import RuleBook from './sections/RuleBook';
import Sponsors from './sections/Sponsors';
import Banner from './sections/Banner';
import VenueExperience from './sections/VenueExperience';
import Archives from './sections/Archives';
import FAQ from './sections/FAQ';
import RegistrationCTA from './sections/RegistrationCTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-background selection:bg-neonBlue selection:text-white">
      <CustomCursor />
      <Navbar />
      
      {/* Scroll Progress Line */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div className="h-full bg-neonBlue shadow-[0_0_10px_#0066FF] transition-all duration-100" style={{ width: '0%' }} id="scroll-progress"></div>
      </div>

      <Hero />
      <Banner />
      <Sponsors />
      <About />
      <PrizePool />
      <Domains />
      <WhyParticipate />
      <Timeline />
      <RuleBook />
      <TracksAndChallenges />
      <Mentors />
      <Committee />
      <VenueExperience />
      <Archives />
      <FAQ />
      <RegistrationCTA />
      <Contact />
      
      <Footer />
    </main>
  );
}

export default App;
