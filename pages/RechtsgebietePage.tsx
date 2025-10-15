import React, { useState } from 'https://esm.sh/react@^19.1.1';

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
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="py-5 border-t border-gray-200">
          <div className="prose max-w-none text-brand-gray text-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const RechtsgebietePage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "Wir beraten Arbeitgeber",
            content: <p>Umfassende Beratung für Arbeitgeber in allen Bereichen des individuellen und kollektiven Arbeitsrechts, von der Vertragsgestaltung bis zur Prozessführung.</p>
        },
        {
            title: "Wir unterstützen Arbeitnehmer",
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>im Anschluss an Änderungs- und Beendigungskündigungen;</li>
                    <li>im Zusammenhang mit Vertragsverhandlungen und Vertragsänderungen;</li>
                    <li>beim Abschluss von Aufhebungsverträgen; bei Abmahnungen und Verweisen;</li>
                    <li>bei Anweisungen des Arbeitgebers;</li>
                    <li>im Bereich von besonderen Schutzrechten (z. B. SGB IX, MuSchG, BErzGG, ArbPlSchG, BetrVG);</li>
                    <li>bei Statusfragen (Arbeitnehmer, freier Mitarbeiter, leitender Angestellter);</li>
                    <li>bei der Durchsetzung finanzieller Ansprüche; bei der Vereinbarung von Altersteilzeit- und Vorruhestandsregelungen.</li>
                </ul>
            )
        },
        {
            title: "Wir vertreten Betriebsräte",
            content: <p>Kompetente Vertretung und Schulung von Betriebsräten zur effektiven Wahrnehmung ihrer Mitbestimmungsrechte und gesetzlichen Aufgaben.</p>
        },
        {
            title: "Wir nehmen die Interessen von Geschäftsführern, Vorständen und Gesellschaftern wahr",
            content: <p>Spezialisierte Beratung für Führungskräfte bei der Gestaltung von Dienstverträgen, Haftungsfragen und der Beendigung von Anstellungsverhältnissen.</p>
        }
    ];

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
                    {item.content}
                </AccordionItem>
             ))}
        </div>
      </div>
    </div>
  );
};

export default RechtsgebietePage;