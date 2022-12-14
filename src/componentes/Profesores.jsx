import React from "react";
import { Link } from "react-router-dom";
import "../hojas-de-estilo/Profesores.css";
import ProfesoresDescripcion from "./ProfesoresDescripcion";

// const fichaProfesores = document.getElementsByClassName("ficha-profesores");
// const profesDescripcion = document.querySelector(".contenedor-profesores-descripcion");

// fichaProfesores.addEventListener("click", mostrarDescripcionProfesores);

// function mostrarDescripcionProfesores () {
//   console.log("Funciona el event Listener");
//   profesDescripcion.classList.toggle("inactivo")
// };


const Profesores = ({nombreProfesor,numProfesor, apellidoProfesor, onclick}) => {

  return(
        <div className="ficha-profesores" >
          <div className="perfil-profesor" onClick={onclick}>
            <img src={require(`../imagenes/profesor-${numProfesor}.jpg`)}>
            </img>
            <p>{nombreProfesor}</p>
            <p>{apellidoProfesor}</p>
          </div>
        </div>
    );
}

export default Profesores;