import React from "react";
import TarjetaCentral from "../componentes/TarjetaCentral";
import "../hojas-de-estilo/TarjetaNiveles.css";

const TarjetaNiveles = ({titulo, primerTexto, segundoTexto}) => {
  return(
    <div className="contenedor-tarjeta-niveles">
      <div>
        <h3>{titulo}</h3>
        <p>{primerTexto}</p>
        <p>{segundoTexto}</p>
      </div>
      <div>
        <div className="contenedor-nivel-ingles">
          <p className="nivel-ingles">A1 - STARTER</p>
          <p className="nivel-ingles">A2 - KET</p>
          <p className="nivel-ingles">B1 - PET</p>
          <p className="nivel-ingles">B2 - FCE</p>
          <p className="nivel-ingles">C1 - CAE</p>
          <p className="nivel-ingles">C2 - CPE</p>
        </div>
      </div>
    </div>

  );
}

export default TarjetaNiveles;