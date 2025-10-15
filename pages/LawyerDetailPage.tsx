import React from 'https://esm.sh/react@^19.1.1';
import { useParams, Link } from 'https://esm.sh/react-router-dom@6';
import { TEAM_MEMBERS } from '../constants';

const LawyerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const lawyer = TEAM_MEMBERS.find(m => m.slug === slug);

  if (!lawyer) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold">Anwalt nicht gefunden</h1>
        <Link to="/rechtsanwaelte" className="text-brand-accent hover:underline mt-4 inline-block">Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-brand-primary text-white h-[50vh] min-h-[400px] flex flex-col items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lawyer.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-brand-primary opacity-25"></div>
        
        <div className="relative z-10 px-4">
           <h1 className="text-5xl md:text-6xl font-black font-display leading-tight mb-2 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
              {lawyer.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto font-body" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}>
              {lawyer.specialization}
          </p>
        </div>
      </section>

      <div className="bg-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
           <div className="prose max-w-none text-brand-gray text-lg lg:text-xl">
                <p>{lawyer.description}</p>
                {/* Hier könnten weitere Details, wie z.B. Lebenslauf, Veröffentlichungen etc. stehen */}
           </div>
           <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/rechtsanwaelte" className="font-semibold text-brand-accent hover:text-brand-accent-600 self-start font-body transition-colors">
                    &larr; Zurück zur Anwaltsübersicht
                </Link>
           </div>
        </div>
      </div>
    </>
  );
};

export default LawyerDetailPage;