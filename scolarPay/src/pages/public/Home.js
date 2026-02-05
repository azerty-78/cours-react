import React from "react";

function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        ScolarPay – Gestion des frais de scolarité
      </h1>
      <p className="text-slate-700">
        Ce projet a pour but de moderniser la gestion des frais de scolarité de
        l&apos;IST en offrant un tableau de bord pour l&apos;administration et un
        espace sécurisé pour les parents.
      </p>
      <p className="text-slate-600 text-sm">
        Utilise ce dépôt comme guide pour apprendre un{" "}
        <strong>processus professionnel</strong> de création d&apos;une application
        web de A à Z.
      </p>
    </div>
  );
}

export default Home;

