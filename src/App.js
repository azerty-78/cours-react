import React from 'react';
import Hello from './components/Hello';
import Bouton from './components/Bouton';
import Testt from './components/Testt';

function App() {
  return (
    <div>
      <Hello/><br/>
      <Bouton value="Deconnexion" /><br/>
      <Bouton value="Connexion" /><br/>
      <Testt nom="Djibril" prenom="Ben" prix="500" values="Valider" /><br/>
      <Testt nom="Serge" prenom="Ben" prix="1500" values="Valider" />
    
    
    </div>
  );
}

export default App;