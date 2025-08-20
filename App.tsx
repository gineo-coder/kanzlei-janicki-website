
import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import TeamSection from './components/TeamSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    quote: useRef<HTMLDivElement>(null),
    kanzlei: useRef<HTMLDivElement>(null),
    rechtsanwaelte: useRef<HTMLDivElement>(null),
    arbeitsrecht: useRef<HTMLDivElement>(null),
    aktuelles: useRef<HTMLDivElement>(null),
    kontakt: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
        triggerOnce: true,
      } as any
    );

    Object.values(sections).forEach((sectionRef) => {
      if (sectionRef.current) {
        const child = sectionRef.current.children[0] as HTMLElement;
        if (child) {
            child.classList.add('opacity-0');
            observer.observe(child);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-light font-body text-brand-dark-text">
      <Disclaimer />
      <Header onNavigate={scrollToSection} />
      <main>
        <div ref={sections.home}>
          <HeroSection onNavigate={() => scrollToSection('kanzlei')} />
        </div>
        <div ref={sections.quote}>
          <QuoteSection />
        </div>
        <div ref={sections.kanzlei}>
          <AboutSection />
        </div>
        <div ref={sections.arbeitsrecht}>
          <ExpertiseSection />
        </div>
        <div ref={sections.rechtsanwaelte}>
          <TeamSection />
        </div>
        <div ref={sections.aktuelles}>
          <NewsSection />
        </div>
        <div ref={sections.kontakt}>
          <ContactSection onNavigate={() => scrollToSection('kontakt')}/>
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default App;