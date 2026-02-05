import React from "react";

function AdminDashboard() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Tableau de bord – Administration
      </h1>
      <p className="text-slate-700 text-sm">
        Cette page affichera les indicateurs clés : nombre d&apos;étudiants, solde
        total restant, derniers versements, alertes, etc.
      </p>
    </div>
  );
}

export default AdminDashboard;

