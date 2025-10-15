import React, { useEffect, useState } from 'https://esm.sh/react@^19.1.1';
import { useLocation } from 'https://esm.sh/react-router-dom@6';
import { SERVICES } from '../constants';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-left text-xl font-semibold text-brand-heading focus:outline-none hover:text-brand-accent transition-colors"
            >
                <span className="pr-4">{title}</span>
                <svg className={`w-6 h-6 transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pt-2 pb-5' : 'max-h-0'}`}>
                <div className="prose max-w-none text-brand-gray text-lg">{children}</div>
            </div>
        </div>
    );
};

const RechtsgebietePage: React.FC = () => {
    const location = useLocation();
    const [openServiceAccordion, setOpenServiceAccordion] = useState<string | null>(null);
    const [openGroupAccordion, setOpenGroupAccordion] = useState<string | null>(null);

    const toggleServiceAccordion = (slug: string) => {
        setOpenServiceAccordion(openServiceAccordion === slug ? null : slug);
    };
    
    const toggleGroupAccordion = (title: string) => {
        setOpenGroupAccordion(openGroupAccordion === title ? null : title);
    };

    useEffect(() => {
        if (location.hash) {
            const slug = location.hash.replace('#', '');
            const serviceExists = SERVICES.some(service => service.slug === slug);
            
            if(serviceExists) {
                setOpenServiceAccordion(slug);

                setTimeout(() => {
                    const element = document.getElementById(slug);
                    if (element) {
                         const headerOffset = 100; // height of fixed header
                         const elementPosition = element.getBoundingClientRect().top;
                         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
       
                         window.scrollTo({
                             top: offsetPosition,
                             behavior: 'smooth'
                         });
                    }
                }, 100);
            }
        }
    }, [location]);

  return (
    <>
      <section className="relative bg-brand-primary text-white pt-40 pb-20 text-center overflow-hidden min-h-[40vh] flex items-center justify-center">
        <div 
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://www.janicki-arbeitsrecht.de/files/kanzlei/janicki-arbeitsrecht.jpg)` }}
        />
        <div className="absolute inset-0 bg-brand-primary opacity-25"></div>
        <div className="relative max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-black font-display" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Unsere Rechtsgebiete</h1>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl font-black font-display text-brand-heading mb-6">Arbeitsrecht in allen Facetten</h2>
          <div className="text-lg text-brand-gray mt-4 max-w-4xl font-body space-y-4 prose max-w-none">
            <p>Die Kanzlei Dr. Janicki & Kollegen ist von München aus im ganzen Bundesgebiet tätig und betreut <strong>Arbeitgeber und Arbeitnehmer</strong> aus nahezu allen Bereichen – insbesondere dem produzierenden Gewerbe, dem Dienstleistungsbereich und dem öffentlichen Dienst.</p>
            <p><strong>Organvertreter</strong> – ob Vorstand oder Geschäftsführer, Aufsichtsrat oder Gesellschafter – gehören ebenso zu unserer ständigen Klientel wie Führungskräfte aus Industrie und Handel.</p>
            <p>Da es uns um die Lösung arbeitsrechtlicher Problemstellungen geht, vertreten wir auch <strong>Betriebsräte</strong> bei betriebsverfassungsrechtlichen Themen. Ob es sich um eine Betriebsänderung mit Interessenausgleich und Sozialplan, Begleitung von Vertragsbeendigungen (Kündigung, Abwicklungsvertrag, Aufhebungsvertrag) oder arbeitsgerichtliche Prozesse im Urteils- oder Beschlussverfahren handelt – wir sind Experten für alle Themen, die den Bereich Human Resources betreffen.</p>
            <p className="font-bold text-brand-dark-text">Dabei ist es für uns wichtig, das Arbeitsrecht in der tatsächlichen Komplexität des Arbeitslebens zu sehen und zu verstehen.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-black font-display text-brand-heading mb-8 text-center">Unsere Kernkompetenzen</h2>
            {SERVICES.map((service) => (
                <div id={service.slug} key={service.slug}>
                    <AccordionItem 
                        title={service.title} 
                        isOpen={openServiceAccordion === service.slug} 
                        onClick={() => toggleServiceAccordion(service.slug)}
                    >
                        <p>{service.detailedDescription}</p>
                    </AccordionItem>
                </div>
            ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-black font-display text-brand-heading mb-8 text-center">Für wen wir tätig sind</h2>
             <AccordionItem title="Wir beraten Arbeitgeber" isOpen={openGroupAccordion === 'ag'} onClick={() => toggleGroupAccordion('ag')}>
                <p>Umfassende Beratung in allen arbeitsrechtlichen Belangen, von der Vertragsgestaltung bis zur Prozessführung.</p>
             </AccordionItem>
             <AccordionItem title="Wir unterstützen Arbeitnehmer" isOpen={openGroupAccordion === 'an'} onClick={() => toggleGroupAccordion('an')}>
                <ul className="list-disc pl-6 space-y-2">
                    <li>im Anschluss an Änderungs- und Beendigungskündigungen;</li>
                    <li>im Zusammenhang mit Vertragsverhandlungen und Vertragsänderungen;</li>
                    <li>beim Abschluss von Aufhebungsverträgen; bei Abmahnungen und Verweisen;</li>
                    <li>bei Anweisungen des Arbeitgebers;</li>
                    <li>im Bereich von besonderen Schutzrechten (z. B. SGB IX, MuSchG, BUrlG, ArbPlSchG, BetrVG);</li>
                    <li>bei Statusfragen (Arbeitnehmer, freier Mitarbeiter, leitender Angestellter);</li>
                    <li>bei der Durchsetzung finanzieller Ansprüche; bei der Vereinbarung von Altersteilzeit- und Vorruhestandsregelungen.</li>
                </ul>
             </AccordionItem>
             <AccordionItem title="Wir vertreten Betriebsräte" isOpen={openGroupAccordion === 'br'} onClick={() => toggleGroupAccordion('br')}>
                <p>Kompetente Vertretung in allen betriebsverfassungsrechtlichen Angelegenheiten und Einigungsstellenverfahren.</p>
             </AccordionItem>
             <AccordionItem title="Wir nehmen die Interessen von Geschäftsführern, Vorständen und Gesellschaftern wahr" isOpen={openGroupAccordion === 'gf'} onClick={() => toggleGroupAccordion('gf')}>
                <p>Beratung bei der Gestaltung von Dienstverträgen, bei Haftungsfragen und in Trennungssituationen.</p>
             </AccordionItem>
        </div>
      </section>
    </>
  );
};

export default RechtsgebietePage;