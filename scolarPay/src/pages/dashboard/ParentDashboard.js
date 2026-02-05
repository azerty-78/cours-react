import React from "react";

function ParentDashboard() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Tableau de bord – Parent
      </h1>
      <p className="text-slate-700 text-sm">
        Cette page affichera un résumé financier : frais totaux, montants payés
        et solde restant pour l&apos;étudiant associé.
      </p>
    </div>
  );
}

export default ParentDashboard;

