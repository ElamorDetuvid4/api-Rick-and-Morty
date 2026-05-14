import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import PortalBackground from './components/PortalBackground.jsx';
import CharacterDetail from './pages/CharacterDetail.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Species from './pages/Species.jsx';

export default function App() {
  return (
    <>
      <PortalBackground />
      <Header />
      <main className="main-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:speciesName" element={<Species />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
