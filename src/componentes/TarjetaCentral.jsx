import React from "react";
import "../hojas-de-estilo/TarjetaCentral.css";

function TarjetaCentral(props) {
  return(
    <div className="contenedor-tarjeta-central" style={props.style}>
      <h2>{props.titulo}</h2>
      <p>{props.primerTexto}</p>
      <p>{props.segundoTexto}</p>
    </div>  
  );
}

export default TarjetaCentral;