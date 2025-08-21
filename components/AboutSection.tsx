import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-4 border-brand-accent-500 rounded-md z-0"></div>
             <img className="relative rounded-md shadow-xl w-full h-auto object-cover z-10" src="https://www.janicki-arbeitsrecht.de/files/kanzlei/janicki-arbeitsrecht.jpg" alt="Moderne Kanzleiräume" />
          </div>
          <div className="text-brand-dark-text">
            <h4 className="font-bold text-brand-accent-500 uppercase tracking-widest font-body">Kanzlei Janicki</h4>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark-text font-display mt-2 mb-6">Spezialisten für Arbeitsrecht</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed font-body">
              Wir sind eine ausschließlich auf das Arbeitsrecht spezialisierte Kanzlei. Wir beraten und vertreten Arbeitgeber, Arbeitnehmer sowie Führungskräfte und Betriebsräte in allen Fragen des individuellen und kollektiven Arbeitsrechts.
            </p>
            <ul className="space-y-4 font-body text-gray-700">
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-brand-accent-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>100% Spezialisierung:</strong> Tiefgehendes Wissen für Ihren Fall.</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 text-brand-accent-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Strategischer Weitblick:</strong> Wir kennen beide Seiten und finden die optimale Strategie.</span>
                </li>
                 <li className="flex items-start">
                    <svg className="w-6 h-6 text-brand-accent-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span><strong>Beratung auf höchstem Niveau:</strong> Garantiert durch Kompetenz und Engagement.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;