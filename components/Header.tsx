import React from 'react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-brand-accent-500 md:p-0 transition-colors duration-300 font-medium";

  return (
    <header className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center">
          <img src="https://www.janicki-arbeitsrecht.de/files/kanzlei/logo-joerg-janicki.png" className="h-14 lg:h-20 transition-all duration-300" alt="Janicki Arbeitsrecht Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => onNavigate('kontakt')}
            className="text-white bg-brand-action hover:bg-brand-action-600 focus:ring-4 focus:outline-none focus:ring-red-300/50 font-bold rounded-md text-sm px-5 py-2.5 text-center transition-colors duration-300"
          >
            Kontakt
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-body border border-gray-700 rounded-lg bg-brand-primary/95 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                {NAV_LINKS.map(link => (
                    <li key={link.key}>
                        <a href={`#${link.key}`} onClick={(e) => {
                            e.preventDefault();
                            onNavigate(link.key);
                            setIsMenuOpen(false); // Close menu on click
                        }} className={navLinkClasses}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;