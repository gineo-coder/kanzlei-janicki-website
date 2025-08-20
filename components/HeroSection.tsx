import React from 'react';

interface HeroSectionProps {
  onNavigate: () => void;
}

const ValueProp: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start text-left p-6 bg-brand-primary/50 backdrop-blur-sm rounded-lg border border-white/10">
    <div className="flex-shrink-0 h-10 w-10 text-brand-accent-500 mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-body font-bold text-brand-heading">{title}</h3>
      <p className="mt-1 text-brand-gray">{children}</p>
    </div>
  </div>
);


const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {

  return (
    <section className="relative bg-brand-primary text-white min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1561042255-12c8b2a75586?q=80&w=2070&auto=format&fit=crop)` }} />
      <div className="absolute inset-0 bg-brand-primary opacity-70"></div>
      
      <div className="relative z-10 px-4 flex-grow flex flex-col items-center justify-center">
         <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display leading-tight mb-4 text-brand-heading">
            Ihr Recht. Unsere Kanzlei.
        </h1>
        <p className="text-xl md:text-2xl text-brand-gray mb-8 font-light max-w-3xl mx-auto font-body">
            Fachanwälte für Arbeitsrecht in Berlin. Kompetent. Engagiert. Auf Ihrer Seite.
        </p>
        <button
            onClick={onNavigate}
            className="inline-flex justify-center items-center py-3 px-8 text-base font-bold text-center text-white rounded-md border-2 border-white hover:bg-white hover:text-brand-primary focus:ring-4 focus:ring-gray-300/50 transition-colors transform hover:scale-105"
        >
            Mehr über uns
        </button>
      </div>

       <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueProp
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>}
            title="Erfahrung & Expertise"
          >
            Jahrzehntelange Erfahrung im deutschen Arbeitsrecht.
          </ValueProp>
          <ValueProp
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>}
            title="Persönliche Betreuung"
          >
            Ihr Fall ist bei uns Chefsache.
          </ValueProp>
          <ValueProp
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>}
            title="Strategische Beratung"
          >
             Wir entwickeln die optimale Strategie für Ihren Erfolg.
          </ValueProp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;