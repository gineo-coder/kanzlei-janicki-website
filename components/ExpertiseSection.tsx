
import React from 'react';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-brand-primary p-8 text-center flex flex-col items-center group transition-all duration-300 hover:bg-white/5 rounded-lg tilt-card">
        <div className="text-brand-accent-500 mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-heading mb-3">{title}</h3>
        <p className="text-brand-gray text-base font-body">{description}</p>
    </div>
);

const ExpertiseSection: React.FC = () => {
    
    const services = [
        {
            title: "Kündigungsschutz",
            description: "Wir prüfen die Rechtmäßigkeit von Kündigungen und vertreten Sie im Kündigungsschutzprozess.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        },
        {
            title: "Aufhebungsvertrag",
            description: "Wir verhandeln für Sie optimale Konditionen bei Aufhebungsverträgen und Abfindungszahlungen.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 016-6h4a6 6 0 016 6z" /></svg>
        },
        {
            title: "Arbeitsvertrag",
            description: "Gestaltung und Prüfung von Arbeitsverträgen, um rechtliche Fallstricke von vornherein zu vermeiden.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        },
        {
            title: "Abmahnung",
            description: "Wir beraten Sie über die richtigen Schritte nach Erhalt oder bei der Aussprache einer Abmahnung.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        },
        {
            title: "Zeugnis",
            description: "Anspruch auf Erteilung und Korrektur eines fairen und rechtlich einwandfreien Arbeitszeugnisses.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        },
        {
            title: "Betriebsrat",
            description: "Beratung und Vertretung in allen betriebsverfassungsrechtlichen Angelegenheiten.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        },
    ];

    return (
        <section className="bg-brand-primary py-20 lg:py-32">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                     <h4 className="font-bold text-brand-accent-500 uppercase tracking-widest font-body mb-2">Unsere Expertise</h4>
                    <h2 className="text-3xl lg:text-4xl font-black text-brand-heading font-display mt-2 mb-4">Unsere Rechtsgebiete</h2>
                    <p className="text-brand-gray max-w-3xl mx-auto text-lg font-body">
                        Wir vertreten sowohl Arbeitgeber als auch Arbeitnehmer mit strategischem Weitblick und juristischer Präzision.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {services.map(service => (
                       <ServiceCard key={service.title} {...service} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;