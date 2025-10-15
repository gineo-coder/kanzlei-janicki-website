import React from 'https://esm.sh/react@^19.1.1';
import { Link } from 'https://esm.sh/react-router-dom@6';
import { TEAM_MEMBERS } from '../constants';
import type { Lawyer } from '../types';

const LawyerCard: React.FC<{ lawyer: Lawyer }> = ({ lawyer }) => (
  <Link to={`/rechtsanwaelte/${lawyer.slug}`} className="group text-center block">
    <div className="overflow-hidden rounded-md shadow-lg">
        <img 
            className="w-full h-96 object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
            src={lawyer.imageUrl} 
            alt={`Portrait von ${lawyer.name}`} 
        />
    </div>
    <div className="mt-6">
      <h3 className="text-2xl font-bold font-display text-brand-dark-text group-hover:text-brand-accent transition-colors">{lawyer.name}</h3>
      <p className="text-gray-500 font-body">{lawyer.title}</p>
      <p className="mt-1 text-brand-accent font-semibold font-body">{lawyer.specialization}</p>
    </div>
  </Link>
);

const TeamSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
            <h4 className="font-bold text-brand-accent uppercase tracking-widest font-body mb-2">Unsere Anwälte</h4>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-heading font-display mt-2 mb-4">Ihre persönlichen Ansprechpartner</h2>
            <p className="text-brand-gray max-w-3xl mx-auto text-lg font-body">
                Lernen Sie die Köpfe hinter der Kanzlei Janicki kennen. Wir setzen uns persönlich und mit vollem Engagement für Ihr Recht ein.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((lawyer) => (
            <LawyerCard key={lawyer.name} lawyer={lawyer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;