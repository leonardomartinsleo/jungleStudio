export default function Pricing() {
  return (
    <div className="pricing-container">
      <div className="text-center mb-xl">
        <h2 className="title">Valores de Locação</h2>
        <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Locação mínima de 1h.<br />
          Pagamento da locação sempre total e à vista ou parcelado, com acréscimo de taxas, para reserva do horário.
        </p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3 style={{ fontSize: '1.6rem' }}>Sala Ipê — o mais escolhido</h3>
          <div className="price">R$ 150<span>/hora</span></div>
          <div className="price-sub">a partir de 2h (R$ 180,00 para 1h única)</div>
          
          <ul className="pricing-features">
            <li>02 softbox de luz contínua</li>
            <li>Caixa de som bluetooth</li>
            <li>Móveis e objetos</li>
            <li>Locação mínima de 1h</li>
            <li>Até 6 pessoas incluídas</li>
          </ul>
        </div>

        <div className="pricing-card premium">
          <h3>Estúdio Equipado (Sala PRO)</h3>
          <div className="price">R$ 160<span>/hora</span></div>
          <div className="price-sub">a partir de 2h (R$ 180,00 para 1h única)</div>
          
          <ul className="pricing-features">
            <li>Caixa de som bluetooth</li>
            <li>Locação mínima de 1h</li>
            <li>Até 4 pessoas incluídas</li>
            <li>Fundo branco e tecidos</li>
            <li>3 tochas de flash e mobília</li>
          </ul>
        </div>
      </div>

      <div className="full-jungle-banner">
        <h3>FULL JUNGLE*</h3>
        <div className="price">R$ 250<span>/hora</span></div>
        <div className="price-sub" style={{ marginBottom: 0 }}>a partir de 2h (R$ 330,00 para 1h única)</div>
        <ul className="pricing-features" style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block' }}>
          <li>Todos os ambientes disponíveis</li>
          <li>Suporte durante a produção</li>
          <li>Equipamentos incluídos</li>
          <li>Até 10 pessoas incluídas</li>
          <li>Meia diária (6h): R$ 1.500</li>
          <li>Diária (8h): R$ 2.200</li>
        </ul>
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
