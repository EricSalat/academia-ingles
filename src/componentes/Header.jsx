import React from "react";
import "../hojas-de-estilo/Header.css";
import BotonNavegacion from "./BotonNavegacion";
import { CgMenuRound} from "react-icons/cg";

export default function Header(props) {
   

  
  return (
    <header>
        <a className="h2">ACADEMIA</a>
        <nav className="nav-desktop">
            <BotonNavegacion texto="Las clases" />
            <BotonNavegacion texto="Los profesores" />
            <BotonNavegacion texto="Precio" />
        </nav>
            <div className="mobile-menu" onClick={props.onclick}>
              <CgMenuRound style={{ color: "var(--grisOscuro)", cursor: "pointer" 
              }} 
              size="40"
               />
            </div>
      </header>
    
    
    
  );
}