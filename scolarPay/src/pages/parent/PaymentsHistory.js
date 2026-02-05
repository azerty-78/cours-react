import React from "react";

function PaymentsHistory() {
  // Plus tard : récupérer l'historique du parent connecté
  const demoHistory = [
    { id: 1, label: "Versement 1", amount: 150000, date: "2026-01-10" },
    { id: 2, label: "Versement 2", amount: 100000, date: "2026-01-15" },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Historique de vos versements
      </h1>
      <table className="w-full text-sm bg-white rounded-lg shadow-sm overflow-hidden">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="px-4 py-2">Libellé</th>
            <th className="px-4 py-2">Montant</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Reçu</th>
          </tr>
        </thead>
        <tbody>
          {demoHistory.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.label}</td>
              <td className="px-4 py-2">
                {p.amount.toLocaleString("fr-FR")} FCFA
              </td>
              <td className="px-4 py-2">
                {new Date(p.date).toLocaleDateString("fr-FR")}
              </td>
              <td className="px-4 py-2 text-blue-700 text-xs">
                {/* Plus tard : lien vers le PDF réel */}
                <button className="hover:underline">Télécharger le reçu (démo)</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsHistory;

