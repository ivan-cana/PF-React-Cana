import React, { useState } from "react";
import "./MenuHamburguesa.css";
import "../../../../node_modules/bulma/css/bulma.css";
import CartWidget from "../../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const MenuHamburguesa = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contenedorMenuHamburguesa">
      <button className="btnMenuHamburguesa button is-primary" onClick={() => setOpen(!open)}>
        <span className="barra"></span>
        <span className="barra"></span>
        <span className="barra"></span>
      </button>

      <nav className={open ? "open" : "closed"}>
        <ul>
          <li><NavLink to={`/category/hombre`}>Hombres</NavLink></li>
          <li><NavLink to={`/category/mujeres`}>Mujeres</NavLink></li>
          <li><NavLink to={`/category/niños`}>Niños</NavLink></li>
          <li><NavLink to={`/contacto`}>Contacto</NavLink></li>
          <li><CartWidget className="carrito"/></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHamburguesa;
