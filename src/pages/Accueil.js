import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Page d'accueil</h1>
      <p className="text-gray-600 mb-6">Bienvenue sur l'application. Utilisez le menu pour naviguer.</p>
      <Link to="/etudiants" className="text-blue-600 hover:underline">
        Voir la gestion des étudiants →
      </Link>
    </div>
  );
}

export default Accueil;
