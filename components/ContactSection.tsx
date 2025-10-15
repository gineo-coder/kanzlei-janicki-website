import React from 'https://esm.sh/react@^19.1.1';

interface ContactSectionProps {
  onNavigate: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-brand-light py-20 lg:py-32">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        <h4 className="font-bold text-brand-accent uppercase tracking-widest font-body mb-2">BEREIT FÜR DEN NÄCHSTEN SCHRITT?</h4>
        <h2 className="text-3xl lg:text-5xl font-black font-display mt-2 mb-6 text-brand-heading">Nehmen Sie Kontakt auf</h2>
        <p className="text-brand-gray max-w-3xl mx-auto text-lg mb-8 font-body">
            Haben Sie eine Frage oder ein konkretes Anliegen? Kontaktieren Sie uns für eine kostenlose und unverbindliche Ersteinschätzung. Wir sind für Sie da.
        </p>
        <button
            onClick={onNavigate}
            className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-white rounded-md bg-brand-accent hover:bg-brand-accent-600 focus:ring-4 focus:ring-orange-300/50 transition-transform transform hover:scale-105"
        >
            Kostenlose Ersteinschätzung
        </button>
      </div>
    </section>
  );
};

export default ContactSection;