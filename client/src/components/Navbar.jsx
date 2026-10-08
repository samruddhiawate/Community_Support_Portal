import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">🤝</span>
          Community Care
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/organizations">Organizations</Link>
          <Link to="/about">About</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;