import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Pour l'instant : login simulé (à remplacer par un appel API)
    const mockUser = {
      id: 1,
      name: role === "admin" ? "Admin" : "Parent",
      email,
      role,
    };
    login(mockUser);
    if (role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/parent");
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 space-y-4">
      <h1 className="text-xl font-semibold text-slate-900">
        Connexion à ScolarPay
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1 text-sm">
          <label className="block text-slate-700">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-slate-700">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-slate-700">Rôle</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm"
          >
            <option value="admin">Administrateur</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-700 text-white py-2 text-sm font-medium hover:bg-blue-800"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;

