import api from "./api";

export async function loginRequest({ email, password, role }) {
  // À connecter au backend quand il sera prêt
  // Exemple d'appel :
  // const { data } = await api.post("/login", { email, password, role });
  // return data;

  // Pour l'instant on retourne un utilisateur simulé
  return Promise.resolve({
    id: 1,
    name: role === "admin" ? "Admin Démo" : "Parent Démo",
    email,
    role,
    token: "demo-token",
  });
}

