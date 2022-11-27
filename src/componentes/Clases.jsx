import React from "react";
import "../hojas-de-estilo/Clases.css";

function Clases(props) {
  return(
    <div className="card-clases" style={props.style}>
      <h3>Clases {props.clases}</h3>
      <p>{props.curso}</p>

      <div className="separador"></div>
      <div>
        <p>Lección de prueba</p>
        <p>{props.disponibilidad}</p>
      </div>
      <div className="separador"></div>
      <div >
        <p>Duración del curso</p>
        <p>{props.duracionCurso}</p>
      </div>
      <div className="separador"></div>
      <div>
        <p>Duración de la lección</p>
        <p>{props.duracionLeccion} minutos</p>
      </div>
      <div className="separador"></div>
      <div>
        <p>Precio</p>
        <p>{props.precio}€</p>
      </div>
      <div className="separador"></div>
      <div>
        <p>Horario</p>
        <p>{props.horario}</p>
      </div>
      <div className="separador"></div>
      <div><button type="button">Inscríbete</button></div>
    </div>  
  );
}

//TODO: Plantejar si aquesta informació podria ser una tabla perquè potser seria més correcte i fàcil per fer les línies del CSS.

export default Clases;