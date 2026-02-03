import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page introuvable</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
