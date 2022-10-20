import React from "react";
import "../hojas-de-estilo/TarjetaImagen.css";

function TarjetaImagen(props) {
  return(
    <div className="contenedor-tarjeta-imagen">
      <h3>{props.titulo}</h3>
    </div>  
  );
}

export default TarjetaImagen;
// TODO Es podria refactoritar perquè tant el títol com la imatge de fons siguin variables