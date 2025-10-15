import React, { useState, useEffect } from 'https://esm.sh/react@^19.1.1';
import { useLocation } from 'https://esm.sh/react-router-dom@6';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-bold text-left text-brand-heading text-xl"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </h2>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="py-5 border-t border-gray-200">
          <div className="prose max-w-none text-brand-gray text-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetail: React.FC<{id: string, title: string, children: React.ReactNode}> = ({id, title, children}) => (
    <div id={id} className="mt-6 pt-6 border-t border-gray-200/80 first:mt-0 first:pt-0 first:border-none">
        <h4 className="font-bold text-brand-primary text-lg">{title}</h4>
        <p className="mt-2">{children}</p>
    </div>
);


const RechtsgebietePage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const location = useLocation();

    const accordionData = [
        {
            title: "Wir beraten Arbeitgeber",
            services: ['arbeitsvertrag', 'abmahnung', 'kuendigungsschutz', 'betriebsrat']
        },
        {
            title: "Wir unterstützen Arbeitnehmer",
            services: ['kuendigungsschutz', 'aufhebungsvertrag', 'arbeitsvertrag', 'abmahnung', 'zeugnis']
        },
        {
            title: "Wir vertreten Betriebsräte",
            services: ['betriebsrat']
        },
        {
            title: "Wir nehmen die Interessen von Geschäftsführern, Vorständen und Gesellschaftern wahr",
            services: ['aufhebungsvertrag', 'arbeitsvertrag']
        }
    ];

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const targetIndex = accordionData.findIndex(item => item.services.includes(id));
            
            if (targetIndex !== -1) {
                setOpenIndex(targetIndex);
                setTimeout(() => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300); // Wait for accordion animation
            }
        }
    }, [location.hash]);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-black text-brand-heading font-display">Unsere Rechtsgebiete</h1>
            <p className="text-brand-gray max-w-3xl mx-auto text-lg mt-4">
                Wir bieten spezialisierte Beratung und Vertretung für alle Akteure im Arbeitsrecht. Unser Fokus liegt auf maßgeschneiderten Lösungen für Ihre individuellen Anliegen.
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
             {accordionData.map((item, index) => (
                <AccordionItem 
                    key={index} 
                    title={item.title} 
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                >
                    {item.title === "Wir unterstützen Arbeitnehmer" && (
                         <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>im Anschluss an Änderungs- und Beendigungskündigungen;</li>
                            <li>im Zusammenhang mit Vertragsverhandlungen und Vertragsänderungen;</li>
                            <li>beim Abschluss von Aufhebungsverträgen; bei Abmahnungen und Verweisen;</li>
                            <li>bei Anweisungen des Arbeitgebers;</li>
                            <li>im Bereich von besonderen Schutzrechten (z. B. SGB IX, MuSchG, BErzGG, ArbPlSchG, BetrVG);</li>
                            <li>bei Statusfragen (Arbeitnehmer, freier Mitarbeiter, leitender Angestellter);</li>
                            <li>bei der Durchsetzung finanzieller Ansprüche; bei der Vereinbarung von Altersteilzeit- und Vorruhestandsregelungen.</li>
                        </ul>
                    )}
                    
                    <ServiceDetail id="kuendigungsschutz" title="Kündigungsschutz">
                        Eine Kündigung stellt oft einen tiefen Einschnitt dar. Wir analysieren Ihren Fall, prüfen die rechtlichen Voraussetzungen wie Sozialauswahl und Kündigungsgründe und entwickeln die beste Strategie für Ihre Kündigungsschutzklage. Unser Ziel ist es, Ihren Arbeitsplatz zu erhalten oder eine maximale Abfindung für Sie auszuhandeln.
                    </ServiceDetail>
                    <ServiceDetail id="aufhebungsvertrag" title="Aufhebungsvertrag">
                        Ein Aufhebungsvertrag kann eine sinnvolle Alternative zur Kündigung sein, birgt aber auch Risiken wie Sperrzeiten beim Arbeitslosengeld. Wir verhandeln für Sie faire Konditionen, eine angemessene Abfindung und sorgen für eine rechtssichere Beendigung Ihres Arbeitsverhältnisses.
                    </ServiceDetail>
                    <ServiceDetail id="arbeitsvertrag" title="Arbeitsvertrag">
                        Der Arbeitsvertrag ist die Grundlage jeder Beschäftigung. Wir gestalten und prüfen Arbeitsverträge für Arbeitgeber und Arbeitnehmer, um von Anfang an für klare und faire Verhältnisse zu sorgen und zukünftige Konflikte zu vermeiden.
                    </ServiceDetail>
                    <ServiceDetail id="abmahnung" title="Abmahnung">
                        Eine Abmahnung ist oft die Vorstufe zu einer Kündigung und sollte daher sehr ernst genommen werden. Wir prüfen die Wirksamkeit der Abmahnung, beraten Sie über die richtigen Reaktionen und setzen bei unberechtigten Vorwürfen die Entfernung aus der Personalakte durch.
                    </ServiceDetail>
                     <ServiceDetail id="zeugnis" title="Arbeitszeugnis">
                        Ein faires und wohlwollendes Arbeitszeugnis ist entscheidend für Ihre berufliche Zukunft. Wir prüfen Ihr Zeugnis auf versteckte negative Codes und setzen Ihren Anspruch auf Erteilung oder Korrektur eines rechtlich einwandfreien Zeugnisses durch.
                    </ServiceDetail>
                     <ServiceDetail id="betriebsrat" title="Betriebsrat">
                        Wir beraten und vertreten Betriebsräte in allen Fragen des Betriebsverfassungsrechts, von der Aushandlung von Betriebsvereinbarungen bis zur Durchsetzung von Mitbestimmungsrechten. Für Arbeitgeber sind wir der strategische Partner bei der Zusammenarbeit mit dem Betriebsrat.
                    </ServiceDetail>
                </AccordionItem>
             ))}
        </div>
      </div>
    </div>
  );
};

export default RechtsgebietePage;