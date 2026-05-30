import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const sessions = [
  {
    id: 'QDV430zt9KM',
    title: 'Jungle Sessions #01',
    dj: 'JON SOARES | Afrobeats, Brasilidades & Latinidades',
    desc: 'A primeira edição que deu origem a tudo. Vibes únicas, cenário selvagem e um set que ficou na memória.',
  },
  {
    id: 'ZIgOWy9kugM',
    title: 'Jungle Sessions #02',
    dj: 'DJ LAURAH - House, Funk & Garage',
    desc: 'Uma mistura de eletrônico e afrobeats que tomou conta da Sala PRO. A garrafa ball nunca girou tanto.',
  },
  {
    id: 'tek8DrLvVfk',
    title: 'Jungle Sessions #03',
    dj: 'IURI DJ | PRIDE DIVAS',
    desc: 'House music com vista para o centro histórico. Quando a selva encontra a cidade.',
  },
  {
    id: 'HiPssIKxiZE',
    title: 'Jungle Sessions #04',
    dj: ' DIDJIÊ | DISCO DELIRIUM',
    desc: 'Deep techno às 22h. A noite no Jungle tem um som muito próprio.',
  },
  {
    id: 'V1DiQQqjAqc',
    title: 'Jungle Sessions #05',
    dj: 'JOSEPH RODRIGUEZ DJ | BLACK Y2K',
    desc: 'Afro house e muita planta. Esse set foi pura sensação.',
  },
  {
    id: 'lQx4YDZX6K4',
    title: 'Jungle Sessions #06',
    dj: ' DJ FATAH | PURO PERREO PAPI | Reggaeton e Música Urbana Latina',
    desc: 'Funk experimental, ritmo pesado e uma estética visual que chamou atenção nas redes.',
  },
];

export default function JungleSessions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef(null);
  const scrollInterval = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  const activeSession = sessions[activeIdx];

  // Duplicate sessions for infinite scroll feel
  const extendedSessions = [...sessions, ...sessions, ...sessions];

  const handleThumbClick = (realIndex) => {
    setActiveIdx(realIndex);
  };

  // Auto-scroll carousel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    scrollInterval.current = setInterval(() => {
      setScrollPos(prev => {
        const maxScroll = track.scrollWidth / 3;
        const next = prev + 1;
        if (next >= maxScroll) {
          return 0;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(scrollInterval.current);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollPos;
    }
  }, [scrollPos]);

  const scrollCarousel = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = 220;
    setScrollPos(prev => prev + (direction === 'left' ? -scrollAmount : scrollAmount));
  };

  const pauseScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  const resumeScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    scrollInterval.current = setInterval(() => {
      setScrollPos(prev => {
        const maxScroll = track.scrollWidth / 3;
        const next = prev + 1;
        if (next >= maxScroll) return 0;
        return next;
      });
    }, 30);
  };

  return (
    <>
      {/* HERO */}
      <section className="sessions-hero">
        <span className="sessions-hero-eyebrow">
          🎧 Conteúdo Audiovisual Exclusivo
        </span>
        <h1>
          Bem-vindo ao<br />
          <em>Jungle Sessions.</em>
        </h1>
        <p>
          Um projeto audiovisual exclusivo para DJs, gravado no cenário único do Jungle Studio — no coração de São Paulo.
        </p>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'white'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
          <ArrowLeft size={16} /> Voltar ao início
        </Link>
      </section>

      {/* BODY */}
      <section className="sessions-body">
        <div className="container">
          {/* Intro text */}
          <div className="sessions-intro">
            <p className="section-label" style={{ textAlign: 'center' }}>O que é isso?</p>
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 1rem' }}>
              HEY, DJ! O que é o<br /><em>Jungle Sessions?</em>
            </h2>
            <p>
              É um conteúdo audiovisual exclusivo para DJs, produzido aqui nesse cenário único — cheio de plantas, luz e personalidade no centro histórico de São Paulo.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Fizemos <strong>13 edições em 2025</strong> e cada DJ trouxe sua vibe, sua estética visual e suas referências musicais num set especial para gerar um material exclusivo de <strong>alta qualidade</strong>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              A <strong>agenda está aberta</strong> para as gravações das novas edições de 2026! Cada edição é única — você escolhe a playlist, a estética e a hora. A gente garante o cenário perfeito e a produção audiovisual.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://wa.me/5511913684056?text=Oi! Quero saber mais sobre o Jungle Sessions 2026!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
              >
                Chama na DM — Quero gravar! 🌿
              </a>
            </div>
          </div>

          {/* ── BIG PLAYER + CAROUSEL ── */}
          <div className="video-player-section">
            <p className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Assista agora</p>
            <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>
              {activeSession.title} — <em>{activeSession.dj}</em>
            </h2>

            {/* Big Player */}
            <div className="big-player">
              <iframe
                key={activeSession.id + activeIdx}
                src={`https://www.youtube.com/embed/${activeSession.id}?rel=0&autoplay=0`}
                title={activeSession.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="player-desc">{activeSession.desc}</p>

            {/* Infinite Carousel Thumbnails */}
            <div className="thumb-carousel-wrap">
              <button className="thumb-nav thumb-nav-left" onClick={() => scrollCarousel('left')}>
                <ChevronLeft size={22} />
              </button>

              <div
                className="thumb-carousel-track"
                ref={trackRef}
                onMouseEnter={pauseScroll}
                onMouseLeave={resumeScroll}
              >
                {extendedSessions.map((s, i) => {
                  const realIndex = i % sessions.length;
                  return (
                    <div
                      key={i}
                      className={`thumb-card ${realIndex === activeIdx ? 'active' : ''}`}
                      onClick={() => handleThumbClick(realIndex)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${s.id}/mqdefault.jpg`}
                        alt={s.title}
                      />
                      <div className="thumb-overlay">
                        <Play size={24} />
                      </div>
                      <div className="thumb-info">
                        <span className="thumb-title">{s.title}</span>
                        <span className="thumb-dj">{s.dj}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="thumb-nav thumb-nav-right" onClick={() => scrollCarousel('right')}>
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="sessions-cta">
            <h3>Sua edição pode ser a próxima. 🎧</h3>
            <p>
              Agenda aberta para 2026. Se você é DJ e quer gravar um set exclusivo no Jungle Studio, chama a gente. A selva espera por você.
            </p>
            <a
              href="https://wa.me/5511913684056?text=Oi! Vi o Jungle Sessions e quero gravar o meu set no estúdio!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '1.05rem', padding: '1.1rem 3rem', background: 'var(--green-light)' }}
            >
              Quero participar do Jungle Sessions →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
