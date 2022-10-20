import React from "react";
import "../hojas-de-estilo/Profesores.css";

function ProfesoresDescripcion ( {nombreProfesor,numProfesor, apellidoProfesor} ) {
  return(
    <div className="contenedor-profesores-descripcion">
      <div className="tarjeta-profesores">
        <img src={require(`../imagenes/profesor-${numProfesor}.jpg`)} />
        <div>
          <p>¿Quién me va a enseñar?</p>
          <p>{nombreProfesor}</p>
          <p>{apellidoProfesor}</p>
        </div>
      </div>
      <div className="logros-contenedor">
          <p>Logros:</p>
          <div className="logros-lista">
            <p>+27 empresas clientes</p>
            <p>Profesora en las principales escuelas de idiomas</p>
            <p>Formadora en el Instituto Internacional</p>
            <p>11 años como docente</p>
            <p>Lingüista</p>
            <p>Domina 5 idiomas</p>
          </div>
        </div>
    </div>  
  );
}

export default ProfesoresDescripcion;