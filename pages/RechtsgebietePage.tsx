import React, { useEffect } from 'https://esm.sh/react@^19.1.1';
import { useLocation } from 'https://esm.sh/react-router-dom@6';
import { SERVICES } from '../constants';

const RechtsgebietePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                     const headerOffset = 80; // height of fixed header
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
      <section className="bg-brand-primary text-white pt-32 pb-20 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black font-display">Unsere Rechtsgebiete</h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto font-body">
            Wir sind ausschließlich auf das Arbeitsrecht spezialisiert und bieten Ihnen in allen Kernbereichen umfassende Beratung und Vertretung auf höchstem Niveau.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {SERVICES.map((service, index) => (
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
    </>
  );
};

export default RechtsgebietePage;
