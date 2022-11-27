//Faltará Logo en svg
import React from "react";
import Header from "./componentes/Header";
import BotonNavegacion from "./componentes/BotonNavegacion";
import Hero from "./componentes/Hero";
import TestIngles from "./componentes/TestIngles";
import TarjetaCentral from "./componentes/TarjetaCentral";
import TarjetaImagen from "./componentes/TarjetaImagen";
import TarjetaNiveles from "./componentes/TarjetaNiveles";
import Profesores from "./componentes/Profesores";
import ProfesoresDescripcion from "./componentes/ProfesoresDescripcion";
import Clases from "./componentes/Clases";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <div className="App">
    <div className="container">
      <Header />
      <main>
        <section>
          <Hero />
          <TestIngles />
        </section>
          <section>
            <TarjetaCentral
              titulo="Enfócate en tu especialización y necesidades. "
              style={{ backgroundColor: "var(--verde)"}}
              primerTexto="Después de la prueba inicial y una lección de prueba gratuita, el profesor seleccionará un grupo específicamente para tus tareas. "
              segundoTexto="¡Aprenderás solo lo que te es realmente útil para obtener un certificado internacional, trabajar o estudiar en el extranjero! "
            />
            <TarjetaCentral
              titulo="Materiales didácticos y modernos "
              style={{ backgroundColor: "var(--gris)"}}
              primerTexto="La capacitación se lleva a cabo con los libros de texto de las principales editoriales internacionales y materiales originales (artículos, fragmentos de audio y vídeo). "
              segundoTexto="La combinación de ejercicios y tecnologías modernas te ayudará a aprender y comprender el inglés. Hablarás con competencia y confianza a buen ritmo. "
            />
            <TarjetaImagen
              titulo="Práctica de habla intensiva y variada"
             />
             <TarjetaNiveles
              titulo="Oportunidad de prepararse para un examen internacional"
              primerTexto="Durante la capacitación podrá no solo mejorar su inglés, sino también comprender la estructura y complejidades del examen elegido."
              segundoTexto="El profesor te ayudará a practicar la técnica de pasar cada etapa del examen y compartir secretos y trucos de vida."
              />
          </section>
          <section>
            <div className="contenedor-profesores">
              <Profesores
                nombreProfesor="Ekaterina"
                apellidoProfesor="Anatolyeva"
                numProfesor="1"
               />
              <Profesores
                nombreProfesor="Juana"
                apellidoProfesor="Rodriguez"
                numProfesor="2"
               />
              <Profesores
                nombreProfesor="Michael"
                apellidoProfesor="Boston"
                numProfesor="3"
               />
            </div>
            <ProfesoresDescripcion
            nombreProfesor="Ekaterina"
            apellidoProfesor="Anatolyeva"
            numProfesor="1"
           />
          </section>
          <section>
            <div className="contenedor-clases">
              <h2>Matrícula y costes</h2>
                <Clases 
                  clases="grupales"
                  curso="Curso general"
                  disponibilidad="Disponible"
                  duracionCurso="1 mes. 2 lecciones por semana"
                  duracionLeccion="90"
                  precio="263"
                  horario="Lunes y Viernes. 19:30 - 21:00h"
                  style={{backgroundColor: "var(--lila)"}}                />
                <Clases 
                  clases="individuales"
                  curso="Curso intensivo"
                  disponibilidad="Disponible"
                  duracionCurso="A acordar"
                  duracionLeccion="60 / 90"
                  precio="1 lección - 50"
                  horario="A acordar"
                  style={{backgroundColor: "var(--verde)"}}                 

                  />
            </div>
          </section>
      </main>
    </div>
    </div>
  );
}

export default App;
