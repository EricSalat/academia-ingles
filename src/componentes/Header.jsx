import React from "react";
import "../hojas-de-estilo/Header.css";
import BotonNavegacion from "./BotonNavegacion";
import list from "../assets/list.svg";
import { CgMenuRound} from "react-icons/cg";

export default function Header() {
   
  
  
  return (
    <header>
        <p className="h2">ACADEMIA</p>
        <nav className="nav-desktop">
            <BotonNavegacion texto="Las clases" />
            <BotonNavegacion texto="Los profesores" />
            <BotonNavegacion texto="Precio" />
        </nav>
            <div className="mobile-menu">
              <CgMenuRound style={{ color: "var(--grisOscuro)", cursor: "pointer" 
              }} 
              size="40"
               />
            </div>
      </header>
    
    
    
  );
}