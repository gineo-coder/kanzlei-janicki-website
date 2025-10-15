import React from 'https://esm.sh/react@^19.1.1';
import { Link } from 'https://esm.sh/react-router-dom@6';
import { SERVICES } from '../constants';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-xl rounded-lg shadow-md tilt-card h-full">
        <div className="text-brand-accent mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-heading mb-3">{title}</h3>
        <p className="text-brand-gray text-base font-body">{description}</p>
    </div>
);

const ExpertiseSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-20 lg:py-32">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                     <h4 className="font-bold text-brand-accent uppercase tracking-widest font-body mb-2">Unsere Expertise</h4>
                    <h2 className="text-3xl lg:text-4xl font-black text-brand-heading font-display mt-2 mb-4">Unsere Rechtsgebiete</h2>
                    <p className="text-brand-gray max-w-3xl mx-auto text-lg font-body">
                        Wir vertreten sowohl Arbeitgeber als auch Arbeitnehmer mit strategischem Weitblick und juristischer Präzision.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {SERVICES.map(service => (
                       <Link to={`/rechtsgebiete#${service.slug}`} key={service.title} className="block">
                           <ServiceCard {...service} />
                       </Link>
                   ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;