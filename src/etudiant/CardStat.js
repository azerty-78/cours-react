function CardStat({ titre, valeur, icone, couleur }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderLeft: `5px solid ${couleur}`
    }}>
      <div style={{ fontSize: '30px', marginBottom: '10px' }}>{icone}</div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', color: couleur }}>
        {valeur}
      </div>
      <div style={{ color: '#666', fontSize: '14px' }}>{titre}</div>
    </div>
  );
}

export default CardStat;