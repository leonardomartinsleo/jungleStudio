import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/page2_img2.png" alt="Jungle Studio" />
            <p className="footer-desc">
              Um oásis de criatividade no coração do centro histórico de São Paulo. Espaço único para ensaios, editoriais e produções audiovisuais.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#quemsomos" onClick={e => { e.preventDefault(); scrollTo('quemsomos'); }}>Quem Somos</a></li>
              <li><a href="#espaco" onClick={e => { e.preventDefault(); scrollTo('espaco'); }}>Espaço</a></li>
              <li><a href="#localizacao" onClick={e => { e.preventDefault(); scrollTo('localizacao'); }}>Localização</a></li>
              <li><a href="#reserva" onClick={e => { e.preventDefault(); scrollTo('reserva'); }}>Reserve um Horário</a></li>
              <li><Link to="/sessions">Jungle Sessions</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="https://instagram.com/junglestudiosp" target="_blank" rel="noopener noreferrer">
                  @junglestudiosp
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511913684056" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@junglestudiosp" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '2rem' }}>
              <h4>Horário</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
                Todos os dias<br />
                Das 7h às 22h<br />
                Portaria 24h
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jungle Studio SP. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="https://instagram.com/junglestudiosp" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/5511913684056" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.youtube.com/@junglestudiosp" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
