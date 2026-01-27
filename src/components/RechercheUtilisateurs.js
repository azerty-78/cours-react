import { useState, useEffect } from 'react';

function RechercheUtilisateurs() {
  // États
  const [recherche, setRecherche] = useState('');
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [resultats, setResultats] = useState([]);
  const [chargement, setChargement] = useState(false);

  // Charger les utilisateurs au début
  useEffect(() => {
    setChargement(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUtilisateurs(data);
        setResultats(data);
        setChargement(false);
      });
      console.log("Requete effectuer avec succes");
  }, []); // Une seule fois

  // Filtrer quand la recherche change
  useEffect(() => {
    const filtered = utilisateurs.filter(user =>
      user.name.toLowerCase().includes(recherche.toLowerCase())
    );
    setResultats(filtered);
    console.log("ok pour la recherche");
  }, [recherche, utilisateurs]); // Quand recherche OU utilisateurs change

  return (
    <div>
      <input
        type="text"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher..."
      />

      {chargement ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {resultats.map(user => (
            <li key={user.id}>Nom : {user.name}; Email : {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RechercheUtilisateurs;