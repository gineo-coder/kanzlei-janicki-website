import React, { useState, useEffect } from 'https://esm.sh/react@^19.1.1';
import { Link, useNavigate, useLocation } from 'https://esm.sh/react-router-dom@6';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setIsSubMenuOpen(false);
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

  const headerBgClass = isHomePage ? (isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent') : 'bg-white shadow-lg';
  const textColorClass = isHomePage && !isScrolled && !isOpen ? 'text-white' : 'text-brand-primary';
  const logoWhiteClass = isHomePage && !isScrolled && !isOpen ? 'opacity-100' : 'opacity-0';
  const logoBlueClass = isHomePage && !isScrolled && !isOpen ? 'opacity-0' : 'opacity-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="relative flex items-center h-full w-48 text-xl font-bold font-display tracking-wider">
            <span className={`absolute inset-0 transition-opacity duration-300 ${logoWhiteClass}`}>
                <img src="/logo-joerg-janicki.png" alt="Kanzlei Dr. Janicki Logo Weiß" className="h-8 w-auto" />
            </span>
            <span className={`absolute inset-0 transition-opacity duration-300 ${logoBlueClass}`}>
                <img src="/logo-joerg-janicki-blue.png" alt="Kanzlei Dr. Janicki Logo Blau" className="h-8 w-auto" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_LINKS.map(link => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.sublinks && setIsSubMenuOpen(true)}
                onMouseLeave={() => link.sublinks && setIsSubMenuOpen(false)}
              >
                <a
                  href={link.path}
                  onClick={(e) => { e.preventDefault(); handleNavigate(link.path); }}
                  className={`${textColorClass} font-semibold font-body text-lg hover:text-brand-accent transition-colors px-3 py-2 rounded-md`}
                >
                  {link.name}
                </a>
                {link.sublinks && isSubMenuOpen && (
                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5">
                    {link.sublinks.map(sublink => (
                       <a
                        key={sublink.name}
                        href={sublink.path}
                        onClick={(e) => { e.preventDefault(); handleNavigate(sublink.path); }}
                        className="block px-4 py-2 text-sm text-brand-dark-text hover:bg-gray-100 hover:text-brand-accent"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <a
                href="/#kontakt"
                onClick={(e) => { e.preventDefault(); handleNavigate('/#kontakt'); }}
                className="bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-brand-accent-600 transition-all transform hover:scale-105 ml-4"
              >
                Kontakt
              </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${textColorClass} focus:outline-none`}>
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
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="flex flex-col items-center py-4 space-y-2">
          {NAV_LINKS.map(link => (
            <React.Fragment key={link.name}>
              <a
                href={link.path}
                onClick={(e) => { e.preventDefault(); handleNavigate(link.path); }}
                className="text-brand-primary font-semibold font-body text-lg w-full text-center py-2"
              >
                {link.name}
              </a>
              {link.sublinks && (
                <div className="flex flex-col items-center w-full pl-4">
                   {link.sublinks.map(sublink => (
                     <a
                        key={sublink.name}
                        href={sublink.path}
                        onClick={(e) => { e.preventDefault(); handleNavigate(sublink.path); }}
                        className="text-brand-gray font-medium font-body text-base w-full text-center py-1"
                      >
                        {sublink.name}
                      </a>
                   ))}
                </div>
              )}
            </React.Fragment>
          ))}
           <a
                href="/#kontakt"
                onClick={(e) => { e.preventDefault(); handleNavigate('/#kontakt'); }}
                className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-brand-accent-600 transition-all mt-4"
              >
                Kontakt
              </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;