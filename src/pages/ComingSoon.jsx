import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function ComingSoon({ title = 'Em Breve' }) {
  return (
    <section className="sessions-hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 1.5rem' }}>
      <span className="sessions-hero-eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sparkles size={16} /> Em Breve Conteúdo
      </span>
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: 'white' }}>
        {title}
      </h1>
      <p style={{ maxWidth: '550px', margin: '0 auto 2.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6 }}>
        Estamos preparando um conteúdo exclusivo e surpreendente para esta seção. Em breve novidades no Jungle Studio!
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', padding: '0.9rem 2rem' }}
        >
          <ArrowLeft size={18} /> Voltar ao início
        </Link>
        <a
          href="https://wa.me/5511913684056?text=Olá! Gostaria de saber mais sobre o Jungle Studio."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
