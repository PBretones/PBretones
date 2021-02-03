import {useContext,useState} from "react";
import {GlobalContext} from "../context/Context";

function Formulario (){

    const { setContactos } = useContext(GlobalContext);

    
    const [nombre,setNombre]= useState ("");
    const [apellidos,setApellidos]= useState ("");
    const [direccion,setDireccion]= useState ("");
    const [provincia,setProvincia]= useState ("");
    const [codigoPostal,setCodigoPostal]= useState ("");
    const [telefono,setTelefono]= useState ("");

    const handleSubmit = (evento) => {
        evento.preventDefault();

        const nuevoContacto = {

            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            prvoncia: provincia,
            codigoPosta: codigoPostal,
            telefono: telefono,
        }

        setContactos (prevContactos => [...prevContactos, nuevoContacto]);

        setNombre("");
        setApellidos("");
        setDireccion("");
        setProvincia("");
        setCodigoPostal("");
        setTelefono("");


    }

    const handleNombre = (evento) => {
        setNombre(evento.target.value);
    }
    const handleApellidos = (evento) => {
        setApellidos(evento.target.value);
    }
    const handleDireccion = (evento) => {
        setDireccion(evento.target.value);
    }
    const handleProvincia = (evento) => {
        setProvincia(evento.target.value);
    }
    const handleCodigoPostal = (evento) => {
        setCodigoPostal(evento.target.value);
    }
    const handleTelefono = (evento) => {
        setTelefono(evento.target.value);
    }
    return(
        <form className="form-group col-6" onSubmit={handleSubmit}>
            <h1> Nuevo contacto</h1>
            <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={handleNombre}/>
            <input type="text" className="form-control" placeholder="Apellidos" value={apellidos} onChange={handleApellidos}/>
            <input type="text" className="form-control" placeholder="Direccion" value={direccion} onChange={handleDireccion}/>
            <input type="text" className="form-control" placeholder="Provincia" value={provincia} onChange={handleProvincia}/>
            <input type="text" className="form-control" placeholder="Codigo Postal" value={codigoPostal} onChange={handleCodigoPostal}/>
            <input type="text" className="form-control" placeholder="Telefono" value={telefono} onChange={handleTelefono}/>
            <input type="submit" value="Añadir Contacto" className="btn btn-success"/>

        </form>
    )
}


export default Formulario;