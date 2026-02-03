import { useState, useEffect } from 'react';
import CardStat from './CardStat';
import CarteEtudiant from './CarteEtudiant';

function GestionEtudiants() {
  // État pour stocker la liste des étudiants
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: 'Alice Kamga', note: 15, present: true },
    { id: 2, nom: 'Bob Nkem', note: 12, present: false },
    { id: 3, nom: 'Charlie Mbida', note: 18, present: true }
  ]);

  // États pour le formulaire d'ajout
  const [nouveauNom, setNouveauNom] = useState('');
  const [nouvelleNote, setNouvelleNote] = useState('');

  // État pour les statistiques
  const [stats, setStats] = useState({
    total: 0,
    presents: 0,
    moyenne: 0
  });

  // useEffect : Calculer les statistiques à chaque changement
  useEffect(() => {
    const total = etudiants.length;
    const presents = etudiants.filter(e => e.present).length;
    const sommeNotes = etudiants.reduce((acc, e) => acc + e.note, 0);
    const moyenne = total > 0 ? (sommeNotes / total).toFixed(2) : 0;

    setStats({ total, presents, moyenne });

    // Mettre à jour le titre de la page
    document.title = `Étudiants: ${total} - Moyenne: ${moyenne}`;
  }, [etudiants]);

  // Fonction pour ajouter un étudiant
  const ajouterEtudiant = () => {
    if (nouveauNom.trim() !== '' && nouvelleNote !== '') {
      const nouvelEtudiant = {
        id: Date.now(), // ID unique basé sur le timestamp
        nom: nouveauNom,
        note: parseInt(nouvelleNote),
        present: true
      };
      setEtudiants([...etudiants, nouvelEtudiant]);
      
      // Réinitialiser le formulaire
      setNouveauNom('');
      setNouvelleNote('');
    }
  };

  // Fonction pour supprimer un étudiant
  const supprimerEtudiant = (id) => {
    const nouvelleListe = etudiants.filter(etudiant => etudiant.id !== id);
    setEtudiants(nouvelleListe);
  };

  // Fonction pour basculer la présence
  const togglePresence = (id) => {
    const nouvelleListeC = etudiants.map(etudiant => {
      if (etudiant.id === id) {
        return { ...etudiant, present: !etudiant.present };
      }
      return etudiant;
    });
    setEtudiants(nouvelleListeC);
  };

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* En-tête */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '30px',
        borderRadius: '15px',
        color: 'white',
        marginBottom: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>
          📚 Système de Gestion des Étudiants
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Gérez facilement vos étudiants, leurs notes et leur présence
        </p>
      </div>

      {/* Tableau de bord des statistiques */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <CardStat 
          titre="Total Étudiants" 
          valeur={stats.total} 
          icone="👥"
          couleur="#4CAF50"
        />
        <CardStat 
          titre="Présents" 
          valeur={stats.presents} 
          icone="✅"
          couleur="#2196F3"
        />
        <CardStat 
          titre="Moyenne Classe" 
          valeur={stats.moyenne} 
          icone="📊"
          couleur="#FF9800"
        />
      </div>

      {/* Formulaire d'ajout */}
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        marginBottom: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>➕ Ajouter un Étudiant</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={nouveauNom}
            onChange={(e) => setNouveauNom(e.target.value)}
            placeholder="Nom complet de l'étudiant"
            style={{
              flex: '2',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <input 
            type="number"
            value={nouvelleNote}
            onChange={(e) => setNouvelleNote(e.target.value)}
            placeholder="Note (0-20)"
            min="0"
            max="20"
            style={{
              flex: '1',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <button 
            onClick={ajouterEtudiant}
            style={{
              padding: '12px 30px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5568d3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* Liste des étudiants */}
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginTop: 0, color: '#333' }}>
          📋 Liste des Étudiants ({etudiants.length})
        </h2>
        
        {etudiants.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#999'
          }}>
            <p style={{ fontSize: '18px' }}>😔 Aucun étudiant inscrit</p>
            <p>Ajoutez votre premier étudiant ci-dessus!</p>
          </div>
        ) : (
          <div style={{ marginTop: '20px' }}>
            {etudiants.map((etudiant) => (
              <CarteEtudiant 
                key={etudiant.id}
                etudiant={etudiant}
                onSupprimer={supprimerEtudiant}
                onTogglePresence={togglePresence}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GestionEtudiants;