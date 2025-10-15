import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { Lawyer } from '../types';

const DetailedLawyerCard: React.FC<{ lawyer: Lawyer, description: string }> = ({ lawyer, description }) => (
  <div className="grid md:grid-cols-3 gap-8 items-center">
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
      <div className="prose max-w-none text-brand-gray text-lg">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const RechtsanwaeltePage: React.FC = () => {
    const lawyerDetails = [
        {
            ...TEAM_MEMBERS[0],
            description: "Dr. Jörg Janicki ist Gründer und Namensgeber der Kanzlei. Mit über 20 Jahren Erfahrung als Fachanwalt für Arbeitsrecht vertritt er mit Leidenschaft und strategischem Geschick die Interessen seiner Mandanten. Sein Schwerpunkt liegt in der Beratung von Unternehmen und Führungskräften bei komplexen Restrukturierungen und Verhandlungen mit Betriebsräten."
        },
        {
            ...TEAM_MEMBERS[1],
            description: "Jonas Jung ist ein engagierter Rechtsanwalt mit einem klaren Fokus auf das individuelle Arbeitsrecht. Er berät insbesondere Arbeitnehmer in allen Fragen rund um Kündigung, Abfindung und Arbeitszeugnis. Seine empathische und zielstrebige Herangehensweise wird von Mandanten besonders geschätzt."
        }
    ]

  return (
    <div className="bg-white py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-black text-brand-heading font-display">Ihre persönlichen Ansprechpartner</h1>
            <p className="text-brand-gray max-w-3xl mx-auto text-lg mt-4">
                Lernen Sie die Köpfe hinter der Kanzlei Janicki kennen. Wir setzen uns persönlich und mit vollem Engagement für Ihr Recht ein.
            </p>
        </div>
        
        <div className="space-y-20 max-w-5xl mx-auto">
            {lawyerDetails.map((lawyer) => (
                <DetailedLawyerCard key={lawyer.name} lawyer={lawyer} description={lawyer.description} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RechtsanwaeltePage;
