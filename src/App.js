import Produit from './components/Produit.js';

function App() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap:"20px"
    }}>
      <Produit nom="Ordinateur" qte={12} image="💻" couleur="blue" />
      <Produit nom="Telephone" qte={25} image="📱" couleur="red" />
      <Produit nom="Accessoires" qte={45} image="🎧" couleur="green" />
  </div>
  );
}

export default App;