function BoutonSimple() {
  // Fonction qui s'exécute au clic
  const gererClic = () => {
    alert('Vous avez cliqué !');
  };

  return (
    <div>
      {/* Méthode 1 : fonction nommée */}
      <button onClick={gererClic}>
        Cliquez-moi
      </button>

      {/* Méthode 2 : fonction anonyme (arrow function) */}
      <button onClick={() => alert('Bouton 2 cliqué !')}>
        Autre bouton
      </button>
    </div>
  );
}

export default BoutonSimple;