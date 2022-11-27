import React from "react";
import  { useState } from "react";
import "../hojas-de-estilo/MenuMobile.css";
import BotonNavegacion from "./BotonNavegacion";
import { IoIosClose } from "react-icons/io";

function MenuMobile(props) {

  

  return(
    <div className="mobile-menu-modal" >
      <div>
        <nav>
          <div className="mobile-menu-top">
            <p>A</p>
            <IoIosClose style={{ color: "#fff", cursor: "pointer"}} size="24" onClick={props.onClick}/>
          </div>
          <div className="mobile-menu-bottom">
            <ul>
              <li><a href="#niveles">Niveles</a></li>
              <li><a href="#clases">Las clases</a></li>
              <li><a href="#profesores">Los profesores</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;