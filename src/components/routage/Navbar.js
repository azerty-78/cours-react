import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-400 font-semibold'
      : 'text-white hover:text-gray-200';

  return (
    <nav className="bg-gray-800 text-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-xl font-bold">
            Mon App
          </Link>
          <div className="flex gap-6">
            <NavLink to="/" end className={linkClass}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              À propos
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/etudiants" className={linkClass}>
              Gestion Étudiants
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
