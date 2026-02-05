import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-red-600">
        404 – Page introuvable
      </h1>
      <p className="text-slate-700">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link to="/" className="text-blue-700 hover:underline">
        Revenir à l&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;

