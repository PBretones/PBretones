import React from 'react';
import {GlobalContext} from "./context/Context";
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from './pages/Ejercicio2';
import './App.css';
import {useState, useEffect} from "react";

function App() {

  //Ejercicio 1
  const [contactos, setContactos] = useState([
    { nombre: "John", apellidos: "Smith", direccion: "Calle Compositor", provincia: "Almeria", codigoPostal: "04008", telefono: "684332123" },
    { nombre: "Samuel", apellidos: "L Jackson", direccion: "LA Alto", provincia: "USA", codigoPostal: "04008", telefono: "699434231" },
    { nombre: "Tom", apellidos: "Cruise", direccion: "LA Bajo", provincia: "USA", codigoPostal: "04008", telefono: "622123434" }

  ]);


  // Ejercicio 2
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 21)));

  }, []);




  return (
    <>
      <BrowserRouter >
        <nav className="bg-dark py-3 row justify-content-around">
          <NavLink to="/Ejercicio1" className="font-weight-bold text-light text-decoration-none">Ejercicio 1</NavLink>
          <NavLink to="/Ejercicio2" className="font-weight-bold text-light text-decoration-none">Ejercicio 2</NavLink>
        </nav>

        <GlobalContext.Provider value={{contactos, setContactos, toDos, setToDos}}>
          <Route path="/Ejercicio1" component={Ejercicio1} />
          <Route path="/Ejercicio2" component={Ejercicio2} />
        </GlobalContext.Provider>
      </BrowserRouter>

    </>
  );
}

export default App;
