import React from 'react';
import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div id="home">
        <HeroSection onNavigate={() => scrollToSection('kanzlei')} />
      </div>
      <div id="quote">
        <QuoteSection />
      </div>
      <div id="kanzlei">
        <AboutSection />
      </div>
      <div id="rechtsanwaelte-teaser">
        <TeamSection />
      </div>
      <div id="aktuelles">
        <NewsSection />
      </div>
      <div id="kontakt">
        <ContactSection onNavigate={() => scrollToSection('kontakt')}/>
      </div>
    </>
  );
};

export default HomePage;
