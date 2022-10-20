import React from "react";
import "../hojas-de-estilo/BotonNavegacion.css";

function BotonNavegacion(props) {
  return(
    <button type="button">{props.texto}</button>
  );
}

export default BotonNavegacion;