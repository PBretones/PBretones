import '../App.css';
import { useState } from "react";
import Agenda from "../components/Agenda";
import Formulario from "../components/Formulario";

function App() {

  const [contactos, setContactos] = useState([
    { nombre: "John", apellidos: "Smith", direccion: "Calle Compositor", provincia: "Almeria", codigoPostal: "04008", telefono: "684332123" },
    { nombre: "Samuel", apellidos: "L Jackson", direccion: "LA Alto", provincia: "USA", codigoPostal: "04008", telefono: "699434231" },
    { nombre: "Tom", apellidos: "Cruise", direccion: "LA Bajo", provincia: "USA", codigoPostal: "04008", telefono: "622123434" }

  ]);
  return (
    <div className="App">
      <div className="row" >
      <Agenda contactos={contactos} setContactos={setContactos} />
      </div>
      <Formulario setContactos={setContactos} />
    </div>
  );
}

export default App;
