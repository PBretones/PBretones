import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from './pages/Ejercicio2';
import './App.css';

function App() {


  return (
    <>
      <BrowserRouter >
      <nav className="bg-dark py-3 row justify-content-around">
       <NavLink to="/Ejercicio1" className="font-weight-bold text-light text-decoration-none">Ejercicio 1</NavLink>
       <NavLink to="/Ejercicio2" className="font-weight-bold text-light text-decoration-none">Ejercicio 2</NavLink>
       </nav>


       <Route path="/Ejercicio1" component={Ejercicio1}/>
       <Route path="/Ejercicio2" component={Ejercicio2}/>
      </BrowserRouter>

    </>
  );
}

export default App;
