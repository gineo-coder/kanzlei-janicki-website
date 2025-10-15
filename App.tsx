import React from 'https://esm.sh/react@^19.1.1';
import { BrowserRouter, Routes, Route } from 'https://esm.sh/react-router-dom@6';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RechtsgebietePage from './pages/RechtsgebietePage';
import RechtsanwaeltePage from './pages/RechtsanwaeltePage';
import LawyerDetailPage from './pages/LawyerDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rechtsgebiete" element={<RechtsgebietePage />} />
          <Route path="rechtsanwaelte" element={<RechtsanwaeltePage />} />
          <Route path="rechtsanwaelte/:slug" element={<LawyerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;