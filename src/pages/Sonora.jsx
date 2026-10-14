import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Disc3, Sparkles } from 'lucide-react';

export default function Sonora() {
  return (
    <>
      <section className="sessions-hero" style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '6rem 1.5rem' }}>
        <span className="sessions-hero-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          <Music size={16} /> Música para ver, ouvir e descobrir.
        </span>

        <h1 style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.5rem)', marginBottom: '1.5rem', color: 'white', lineHeight: 1.2, letterSpacing: '0.04em' }}>
          SONORA PLAY
        </h1>

        <p style={{ maxWidth: '680px', margin: '0 auto 1.25rem', color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', lineHeight: 1.7 }}>
          O Sonora Play é o espaço do Jungle para registrar artistas de um jeito próximo e autoral — unindo performance, conversa, imagem e som em uma experiência e estética única.
        </p>

        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--green-light)', fontSize: '1.1rem', fontWeight: 600 }}>
          Descubra quem já passou por aqui e saiba como ter um material só seu!
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://wa.me/5511913684056?text=Olá! Quero saber mais sobre o Sonora Play e ter meu material autoral no Jungle Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.2rem' }}
          >
            Quero ter um material só meu
          </a>
          <Link
            to="/"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '1rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <ArrowLeft size={18} /> Voltar ao início
          </Link>
        </div>
      </section>
    </>
  );
}

