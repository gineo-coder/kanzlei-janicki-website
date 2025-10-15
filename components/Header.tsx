import React, { useState, useEffect } from 'https://esm.sh/react@^19.1.1';
import { Link, useNavigate } from 'https://esm.sh/react-router-dom@6';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      setIsMenuOpen(false);
  }

  const navLinkBaseClasses = "block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors duration-300 font-medium";

  return (
    <header className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="https://www.janicki-arbeitsrecht.de/files/kanzlei/logo-joerg-janicki.png" className="h-14 lg:h-20 transition-all duration-300" alt="Janicki Arbeitsrecht Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => handleNavigate('/#kontakt')}
            className="text-white bg-brand-accent hover:bg-brand-accent-600 focus:ring-4 focus:outline-none focus:ring-orange-300/50 font-bold rounded-md text-sm px-5 py-2.5 text-center transition-colors duration-300"
          >
            Kontakt
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400 ${isScrolled ? 'text-brand-primary' : 'text-white'}`} aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-body border border-gray-200 md:border-0 rounded-lg bg-white md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                {NAV_LINKS.map(link => (
                    <li key={link.name}>
                        <a href={link.path} onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(link.path);
                        }} className={`${navLinkBaseClasses} text-brand-primary hover:text-brand-accent md:hover:text-brand-accent ${isScrolled ? 'md:text-brand-primary' : 'md:text-white'}`}>
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