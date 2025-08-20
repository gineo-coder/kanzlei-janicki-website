
import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 lg:py-24">
      <div className="max-w-screen-md mx-auto px-4 text-center">
        <blockquote className="relative">
          <p className="text-3xl lg:text-4xl font-display italic text-brand-dark-text leading-relaxed">
            „Auf drei Säulen beruht die Welt: auf Recht, auf Wahrheit und auf Frieden.“
          </p>
          <cite className="block mt-6 text-lg font-body text-gray-500">
            – Talmud, Pirkei Avot 1:18
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
