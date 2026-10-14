import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // 'producoes' | 'lojinha' | null
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const scrollTo = (id) => {
    setOpen(false);
    setMobileDropdown(null);
    if (!isHome) {
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(prev => (prev === name ? null : name));
  };

  const producoesItems = [
    { label: 'Jungle Sessions', path: '/sessions' },
    { label: 'Sonora', path: '/sonora' },
    { label: 'Jungle Live', path: '/jungle-live' },
    { label: 'Jungle Rec', path: '/jungle-rec' },
  ];

  const lojinhaItems = [
    { label: 'Jungle', path: '/loja/jungle' },
    { label: 'Decoração', path: '/loja/decoracao' },
    { label: 'Akasha', path: '/loja/akasha' },
  ];

  const isProducoesActive = producoesItems.some(item => location.pathname === item.path);
  const isLojinhaActive = lojinhaItems.some(item => location.pathname === item.path) || location.pathname.startsWith('/loja');

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" aria-label="Jungle Studio Home">
          <img src="/logo/JUNGLE%20BRANCO.svg" alt="Jungle Studio" />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <a
            href="#oestudio"
            className="nav-link"
            onClick={e => { e.preventDefault(); scrollTo('oestudio'); }}
          >
            O estúdio
          </a>

          <Link
            to="/quem-somos"
            className={`nav-link${location.pathname === '/quem-somos' ? ' nav-link-active' : ''}`}
          >
            Quem somos
          </Link>

          <a
            href="#espaco"
            className="nav-link"
            onClick={e => { e.preventDefault(); scrollTo('espaco'); }}
          >
            Espaços
          </a>

          <a
            href="#localizacao"
            className="nav-link"
            onClick={e => { e.preventDefault(); scrollTo('localizacao'); }}
          >
            Como chegar
          </a>

          {/* Produções Dropdown */}
          <div className="nav-dropdown">
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger${isProducoesActive ? ' nav-link-active' : ''}`}
            >
              <span>Produções</span>
              <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              {producoesItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-dropdown-item${location.pathname === item.path ? ' nav-dropdown-item-active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Lojinha Dropdown */}
          <div className="nav-dropdown">
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger${isLojinhaActive ? ' nav-link-active' : ''}`}
            >
              <span>Lojinha</span>
              <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              {lojinhaItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-dropdown-item${location.pathname === item.path ? ' nav-dropdown-item-active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

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
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu${open ? ' active' : ''}`}>
        <div className="nav-mobile-inner">
          <a
            href="#oestudio"
            className="nav-mobile-link"
            onClick={e => { e.preventDefault(); scrollTo('oestudio'); }}
          >
            O estúdio
          </a>

          <Link
            to="/quem-somos"
            className={`nav-mobile-link${location.pathname === '/quem-somos' ? ' sessions' : ''}`}
            onClick={() => setOpen(false)}
          >
            Quem somos
          </Link>

          <a
            href="#espaco"
            className="nav-mobile-link"
            onClick={e => { e.preventDefault(); scrollTo('espaco'); }}
          >
            Espaços
          </a>

          <a
            href="#localizacao"
            className="nav-mobile-link"
            onClick={e => { e.preventDefault(); scrollTo('localizacao'); }}
          >
            Como chegar
          </a>

          {/* Mobile Produções Accordion */}
          <div>
            <button
              type="button"
              className={`nav-mobile-dropdown-btn${mobileDropdown === 'producoes' ? ' open' : ''}${isProducoesActive ? ' sessions' : ''}`}
              onClick={() => toggleMobileDropdown('producoes')}
            >
              <span>Produções</span>
              <ChevronDown size={16} />
            </button>
            {mobileDropdown === 'producoes' && (
              <div className="nav-mobile-submenu">
                {producoesItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="nav-mobile-sublink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Lojinha Accordion */}
          <div>
            <button
              type="button"
              className={`nav-mobile-dropdown-btn${mobileDropdown === 'lojinha' ? ' open' : ''}${isLojinhaActive ? ' sessions' : ''}`}
              onClick={() => toggleMobileDropdown('lojinha')}
            >
              <span>Lojinha</span>
              <ChevronDown size={16} />
            </button>
            {mobileDropdown === 'lojinha' && (
              <div className="nav-mobile-submenu">
                {lojinhaItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="nav-mobile-sublink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
