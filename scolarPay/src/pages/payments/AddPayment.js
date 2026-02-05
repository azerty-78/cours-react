import React, { useState } from "react";

function AddPayment() {
  const [form, setForm] = useState({
    studentMatricule: "",
    amount: "",
    date: "",
    reason: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Plus tard : envoyer vers l'API backend, générer un reçu PDF, etc.
    console.log("Versement soumis", form);
    alert("Versement (démo) enregistré. À connecter à l'API plus tard.");
  }

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold text-slate-900">
        Enregistrer un versement
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm p-4 space-y-4 text-sm"
      >
        <div className="space-y-1">
          <label className="block text-slate-700">Matricule de l&apos;étudiant</label>
          <input
            type="text"
            name="studentMatricule"
            value={form.studentMatricule}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-slate-700">Montant (FCFA)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-slate-700">Date de paiement</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="block text-slate-700">Motif / Observation</label>
          <input
            type="text"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-700 text-white px-4 py-2 text-sm font-medium hover:bg-blue-800"
        >
          Valider le versement
        </button>
      </form>
    </div>
  );
}

export default AddPayment;

