import React from "react";
import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  // Plus tard : récupérer les infos réelles de l'étudiant et son solde
  const demoStudent = {
    id,
    name: "Étudiant Démo",
    matricule: "IST00X",
    totalFees: 500000,
    paid: 300000,
  };

  const remaining = demoStudent.totalFees - demoStudent.paid;

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Dossier de l&apos;étudiant
      </h1>
      <div className="bg-white rounded-lg shadow-sm p-4 text-sm space-y-2">
        <div>
          <span className="font-medium">Nom : </span>
          {demoStudent.name}
        </div>
        <div>
          <span className="font-medium">Matricule : </span>
          {demoStudent.matricule}
        </div>
        <div>
          <span className="font-medium">Frais totaux : </span>
          {demoStudent.totalFees.toLocaleString("fr-FR")} FCFA
        </div>
        <div>
          <span className="font-medium">Montant payé : </span>
          {demoStudent.paid.toLocaleString("fr-FR")} FCFA
        </div>
        <div>
          <span className="font-medium">Solde restant : </span>
          {remaining.toLocaleString("fr-FR")} FCFA
        </div>
      </div>
      <p className="text-slate-600 text-xs">
        Plus tard, cette page affichera aussi l&apos;historique des versements pour
        cet étudiant, avec lien vers chaque reçu PDF.
      </p>
    </div>
  );
}

export default StudentDetails;

