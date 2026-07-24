import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JungleSessions from './pages/JungleSessions';
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
          <Route path="/quem-somos" element={<ComingSoon title="Quem Somos" />} />
          <Route path="/sonora" element={<ComingSoon title="Sonora" />} />
          <Route path="/loja" element={<ComingSoon title="Loja" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
