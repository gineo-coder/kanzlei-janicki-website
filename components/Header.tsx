import React, { useState, useEffect } from 'https://esm.sh/react@^19.1.1';
import { Link, useNavigate } from 'https://esm.sh/react-router-dom@6';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const sectionId = path.substring(2);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-white text-xl font-bold font-display tracking-wider">
            KANZLEI DR. JANICKI
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => { e.preventDefault(); handleNavigate(link.path); }}
                className="text-white font-semibold font-body hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a
                href="/#kontakt"
                onClick={(e) => { e.preventDefault(); handleNavigate('/#kontakt'); }}
                className="bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-brand-accent-600 transition-all transform hover:scale-105"
              >
                Kontakt
              </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-brand-primary`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => { e.preventDefault(); handleNavigate(link.path); }}
              className="text-white font-semibold font-body hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
           <a
                href="/#kontakt"
                onClick={(e) => { e.preventDefault(); handleNavigate('/#kontakt'); }}
                className="bg-brand-accent text-white font-bold py-2 px-6 rounded-md hover:bg-brand-accent-600 transition-all"
              >
                Kontakt
              </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
