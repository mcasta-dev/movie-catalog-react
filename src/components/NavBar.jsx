import { Link } from "react-router-dom";
import "../styles/NavBar.css"

export function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-brand">
        <Link to="/">Movie App </Link>
      </div>
      <div className="nav-bar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
