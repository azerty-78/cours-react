/**
 * Service API pour les Articles (CRUD).
 * Toutes les fonctions appellent ta base MockAPI sur /Article.
 * Utilisation : import { articleApi } from '../api/articleService';
 */

import { API_BASE_URL, parseJsonResponse } from './config';

// Sur MockAPI : baseURL + /Article
const ARTICLES_URL = `${API_BASE_URL}/Article`;

/**
 * GET - Récupérer tous les articles.
 * @returns {Promise<Array>} Liste des articles
 */
export async function getAllArticles() {
  const response = await fetch(ARTICLES_URL);
  if (!response.ok) throw new Error('Erreur lors du chargement des articles');
  return parseJsonResponse(response);
}

/**
 * GET - Récupérer un article par son id.
 * @param {string} id - Id de l'article
 * @returns {Promise<Object|null>} L'article ou null si non trouvé
 */
export async function getArticleById(id) {
  const response = await fetch(`${ARTICLES_URL}/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Erreur lors du chargement de l\'article');
  return parseJsonResponse(response);
}

/**
 * POST - Créer un nouvel article.
 * Le backend génère l'id si non fourni.
 * @param {Object} article - { nom, description?, quantite?, prixUnitaire?, categorie? }
 * @returns {Promise<Object>} L'article créé (avec id)
 */
export async function createArticle(article) {
  const response = await fetch(ARTICLES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article),
  });
  if (!response.ok) throw new Error('Erreur lors de la création');
  return parseJsonResponse(response);
}

/**
 * PUT - Modifier un article existant.
 * @param {string} id - Id de l'article à modifier
 * @param {Object} article - Objet article complet (nom, description, etc.)
 * @returns {Promise<Object|null>} L'article modifié ou null si id inexistant
 */
export async function updateArticle(id, article) {
  const response = await fetch(`${ARTICLES_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...article, id }),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Erreur lors de la modification');
  return parseJsonResponse(response);
}

/**
 * DELETE - Supprimer un article.
 * @param {string} id - Id de l'article à supprimer
 * @returns {Promise<boolean>} true si supprimé, false si non trouvé
 */
export async function deleteArticle(id) {
  const response = await fetch(`${ARTICLES_URL}/${id}`, { method: 'DELETE' });
  if (response.status === 404) return false;
  if (!response.ok) throw new Error('Erreur lors de la suppression');
  return true;
}

/** Objet regroupant toutes les fonctions (optionnel, pour import plus court). */
export const articleApi = {
  getAll: getAllArticles,
  getById: getArticleById,
  create: createArticle,
  update: updateArticle,
  delete: deleteArticle,
};
