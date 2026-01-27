function CarteEtudiant({ etudiant, onSupprimer, onTogglePresence }) {
  // Déterminer la couleur selon la note
  const getCouleurNote = (note) => {
    if (note >= 16) return '#4CAF50'; // Vert
    if (note >= 12) return '#FF9800'; // Orange
    return '#f44336'; // Rouge
  };

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '2px solid #eee',
      transition: 'all 0.3s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.borderColor = '#667eea';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.borderColor = '#eee';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Informations de l'étudiant */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>
          {etudiant.nom}
        </h3>
        <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
          <span style={{ 
            color: getCouleurNote(etudiant.note),
            fontWeight: 'bold'
          }}>
            📝 Note: {etudiant.note}/20
          </span>
          <span style={{ color: etudiant.present ? '#4CAF50' : '#f44336' }}>
            {etudiant.present ? '✅ Présent' : '❌ Absent'}
          </span>
        </div>
      </div>

      {/* Boutons d'action */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => onTogglePresence(etudiant.id)}
          style={{
            padding: '8px 15px',
            backgroundColor: etudiant.present ? '#FFC107' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          {etudiant.present ? 'Marquer Absent' : 'Marquer Présent'}
        </button>
        <button
          onClick={() => onSupprimer(etudiant.id)}
          style={{
            padding: '8px 15px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
}

export default CarteEtudiant;