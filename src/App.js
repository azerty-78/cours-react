import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/routage/Navbar';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import GestionEtudiants from './etudiant/GestionEtudiants';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/etudiants" element={<GestionEtudiants />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
