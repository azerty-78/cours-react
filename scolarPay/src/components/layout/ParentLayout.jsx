import React from "react";
import { Link } from "react-router-dom";

function ParentLayout({ children }) {
  return (
    <div className="grid grid-cols-[220px_1fr] gap-6">
      <aside className="bg-white rounded-lg shadow-sm p-4 space-y-3 text-sm">
        <h2 className="font-semibold text-slate-800 mb-2">Espace Parent</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard/parent" className="hover:text-blue-700">
            Tableau de bord
          </Link>
          <Link to="/parent/versements" className="hover:text-blue-700">
            Historique des versements
          </Link>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}

export default ParentLayout;

