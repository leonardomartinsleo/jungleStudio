import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Check, Sun, Moon, Leaf, SunMedium, Volume2, Coffee, Armchair, Shield, Camera, Sparkles, Palette, Clapperboard, Train, Building2, PanelTop, Clock } from 'lucide-react';
import SpaceCarousel from '../components/SpaceCarousel';

export default function Home() {
  const [isNight, setIsNight] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Pricing data
  const pricing = {
    day: {
      ipe: { price: 130, single: 170 },
      pro: { price: 130, single: 180 },
    },
    night: {
      ipe: { price: 150, single: 180 },
      pro: { price: 140, single: 180 },
    },
  };

  const current = isNight ? pricing.night : pricing.day;

  return (
    <>
      {/* ── HERO ── */}
      <section id="hero" className="hero-full">
        <img
          src="/images/page1_img1.jpeg"
          alt="Jungle Studio Art"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-tagline fade-up fade-up-d1">
            Welcome to the <em>Jungle Studio</em><br />
            Seu cenário único<br />
            no <em>coração</em> de<br />
            São Paulo.
          </h1>
          <p className="hero-sub fade-up fade-up-d2">
            Um oásis criativo no centro histórico da cidade. Espaço exclusivo para ensaios fotográficos, editoriais, produções audiovisuais e sets musicais — do alto do Viaduto Santa Ifigênia.
          </p>
          <div className="hero-actions fade-up fade-up-d3">
            <button className="btn-primary" onClick={() => scrollTo('reserva')}>
              Reserve seu horário
            </button>
            <Link to="/sessions" className="btn-outline">
              Ver Jungle Sessions ↗
            </Link>
          </div>
        </div>

        <div className="hero-badge">
          ✦ Disponível todos os dias · 7h às 22h
        </div>
      </section>

      {/* ── SELL STRIP ── */}
      <div className="sell-strip">
        <div className="sell-strip-inner">
          {[
            'Ensaios Fotográficos',
            'Editoriais de Moda',
            'Sets para DJs',
            'Produções Audiovisuais',
            'Encontros Artísticos',
            'Gravações Musicais',
            'Vista Panorâmica do Centro',
            'Portaria 24h',
            'Ensaios Fotográficos',
            'Editoriais de Moda',
            'Sets para DJs',
            'Produções Audiovisuais',
            'Encontros Artísticos',
            'Gravações Musicais',
            'Vista Panorâmica do Centro',
            'Portaria 24h',
          ].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* ── QUEM SOMOS ── */}
      <section id="quemsomos" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-stack">
              <img src="/images/page3_img1.jpeg" alt="Sala Ipê" />
              <img src="/images/page7_img3.jpeg" alt="Sala PRO Noite" />
            </div>

            <div>
              <p className="section-label">Quem Somos</p>
              <h2 className="section-title">
                Um estúdio diferente de<br />
                <em>tudo que você já viu.</em>
              </h2>
              <p className="section-body" style={{ marginBottom: '1.5rem' }}>
                Do alto do centro histórico de São Paulo, o Jungle Studio é um espaço vivo — cheio de plantas, arte, luz e personalidade. Criado para quem quer produzir com intenção e sair com imagens que realmente impressionam.
              </p>
              <p className="section-body" style={{ marginBottom: '2.5rem' }}>
                Cada canto do estúdio é um novo cenário. E ao fundo, uma vista panorâmica de SP que você não encontra em nenhum outro lugar.
              </p>

              <div className="about-stat-row">
                <div className="about-stat">
                  <span className="num">3+</span>
                  <span className="label">Ambientes únicos</span>
                </div>
                <div className="about-stat">
                  <span className="num">13</span>
                  <span className="label">Sessions em 2025</span>
                </div>
                <div className="about-stat">
                  <span className="num">24h</span>
                  <span className="label">Portaria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMBIENTE VERSÁTIL ── */}
      <section className="versatile-section">
        <div className="container">
          <div className="versatile-inner">
            <div className="versatile-img-wrap">
              <img src="/images/page9_img1.jpeg" alt="Ambiente versátil do Jungle Studio" />
            </div>
            <div className="versatile-text">
              <p className="section-label">Nosso Ambiente</p>
              <h2 className="section-title">
                Versátil, artístico<br />e <em>sofisticado.</em>
              </h2>
              <p className="section-body">
                Com um ambiente versátil, cheio de arte, bem iluminado e sofisticado, tudo aqui foi pensado para atender as suas mais diversas necessidades.
              </p>

              <div className="versatile-topics">
                <div className="versatile-topic">
                  <span className="topic-icon"><Camera size={20} /></span>
                  <span className="topic-text">Ensaios Intimistas</span>
                </div>
                <div className="versatile-topic">
                  <span className="topic-icon"><Sparkles size={20} /></span>
                  <span className="topic-text">Editoriais Impactantes</span>
                </div>
                <div className="versatile-topic">
                  <span className="topic-icon"><Palette size={20} /></span>
                  <span className="topic-text">Encontros Artísticos</span>
                </div>
                <div className="versatile-topic">
                  <span className="topic-icon"><Clapperboard size={20} /></span>
                  <span className="topic-text">Produções Criativas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="container">
          <div style={{ maxWidth: 600, marginBottom: '1rem' }}>
            <p className="section-label" style={{ color: 'var(--green-light)' }}>O que você encontra aqui</p>
            <h2 className="section-title light">
              Tudo que sua produção<br />precisa, num só lugar.
            </h2>
          </div>

          <div className="features-grid">
            {[
              { icon: <Leaf size={28} />, title: 'Plantas Tropicais', desc: 'Mais de 30 espécies decoram o espaço, criando cenários naturais únicos para seus ensaios.' },
              { icon: <SunMedium size={28} />, title: 'Luz Natural', desc: 'Janelas amplas com vista para o centro de SP garantem iluminação natural incrível durante o dia.' },
              { icon: <Volume2 size={28} />, title: 'Caixa de Som', desc: 'Sistema de som de qualidade para ambientar sua sessão com a trilha perfeita.' },
              { icon: <Coffee size={28} />, title: 'Café & Água', desc: 'Café e água inclusos para você e seu time durante toda a locação.' },
              { icon: <Armchair size={28} />, title: 'Mobiliário Versátil', desc: 'Móveis que se adaptam ao seu projeto — minimalistas ou cheios de personalidade.' },
              { icon: <Shield size={28} />, title: 'Portaria 24h', desc: 'Segurança e tranquilidade. Acesso controlado durante todo o seu horário.' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESPAÇO / CAROUSEL ── */}
      <section id="espaco" className="spaces-section">
        <div className="container" style={{ marginBottom: '3rem' }}>
          <p className="section-label">Nossos Espaços</p>
          <h2 className="section-title">
            Clique para explorar<br />
            <em>cada ambiente.</em>
          </h2>
          <p className="section-body">
            Sala Ipê, Sala PRO e a experiência completa Full Jungle. Cada espaço tem sua própria energia — e você escolhe qual combina com sua visão.
          </p>
        </div>
        <SpaceCarousel />
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section id="localizacao" className="location-section">
        <div className="container location-inner">
          <div>
            <span className="location-tag">
              <MapPin size={14} /> Localização
            </span>
            <h2 className="section-title light">
              No coração histórico<br />de São Paulo.
            </h2>
            <p className="section-body light" style={{ marginBottom: '1rem' }}>
              Localizado no Viaduto Santa Ifigênia, ao lado do Mosteiro São Bento e a poucos passos do Metrô São Bento — uma das regiões mais icônicas da cidade.
            </p>

            <div className="location-info-cards">
              <div className="loc-card">
                <span className="loc-icon"><Train size={18} /></span>
                <h4>Metrô São Bento</h4>
                <p>Linha 3 – Vermelha, a 2 minutos a pé</p>
              </div>
              <div className="loc-card">
                <span className="loc-icon"><Building2 size={18} /></span>
                <h4>Mosteiro São Bento</h4>
                <p>Monumento histórico na porta do estúdio</p>
              </div>
              <div className="loc-card">
                <span className="loc-icon"><PanelTop size={18} /></span>
                <h4>Vista Panorâmica</h4>
                <p>Do alto, SP inteira como cenário de fundo</p>
              </div>
              <div className="loc-card">
                <span className="loc-icon"><Clock size={18} /></span>
                <h4>Todos os dias</h4>
                <p>Das 7h às 22h com portaria 24h</p>
              </div>
            </div>
          </div>

          <div className="location-map-frame">
            <iframe
              title="Jungle Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6339!3d-23.5469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5793c3f2b4c5%3A0x0!2zVmlhZHV0byBTYW50YSBJZmlnw6puaWE!5e0!3m2!1spt-BR!2sbr!4v1"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── PRICING / RESERVA ── */}
      <section id="reserva" className="pricing-section">
        <div className="container pricing-container-layout">
          <div className="pricing-header">
            <p className="section-label">Reserve seu Horário</p>
            <h2 className="section-title">
              Escolha seu espaço.<br />
              <em>Crie sem limites.</em>
            </h2>
            <p className="section-body">
              Locação mínima de 2h · Até 6 pessoas incluídas · Pagamento à vista para reservar.
            </p>

            {/* Toggle Dia/Noite */}
            <div className="day-night-toggle">
              <span className={`toggle-label ${!isNight ? 'active' : ''}`}>
                <Sun size={16} /> Dia
              </span>
              <button
                className={`toggle-switch ${isNight ? 'night' : ''}`}
                onClick={() => setIsNight(!isNight)}
                aria-label="Alternar entre preços diurnos e noturnos"
              >
                <span className="toggle-knob" />
              </button>
              <span className={`toggle-label ${isNight ? 'active' : ''}`}>
                <Moon size={16} /> Noite <small>(após 18h)</small>
              </span>
            </div>
          </div>

          <div className="pricing-content">

          <div className="pricing-cards">
            {/* Sala Ipê */}
            <div className="p-card">
              <div className="p-card-accent" />
              <span className="p-card-tag">Sala Ipê</span>
              <h3>Luz Natural</h3>
              <div className="p-price">
                <span className="currency">R$</span>
                <span className="amount">{current.ipe.price}</span>
                <span className="per">/hora</span>
              </div>
              <p className="p-note">R$ {current.ipe.single}/hora para 1h única</p>
              <div className="p-divider" />
              <ul className="p-features">
                <li><Check size={16} className="icon" /> Plantas tropicais e luz natural</li>
                <li><Check size={16} className="icon" /> Vista panorâmica do centro de SP</li>
                <li><Check size={16} className="icon" /> Mobiliário vintage e versátil</li>
                <li><Check size={16} className="icon" /> Café e água inclusos</li>
              </ul>
              <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }}
                onClick={() => window.open('https://wa.me/5511913684056?text=Olá! Quero reservar a Sala Ipê no Jungle Studio.', '_blank')}>
                Reservar Sala Ipê
              </button>
            </div>

            {/* Sala PRO – featured */}
            <div className="p-card featured">
              <div className="p-card-accent" />
              <span className="p-card-tag" style={{ background: 'var(--terracotta)' }}>Sala PRO · Mais escolhido</span>
              <h3>O espaço completo</h3>
              <div className="p-price">
                <span className="currency" style={{ color: 'rgba(255,255,255,0.6)' }}>R$</span>
                <span className="amount" style={{ color: 'white' }}>{current.pro.price}</span>
                <span className="per" style={{ color: 'rgba(255,255,255,0.5)' }}>/hora</span>
              </div>
              <p className="p-note">R$ {current.pro.single}/hora para 1h única</p>
              <div className="p-divider" />
              <ul className="p-features">
                <li><Check size={16} className="icon" /> Swing, garrafa ball & parede terracota</li>
                <li><Check size={16} className="icon" /> Iluminação cênica completa</li>
                <li><Check size={16} className="icon" /> Espaço amplo para produções grandes</li>
                <li><Check size={16} className="icon" /> Caixa de som de qualidade</li>
              </ul>
              <button className="btn-primary" style={{ width: '100%', marginTop: '2rem', background: 'white', color: 'var(--green-dark)' }}
                onClick={() => window.open('https://wa.me/5511913684056?text=Olá! Quero reservar a Sala PRO no Jungle Studio.', '_blank')}>
                Reservar Sala PRO
              </button>
            </div>

            {/* Locação dia */}
            <div className="p-card">
              <div className="p-card-accent" />
              <span className="p-card-tag">Locação Diária</span>
              <h3>Dia Inteiro</h3>
              <div className="p-price">
                <span className="currency">R$</span>
                <span className="amount">1k</span>
                <span className="per">/dia</span>
              </div>
              <p className="p-note">Consulte disponibilidade</p>
              <div className="p-divider" />
              <ul className="p-features">
                <li><Check size={16} className="icon" /> Acesso das 7h às 22h</li>
                <li><Check size={16} className="icon" /> Todos os ambientes disponíveis</li>
                <li><Check size={16} className="icon" /> Ideal para produções longas</li>
                <li><Check size={16} className="icon" /> Suporte durante toda a produção</li>
                <li><Check size={16} className="icon" /> Preço especial para parcerias</li>
              </ul>
              <button className="btn-outline" style={{ width: '100%', marginTop: '2rem' }}
                onClick={() => window.open('https://wa.me/5511913684056?text=Olá! Quero saber sobre locação diária no Jungle Studio.', '_blank')}>
                Consultar
              </button>
            </div>
          </div>

          {/* Full Jungle */}
          <div className="full-jungle">
            <div>
              <h3>Full Jungle</h3>
              <p>Acesso a <strong style={{ color: 'white' }}>todos os ambientes</strong> do estúdio. A selva inteira é sua — do jeito que sua produção merece.</p>
            </div>
            <div className="full-jungle-price">
              <span className="amount">R$ 250<span style={{ fontSize: '1.5rem' }}>/h</span></span>
              <span className="per">R$ 300 para 1h única</span>
              <button className="btn-primary full-jungle-btn"
                onClick={() => window.open('https://wa.me/5511913684056?text=Olá! Quero reservar o Full Jungle no Jungle Studio.', '_blank')}>
                Reservar Full Jungle
              </button>
            </div>
          </div>

          <div className="extra-info-box">
            <Users size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--green-deep)' }} />
            Acima de 6 pessoas, acréscimo de <strong>R$ 40,00 por pessoa</strong> adicional, independente do tempo de permanência.
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem' }}>Dúvidas? A gente resolve no WhatsApp.</p>
            <a href="https://wa.me/5511913684056" target="_blank" rel="noopener noreferrer" className="btn-primary"
              style={{ fontSize: '1.1rem', padding: '1.1rem 3rem' }}>
              Falar no WhatsApp
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
