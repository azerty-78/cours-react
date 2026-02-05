/**
 * Configuration de l'API REST.
 *
 * Ici, on utilise la base d'URL MockAPI fournie pour les exercices :
 * https://698440c1885008c00db07cc8.mockapi.io/api
 *
 * Tous les services construiront leurs URLs à partir de cette constante.
 */
export const API_BASE_URL = 'https://698440c1885008c00db07cc8.mockapi.io/api';

/**
 * Parse la réponse en JSON. Si le serveur renvoie du HTML (ex: page 404),
 * on affiche un message clair au lieu de "Unexpected token '<'".
 */
export async function parseJsonResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    if (text.trim().startsWith('<')) {
      throw new Error(
        "L'API n'a pas renvoyé du JSON (réponse HTML). Vérifie l'URL MockAPI et que l'endpoint existe bien."
      );
    }
    throw new Error("Réponse inattendue du serveur.");
  }
  return response.json();
}
