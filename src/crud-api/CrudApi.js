import { useState } from 'react';
import ArticlesCrud from './ArticlesCrud';
import UsersCrud from './UsersCrud';

/**
 * Page principale du mini-projet CRUD API.
 * Affiche deux onglets : Articles et Utilisateurs.
 * Chaque onglet affiche le composant CRUD correspondant (GET, POST, PUT, DELETE).
 */
function CrudApi() {
  // Onglet actif : 'articles' ou 'users'
  const [onglet, setOnglet] = useState('articles');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">CRUD API</h1>
      <p className="text-gray-600 mb-6">
        Teste les appels à ton API Spring Boot (Articles et Users). Assure-toi que le backend tourne sur le port 8080.
      </p>

      {/* Onglets simples : clic pour changer de section */}
      <div className="flex gap-2 mb-6 border-b">
        <button
          type="button"
          onClick={() => setOnglet('articles')}
          className={`px-4 py-2 font-medium ${onglet === 'articles' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Articles
        </button>
        <button
          type="button"
          onClick={() => setOnglet('users')}
          className={`px-4 py-2 font-medium ${onglet === 'users' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Utilisateurs
        </button>
      </div>

      {/* Contenu selon l'onglet sélectionné */}
      {onglet === 'articles' ? <ArticlesCrud /> : <UsersCrud />}
    </div>
  );
}

export default CrudApi;
