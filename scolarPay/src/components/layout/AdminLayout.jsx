import React from "react";
import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-6">
      <aside className="bg-white rounded-lg shadow-sm p-4 space-y-3 text-sm">
        <h2 className="font-semibold text-slate-800 mb-2">Espace Admin</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard/admin" className="hover:text-blue-700">
            Tableau de bord
          </Link>
          <Link to="/admin/etudiants" className="hover:text-blue-700">
            Étudiants
          </Link>
          <Link to="/admin/versements" className="hover:text-blue-700">
            Versements
          </Link>
          <Link to="/admin/versements/nouveau" className="hover:text-blue-700">
            Ajouter un versement
          </Link>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}

export default AdminLayout;

