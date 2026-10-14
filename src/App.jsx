import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JungleSessions from './pages/JungleSessions';
import Sonora from './pages/Sonora';
import ComingSoon from './pages/ComingSoon';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<JungleSessions />} />
          <Route path="/sonora" element={<Sonora />} />
          <Route path="/jungle-live" element={<ComingSoon title="Jungle Live" subtitle="Em breve conteúdo" />} />
          <Route path="/live" element={<ComingSoon title="Jungle Live" subtitle="Em breve conteúdo" />} />
          <Route path="/jungle-rec" element={<ComingSoon title="Jungle Rec" subtitle="Em breve conteúdo" />} />
          <Route path="/rec" element={<ComingSoon title="Jungle Rec" subtitle="Em breve conteúdo" />} />
          <Route path="/quem-somos" element={<ComingSoon title="Quem Somos" subtitle="Em breve conteúdo" />} />
          <Route path="/loja" element={<ComingSoon title="Lojinha" subtitle="Em breve conteúdo" />} />
          <Route path="/loja/jungle" element={<ComingSoon title="Lojinha - Jungle" subtitle="Em breve conteúdo" />} />
          <Route path="/loja/decoracao" element={<ComingSoon title="Lojinha - Decoração" subtitle="Em breve conteúdo" />} />
          <Route path="/loja/akasha" element={<ComingSoon title="Lojinha - Akasha" subtitle="Em breve conteúdo" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
