import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function MainLayout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-blue-700 text-white px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          ScolarPay
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {!user && (
            <Link to="/login" className="hover:underline">
              Connexion
            </Link>
          )}
          {user && (
            <>
              {user.role === "admin" && (
                <Link to="/dashboard/admin" className="hover:underline">
                  Tableau de bord admin
                </Link>
              )}
              {user.role === "parent" && (
                <Link to="/dashboard/parent" className="hover:underline">
                  Tableau de bord parent
                </Link>
              )}
              <button
                onClick={logout}
                className="ml-3 rounded bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
              >
                Déconnexion
              </button>
            </>
          )}
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

export default MainLayout;

