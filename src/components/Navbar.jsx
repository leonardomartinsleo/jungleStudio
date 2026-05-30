import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSessions = location.pathname === '/sessions';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const scrollTo = (id) => {
    setOpen(false);
    if (!isHome) { window.location.href = '/#' + id; return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Quem Somos', id: 'quemsomos', type: 'scroll' },
    { label: 'Espaço', id: 'espaco', type: 'scroll' },
    { label: 'Localização', id: 'localizacao', type: 'scroll' },
    { label: 'Jungle Sessions', path: '/sessions', type: 'link' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src="/images/page2_img2.png" alt="Jungle Studio" />
          <span className="nav-logo-text">Jungle Studio</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) =>
            link.type === 'scroll' ? (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link"
                onClick={e => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link${isSessions ? ' nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="nav-divider" />

          <a
            href="#reserva"
            className="nav-cta"
            onClick={e => { e.preventDefault(); scrollTo('reserva'); }}
          >
            <Calendar size={15} />
            Reserve Agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="nav-mobile-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu${open ? ' active' : ''}`}>
        <div className="nav-mobile-inner">
          {navLinks.map((link) =>
            link.type === 'scroll' ? (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-mobile-link"
                onClick={e => { e.preventDefault(); scrollTo(link.id); }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="nav-mobile-link sessions"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="#reserva"
            className="nav-mobile-cta"
            onClick={e => { e.preventDefault(); scrollTo('reserva'); }}
          >
            <Calendar size={16} />
            Reserve Agora
          </a>
        </div>
      </div>
    </nav>
  );
}
