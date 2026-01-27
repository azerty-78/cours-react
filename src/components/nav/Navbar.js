import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            🏠 Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            ℹ️ À Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;