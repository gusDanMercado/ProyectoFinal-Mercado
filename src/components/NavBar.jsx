import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <CartWidget /> {/* Agrego el logo de mi E-commerse */}
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Mi E-commerce
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/category/electronica" className="nav-link">
                Electrónica
              </Link>
            </li>
            <li>
              <Link to="/category/ropa" className="nav-link">
                Ropa
              </Link>
            </li>
            <li>
              <Link to="/category/libros" className="nav-link">
                Libros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
