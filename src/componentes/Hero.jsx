import React from "react";
import "../hojas-de-estilo/Hero.css";
// import "../hojas-de-estilo/BotonNavegacion.css";
import BotonNavegacion from "./BotonNavegacion";

const Hero = (props) => {
  return(
    <div className="container-hero">
      <div>
        <h1>Academia de inglés</h1>
      </div>
      <div className="hero-text">
        <p>Consigue un nuevo nivel de inglés para trabajar y estudiar </p>
        <p>Clases online individuales y grupales para adultos y jóvenes.</p>
        <BotonNavegacion 
          texto="Inscríbete"
          // className="verde" 
         />
      </div>
    </div>
  );
}

export default Hero;

