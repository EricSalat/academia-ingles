import React from "react";
import "../hojas-de-estilo/MenuMobile.css";
import BotonNavegacion from "./BotonNavegacion";
import { IoIosClose } from "react-icons/io";

function MenuMobile() {

  return(
    <div className="mobile-menu-modal">
      <nav>
        <div className="mobile-menu-top">
          <p>A</p>
          <IoIosClose style={{ color: "#fff"}} />
        </div>
        <div className="mobile-menu-bottom">
          <ul>
            <li>Las clases</li>
            <li>Los profesores</li>
            <li>Precio</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MenuMobile;