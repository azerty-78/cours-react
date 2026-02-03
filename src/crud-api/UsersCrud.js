import { useState, useEffect } from 'react';
import * as userApi from './api/userService';

/**
 * Composant CRUD Users : liste, ajout, modification, suppression.
 * Même principe que ArticlesCrud avec les hooks useState et useEffect.
 */
function UsersCrud() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.getAllUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Impossible de charger les utilisateurs. Vérifiez que l\'API tourne (port 8080).');
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setName('');
    setEmail('');
    setEditingId(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { name: name.trim(), email: email.trim() };
    if (!user.name || !user.email) return;

    setError(null);
    try {
      if (editingId) {
        await userApi.updateUser(editingId, user);
      } else {
        await userApi.createUser(user);
      }
      resetForm();
      await loadUsers();
    } catch (err) {
      setError(err.message);
    }
  }

  function startEdit(user) {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user.id);
  }

  async function handleDelete(id) {
    if (!window.confirm('Supprimer cet utilisateur ?')) return;
    setError(null);
    try {
      await userApi.deleteUser(id);
      await loadUsers();
      if (editingId === id) resetForm();
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-gray-600">Chargement des utilisateurs...</p>;
  if (error) {
    return (
      <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
        <p>{error}</p>
        <button type="button" onClick={loadUsers} className="mt-2 underline">Réessayer</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Utilisateurs</h2>

      <form onSubmit={handleSubmit} className="p-4 bg-white rounded border space-y-3 max-w-md">
        <h3 className="font-semibold">{editingId ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          required
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

      <div className="border rounded overflow-hidden bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Nom</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan="3" className="p-4 text-gray-500">Aucun utilisateur.</td></tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">
                    <button type="button" onClick={() => startEdit(u)} className="text-blue-600 mr-2">Modifier</button>
                    <button type="button" onClick={() => handleDelete(u.id)} className="text-red-600">Supprimer</button>
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

export default UsersCrud;
