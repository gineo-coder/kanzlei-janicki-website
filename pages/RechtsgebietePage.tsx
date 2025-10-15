import React, { useEffect, useState } from 'https://esm.sh/react@^19.1.1';
import { useLocation } from 'https://esm.sh/react-router-dom@6';
import { SERVICES } from '../constants';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-left text-xl font-semibold text-brand-heading focus:outline-none"
            >
                <span>{title}</span>
                <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
                <div className="prose max-w-none text-brand-gray text-lg">{children}</div>
            </div>
        </div>
    );
};


const RechtsgebietePage: React.FC = () => {
    const location = useLocation();
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                     const headerOffset = 100; // height of fixed header
                     const elementPosition = element.getBoundingClientRect().top;
                     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
   
                     window.scrollTo({
                         top: offsetPosition,
                         behavior: 'smooth'
                     });
                }, 100);
            }
        }
    }, [location]);


  return (
    <>
      <section className="relative bg-brand-primary text-white pt-40 pb-20 text-left overflow-hidden">
        <div 
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://www.janicki-arbeitsrecht.de/files/kanzlei/janicki-arbeitsrecht.jpg)` }}
        />
        <div className="relative max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black font-display mb-6">Arbeitsrecht in allen Facetten</h1>
          <div className="text-lg text-gray-200 mt-4 max-w-4xl font-body space-y-4">
            <p>Die Kanzlei Dr. Janicki & Kollegen ist von München aus im ganzen Bundesgebiet tätig und betreut <strong>Arbeitgeber und Arbeitnehmer</strong> aus nahezu allen Bereichen – insbesondere dem produzierenden Gewerbe, dem Dienstleistungsbereich und dem öffentlichen Dienst.</p>
            <p><strong>Organvertreter</strong> – ob Vorstand oder Geschäftsführer, Aufsichtsrat oder Gesellschafter – gehören ebenso zu unserer ständigen Klientel wie Führungskräfte aus Industrie und Handel.</p>
            <p>Da es uns um die Lösung arbeitsrechtlicher Problemstellungen geht, vertreten wir auch <strong>Betriebsräte</strong> bei betriebsverfassungsrechtlichen Themen. Ob es sich um eine Betriebsänderung mit Interessenausgleich und Sozialplan, Begleitung von Vertragsbeendigungen (Kündigung, Abwicklungsvertrag, Aufhebungsvertrag) oder arbeitsgerichtliche Prozesse im Urteils- oder Beschlussverfahren handelt – wir sind Experten für alle Themen, die den Bereich Human Resources betreffen.</p>
            <p className="font-bold">Dabei ist es für uns wichtig, das Arbeitsrecht in der tatsächlichen Komplexität des Arbeitslebens zu sehen und zu verstehen.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {SERVICES.map((service) => (
            <div id={service.slug} key={service.title} className="flex flex-col md:flex-row items-start gap-8">
              <div className="text-brand-accent flex-shrink-0 md:w-1/5 text-center md:text-left">
                {service.icon}
              </div>
              <div className="md:w-4/5">
                <h2 className="text-3xl font-bold font-display text-brand-heading mb-4">{service.title}</h2>
                <div className="prose max-w-none text-brand-gray text-lg lg:text-xl">
                  <p>{service.detailedDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
             <AccordionItem title="Wir beraten Arbeitgeber" isOpen={openAccordion === 'ag'} onClick={() => toggleAccordion('ag')}>
                <p>Umfassende Beratung in allen arbeitsrechtlichen Belangen, von der Vertragsgestaltung bis zur Prozessführung.</p>
             </AccordionItem>
             <AccordionItem title="Wir unterstützen Arbeitnehmer" isOpen={openAccordion === 'an'} onClick={() => toggleAccordion('an')}>
                <ul>
                    <li>im Anschluss an Änderungs- und Beendigungskündigungen;</li>
                    <li>im Zusammenhang mit Vertragsverhandlungen und Vertragsänderungen;</li>
                    <li>beim Abschluss von Aufhebungsverträgen; bei Abmahnungen und Verweisen;</li>
                    <li>bei Anweisungen des Arbeitgebers;</li>
                    <li>im Bereich von besonderen Schutzrechten (z. B. SGB IX, MuSchG, BUrlG, ArbPlSchG, BetrVG);</li>
                    <li>bei Statusfragen (Arbeitnehmer, freier Mitarbeiter, leitender Angestellter);</li>
                    <li>bei der Durchsetzung finanzieller Ansprüche; bei der Vereinbarung von Altersteilzeit- und Vorruhestandsregelungen.</li>
                </ul>
             </AccordionItem>
             <AccordionItem title="Wir vertreten Betriebsräte" isOpen={openAccordion === 'br'} onClick={() => toggleAccordion('br')}>
                <p>Kompetente Vertretung in allen betriebsverfassungsrechtlichen Angelegenheiten und Einigungsstellenverfahren.</p>
             </AccordionItem>
             <AccordionItem title="Wir nehmen die Interessen von Geschäftsführern, Vorständen und Gesellschaftern wahr" isOpen={openAccordion === 'gf'} onClick={() => toggleAccordion('gf')}>
                <p>Beratung bei der Gestaltung von Dienstverträgen, bei Haftungsfragen und in Trennungssituationen.</p>
             </AccordionItem>
        </div>
      </section>
    </>
  );
};

export default RechtsgebietePage;