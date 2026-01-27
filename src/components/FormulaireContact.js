import { useState } from 'react';

function FormulaireContact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  // Fonction appelée lors de la soumission
  const gererSoumission = (event) => {
    // IMPORTANT : empêcher le rechargement de la page
    event.preventDefault();
    
    // Traiter les données
    console.log('Formulaire soumis !');
    console.log('Nom:', nom);
    console.log('Email:', email);
    
    alert(`Bienvenue ${nom} !`);
    
    // Réinitialiser le formulaire
    setNom('');
    setEmail('');
  };

  return (
    <form onSubmit={gererSoumission}>
      <h2>Formulaire de Contact</h2>
      
      <div>
        <label>Nom :</label>
        <input 
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email :</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireContact;