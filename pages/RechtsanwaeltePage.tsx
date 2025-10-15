import React from 'https://esm.sh/react@^19.1.1';
import { Link } from 'https://esm.sh/react-router-dom@6';
import { TEAM_MEMBERS } from '../constants';
import type { Lawyer } from '../types';

const LawyerTeaserCard: React.FC<{ lawyer: Lawyer }> = ({ lawyer }) => (
  <div className="grid md:grid-cols-3 gap-8 items-center bg-gray-50 p-8 rounded-lg">
    <div className="md:col-span-1">
        <img 
            className="w-full h-auto object-cover rounded-md shadow-lg" 
            src={lawyer.imageUrl} 
            alt={`Portrait von ${lawyer.name}`} 
        />
    </div>
    <div className="md:col-span-2">
      <h3 className="text-3xl font-bold font-display text-brand-heading">{lawyer.name}</h3>
      <p className="text-gray-500 font-body text-lg">{lawyer.title}</p>
      <p className="mt-1 text-brand-accent font-semibold font-body text-xl mb-4">{lawyer.specialization}</p>
      <div className="prose max-w-none text-brand-gray text-lg mb-6">
        <p>{lawyer.description.substring(0, 150)}...</p>
      </div>
      <Link to={`/rechtsanwaelte/${lawyer.slug}`} className="font-semibold text-brand-accent hover:text-brand-accent-600 self-start mt-auto font-body transition-colors">
        Mehr erfahren &rarr;
      </Link>
    </div>
  </div>
);

const RechtsanwaeltePage: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-black text-brand-heading font-display">Ihre persönlichen Ansprechpartner</h1>
            <p className="text-brand-gray max-w-3xl mx-auto text-lg mt-4">
                Lernen Sie die Köpfe hinter der Kanzlei Janicki kennen. Wir setzen uns persönlich und mit vollem Engagement für Ihr Recht ein.
            </p>
        </div>
        
        <div className="space-y-12 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((lawyer) => (
                <LawyerTeaserCard key={lawyer.name} lawyer={lawyer} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RechtsanwaeltePage;