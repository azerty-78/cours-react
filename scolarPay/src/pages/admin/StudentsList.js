import React from "react";
import { Link } from "react-router-dom";

function StudentsList() {
  // Plus tard : récupérer la liste via l'API
  const demoStudents = [
    { id: 1, name: "Étudiant Démo 1", matricule: "IST001" },
    { id: 2, name: "Étudiant Démo 2", matricule: "IST002" },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">Liste des étudiants</h1>
      <p className="text-slate-700 text-sm">
        Cette page permettra de rechercher un étudiant par nom ou matricule.
      </p>
      <ul className="divide-y bg-white rounded-lg shadow-sm">
        {demoStudents.map((s) => (
          <li key={s.id} className="px-4 py-3 flex justify-between text-sm">
            <div>
              <div className="font-medium">{s.name}</div>
              <div className="text-slate-500 text-xs">{s.matricule}</div>
            </div>
            <Link
              to={`/admin/etudiants/${s.id}`}
              className="text-blue-700 hover:underline text-xs"
            >
              Voir le dossier
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;

