import React, { useEffect } from 'https://esm.sh/react@^19.1.1';
import { Outlet, useLocation } from 'https://esm.sh/react-router-dom@6';
import Header from './Header';
import Footer from './Footer';
import Disclaimer from './Disclaimer';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white font-body text-brand-dark-text">
      <Disclaimer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;