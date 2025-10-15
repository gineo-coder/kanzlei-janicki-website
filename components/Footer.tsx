import React from 'https://esm.sh/react@^19.1.1';
import { Link, useNavigate } from 'https://esm.sh/react-router-dom@6';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
      if (path.startsWith('/#')) {
        navigate('/');
        setTimeout(() => {
            const sectionId = path.substring(2);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        navigate(path);
      }
  }

  return (
    <footer className="bg-brand-primary text-gray-300">
      <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-bold whitespace-nowrap font-display text-white">KANZLEI DR. JANICKI</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-xs font-body">Fachanwälte für Arbeitsrecht. <br/>Modern. Kompetent. Durchsetzungsstark.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-white font-body">Navigation</h2>
              <ul className="text-gray-300 font-medium font-body">
                {NAV_LINKS.map(link => (
                    <li key={link.name} className="mb-4">
                        <a href={link.path} onClick={(e) => { e.preventDefault(); handleNavigate(link.path); }} className="hover:text-brand-accent transition-colors">{link.name}</a>
                    </li>
                ))}
                 <li className="mb-4">
                        <a href="/#kontakt" onClick={(e) => { e.preventDefault(); handleNavigate('/#kontakt'); }} className="hover:text-brand-accent transition-colors">Kontakt</a>
                    </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-white font-body">Rechtliches</h2>
              <ul className="text-gray-300 font-medium font-body">
                <li className="mb-4">
                  <a href="#" className="hover:text-brand-accent transition-colors">Impressum</a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-accent transition-colors">Datenschutz</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-white font-body">Kontakt</h2>
              <ul className="text-gray-300 font-medium font-body">
                 <li className="mb-2">
                    Bahnhofstr. 25
                </li>
                 <li className="mb-4">
                    86938 Schondorf am Ammersee
                </li>
                <li className="mb-4">
                  <a href="mailto:kanzlei@janicki-arbeitsrecht.de" className="hover:text-brand-accent transition-colors">kanzlei@janicki-arbeitsrecht.de</a>
                </li>
                <li>
                  <a href="tel:+4981929949670" className="hover:text-brand-accent transition-colors">+49 (0)8192-99 49 67-0</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center font-body">© 2025 <a href="#" className="hover:text-brand-accent transition-colors">Janicki Arbeitsrecht</a>. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;