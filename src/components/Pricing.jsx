export default function Pricing() {
  return (
    <div className="pricing-container">
      <div className="text-center mb-xl">
        <h2 className="title">Valores de Locação</h2>
        <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Locação mínima de 2h - Até 6 pessoas.<br />
          Pagamento da locação sempre total e à vista ou parcelado, com acréscimo de taxas, para reserva do horário.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Sala Ipê</h3>
          <div className="price">R$ 130<span>/hora</span></div>
          <div className="price-sub">(R$ 170,00 apenas 1 hora)</div>
          
          <ul className="pricing-features">
            <li><strong>Após as 18h:</strong></li>
            <li>R$ 150,00/hora</li>
            <li>(R$ 180,00 apenas 1 hora)</li>
          </ul>
        </div>

        <div className="pricing-card premium">
          <h3>Sala PRO</h3>
          <div className="price">R$ 130<span>/hora</span></div>
          <div className="price-sub">(R$ 180,00 apenas 1 hora)</div>
          
          <ul className="pricing-features">
            <li><strong>Após as 18h:</strong></li>
            <li>R$ 140,00/hora</li>
            <li>(R$ 180,00 apenas 1 hora)</li>
          </ul>
        </div>
      </div>

      <div className="full-jungle-banner">
        <h3>FULL JUNGLE*</h3>
        <div className="price">R$ 250<span>/hora</span></div>
        <div className="price-sub" style={{ marginBottom: 0 }}>(R$ 300,00 apenas 1 hora)</div>
        <p style={{ marginTop: '1rem', opacity: 0.9 }}>*Acesso a todos os espaços do estúdio</p>
      </div>

      <div className="info-banner">
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          ACIMA DE 6 PESSOAS, ACRÉSCIMO DE R$ 40,00 POR PESSOA, INDEPENDENTE DA PERMANÊNCIA.
        </p>
      </div>

      <div className="text-center" style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Horário de Funcionamento</h3>
        <p style={{ fontSize: '1.2rem' }}>Todos os dias das 7h às 22h</p>
      </div>
    </div>
  );
}
