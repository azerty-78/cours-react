/**
 * Service API pour les Users (CRUD).
 * Toutes les fonctions appellent ton backend Spring Boot sur /api/users.
 * Utilisation : import { userApi } from '../api/userService';
 */

import { API_BASE_URL, parseJsonResponse } from './config';

const USERS_URL = `${API_BASE_URL}/api/users`;

/**
 * GET - Récupérer tous les utilisateurs.
 * @returns {Promise<Array>} Liste des users
 */
export async function getAllUsers() {
  const response = await fetch(USERS_URL);
  if (!response.ok) throw new Error('Erreur lors du chargement des utilisateurs');
  return parseJsonResponse(response);
}

/**
 * GET - Récupérer un utilisateur par son id.
 * @param {string} id - Id du user
 * @returns {Promise<Object|null>} Le user ou null si non trouvé
 */
export async function getUserById(id) {
  const response = await fetch(`${USERS_URL}/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Erreur lors du chargement de l\'utilisateur');
  return parseJsonResponse(response);
}

/**
 * POST - Créer un nouvel utilisateur.
 * @param {Object} user - { name, email }
 * @returns {Promise<Object>} Le user créé (avec id)
 */
export async function createUser(user) {
  const response = await fetch(USERS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error('Erreur lors de la création');
  return parseJsonResponse(response);
}

/**
 * PUT - Modifier un utilisateur existant.
 * @param {string} id - Id du user à modifier
 * @param {Object} user - { name, email }
 * @returns {Promise<Object|null>} Le user modifié ou null si id inexistant
 */
export async function updateUser(id, user) {
  const response = await fetch(`${USERS_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user, id }),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Erreur lors de la modification');
  return parseJsonResponse(response);
}

/**
 * DELETE - Supprimer un utilisateur.
 * @param {string} id - Id du user à supprimer
 * @returns {Promise<boolean>} true si supprimé, false si non trouvé
 */
export async function deleteUser(id) {
  const response = await fetch(`${USERS_URL}/${id}`, { method: 'DELETE' });
  if (response.status === 404) return false;
  if (!response.ok) throw new Error('Erreur lors de la suppression');
  return true;
}

export const userApi = {
  getAll: getAllUsers,
  getById: getUserById,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
};
