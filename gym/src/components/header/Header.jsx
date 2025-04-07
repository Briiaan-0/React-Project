import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav">
        <div className="img">
          <Link to="/">
            <img src="/img/Logo.png" alt="GymTracker Logo" />
          </Link>
        </div>

        {/* Botón Hamburguesa (Solo en móviles) */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menú de Navegación */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/mifit" onClick={() => setMenuOpen(false)}>MiFit</Link></li>
            <li><Link to="/routine" onClick={() => setMenuOpen(false)}>Rutinas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
