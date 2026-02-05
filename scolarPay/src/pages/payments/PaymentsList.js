import React from "react";

function PaymentsList() {
  // Plus tard : récupérer via API les versements récents
  const demoPayments = [
    { id: 1, student: "Étudiant Démo 1", amount: 150000, date: "2026-01-10" },
    { id: 2, student: "Étudiant Démo 2", amount: 100000, date: "2026-01-15" },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Derniers versements enregistrés
      </h1>
      <table className="w-full text-sm bg-white rounded-lg shadow-sm overflow-hidden">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="px-4 py-2">Étudiant</th>
            <th className="px-4 py-2">Montant</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {demoPayments.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.student}</td>
              <td className="px-4 py-2">
                {p.amount.toLocaleString("fr-FR")} FCFA
              </td>
              <td className="px-4 py-2">
                {new Date(p.date).toLocaleDateString("fr-FR")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsList;

