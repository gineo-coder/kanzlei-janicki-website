import React from 'react';
import { NAV_LINKS } from '../constants';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-primary text-white border-t border-white/10">
      <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" onClick={() => onNavigate('home')} className="flex items-center">
              <span className="self-center text-2xl font-bold whitespace-nowrap font-display text-white">JANICKI</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs font-body">Fachanwälte für Arbeitsrecht. <br/>Modern. Kompetent. Durchsetzungsstark.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white font-body">Navigation</h2>
              <ul className="text-gray-400 font-medium font-body">
                {NAV_LINKS.map(link => (
                    <li key={link.key} className="mb-4">
                        <a href={`#${link.key}`} onClick={(e) => { e.preventDefault(); onNavigate(link.key); }} className="hover:text-brand-accent-500 transition-colors">{link.name}</a>
                    </li>
                ))}
                 <li className="mb-4">
                        <a href={`#kontakt`} onClick={(e) => { e.preventDefault(); onNavigate('kontakt'); }} className="hover:text-brand-accent-500 transition-colors">Kontakt</a>
                    </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white font-body">Rechtliches</h2>
              <ul className="text-gray-400 font-medium font-body">
                <li className="mb-4">
                  <a href="#" className="hover:text-brand-accent-500 transition-colors">Impressum</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-accent-500 transition-colors">Datenschutz</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white font-body">Kontakt</h2>
              <ul className="text-gray-400 font-medium font-body">
                 <li className="mb-2">
                    Bahnhofstr. 25
                </li>
                 <li className="mb-4">
                    86938 Schondorf am Ammersee
                </li>
                <li className="mb-4">
                  <a href="mailto:kanzlei@janicki-arbeitsrecht.de" className="hover:text-brand-accent-500 transition-colors">kanzlei@janicki-arbeitsrecht.de</a>
                </li>
                <li>
                  <a href="tel:+4981929949670" className="hover:text-brand-accent-500 transition-colors">+49 (0)8192-99 49 67-0</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center font-body">© 2025 <a href="#" className="hover:text-brand-accent-500 transition-colors">Janicki Arbeitsrecht</a>. Alle Rechte vorbehalten.</span>
          {/* Social Media Icons can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;