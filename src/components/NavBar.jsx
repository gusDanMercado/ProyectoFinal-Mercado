import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "./CartContext";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        MiTienda
      </Link>
      <div className="navbar-nav me-auto">
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/category/electronica">
          Electrónica
        </NavLink>
        <NavLink className="nav-link" to="/category/ropa">
          Ropa
        </NavLink>
        <NavLink className="nav-link" to="/category/libros">
          Libros
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
