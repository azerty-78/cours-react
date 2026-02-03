/**
 * Configuration de l'API REST (backend Spring Boot).
 * En local : URL vide = requêtes vers le même serveur (localhost:3000), le proxy
 * de package.json redirige /api/* vers http://localhost:8080.
 * À faire : lancer l'app avec "npm start" et démarrer le backend sur le port 8080.
 */
export const API_BASE_URL = '';

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
        "L'API n'a pas renvoyé du JSON (réponse HTML). Vérifiez que le backend Spring Boot tourne sur le port 8080 et que vous lancez React avec 'npm start' (le proxy redirige alors /api vers le backend)."
      );
    }
    throw new Error("Réponse inattendue du serveur.");
  }
  return response.json();
}
