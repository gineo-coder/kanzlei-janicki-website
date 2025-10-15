import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RechtsgebietePage from './pages/RechtsgebietePage';
import RechtsanwaeltePage from './pages/RechtsanwaeltePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rechtsgebiete" element={<RechtsgebietePage />} />
          <Route path="rechtsanwaelte" element={<RechtsanwaeltePage />} />
          {/* Weitere Routen können hier hinzugefügt werden */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;