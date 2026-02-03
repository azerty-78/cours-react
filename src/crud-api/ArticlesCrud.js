import { useState, useEffect } from 'react';
import * as articleApi from './api/articleService';

/**
 * Composant CRUD Articles : liste, ajout, modification, suppression.
 * Utilise useState pour les données et le formulaire, useEffect pour charger la liste au montage.
 */
function ArticlesCrud() {
  // État de la liste (données venant de l'API)
  const [articles, setArticles] = useState([]);
  // État de chargement (pendant les appels API)
  const [loading, setLoading] = useState(true);
  // Message d'erreur affiché en cas de problème (ex : API injoignable)
  const [error, setError] = useState(null);

  // Champs du formulaire (ajout ou édition)
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [quantite, setQuantite] = useState('');
  const [prixUnitaire, setPrixUnitaire] = useState('');
  const [categorie, setCategorie] = useState('');
  // Id de l'article en cours d'édition (null = mode ajout)
  const [editingId, setEditingId] = useState(null);

  /**
   * Charger la liste des articles au montage du composant.
   * useEffect avec [] = une seule fois au chargement.
   */
  useEffect(() => {
    loadArticles();
  }, []);

  /** Appel GET /api/articles et mise à jour de l'état. */
  async function loadArticles() {
    setLoading(true);
    setError(null);
    try {
      const data = await articleApi.getAllArticles();
      setArticles(data);
    } catch (err) {
      setError(err.message || 'Impossible de charger les articles. Vérifiez que l\'API tourne (port 8080).');
    } finally {
      setLoading(false);
    }
  }

  /** Réinitialiser le formulaire (vide + mode ajout). */
  function resetForm() {
    setNom('');
    setDescription('');
    setQuantite('');
    setPrixUnitaire('');
    setCategorie('');
    setEditingId(null);
  }

  /** Soumission du formulaire : POST (création) ou PUT (modification). */
  async function handleSubmit(e) {
    e.preventDefault();
    const article = {
      nom: nom.trim(),
      description: description.trim(),
      quantite: parseInt(quantite, 10) || 0,
      prixUnitaire: parseFloat(prixUnitaire) || 0,
      categorie: categorie.trim(),
    };
    if (!article.nom) return;

    setError(null);
    try {
      if (editingId) {
        await articleApi.updateArticle(editingId, article);
      } else {
        await articleApi.createArticle(article);
      }
      resetForm();
      await loadArticles();
    } catch (err) {
      setError(err.message);
    }
  }

  /** Passer en mode édition : remplir le formulaire avec l'article choisi. */
  function startEdit(article) {
    setNom(article.nom);
    setDescription(article.description || '');
    setQuantite(String(article.quantite ?? ''));
    setPrixUnitaire(String(article.prixUnitaire ?? ''));
    setCategorie(article.categorie || '');
    setEditingId(article.id);
  }

  /** Suppression : appel DELETE puis rechargement de la liste. */
  async function handleDelete(id) {
    if (!window.confirm('Supprimer cet article ?')) return;
    setError(null);
    try {
      await articleApi.deleteArticle(id);
      await loadArticles();
      if (editingId === id) resetForm();
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-gray-600">Chargement des articles...</p>;
  if (error) {
    return (
      <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
        <p>{error}</p>
        <button type="button" onClick={loadArticles} className="mt-2 underline">Réessayer</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Articles</h2>

      {/* Formulaire : création ou modification */}
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded border space-y-3 max-w-lg">
        <h3 className="font-semibold">{editingId ? 'Modifier l\'article' : 'Ajouter un article'}</h3>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded px-3 py-2"
        />
        <div className="flex gap-2">
          <input
            type="number"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
            placeholder="Quantité"
            className="border rounded px-3 py-2 w-24"
          />
          <input
            type="number"
            step="0.01"
            value={prixUnitaire}
            onChange={(e) => setPrixUnitaire(e.target.value)}
            placeholder="Prix unitaire"
            className="border rounded px-3 py-2 flex-1"
          />
        </div>
        <input
          type="text"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          placeholder="Catégorie"
          className="w-full border rounded px-3 py-2"
        />
        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {editingId ? 'Enregistrer' : 'Créer'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Annuler
            </button>
          )}
        </div>
      </form>

      {/* Liste des articles */}
      <div className="border rounded overflow-hidden bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nom</th>
              <th className="p-2">Description</th>
              <th className="p-2">Qté</th>
              <th className="p-2">Prix</th>
              <th className="p-2">Catégorie</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.length === 0 ? (
              <tr><td colSpan="6" className="p-4 text-gray-500">Aucun article.</td></tr>
            ) : (
              articles.map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="p-2">{a.nom}</td>
                  <td className="p-2">{a.description || '-'}</td>
                  <td className="p-2">{a.quantite ?? '-'}</td>
                  <td className="p-2">{a.prixUnitaire ?? '-'}</td>
                  <td className="p-2">{a.categorie || '-'}</td>
                  <td className="p-2">
                    <button type="button" onClick={() => startEdit(a)} className="text-blue-600 mr-2">Modifier</button>
                    <button type="button" onClick={() => handleDelete(a.id)} className="text-red-600">Supprimer</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticlesCrud;
