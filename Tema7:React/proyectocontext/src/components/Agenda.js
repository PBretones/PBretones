import {useContext} from "react";
import {GlobalContext} from "../context/Context";

function Agenda() { // o props aqui --- y si fuesen varios {contactos, item2}
    
const {contactos, setContactos} = useContext(GlobalContext);

const removeContact = (evento,telefono) => {
    setContactos (prevContactos => prevContactos.filter(contacto => contacto.telefono !== telefono));
}



return (
        <>
            {/* <pre>{JSON.stringify(contactos,null,2)}</pre> {/* y props.contactos aqui */}

            {contactos.map((contacto, index) => {
                return (
                    <div className="col-3">

                        <ul key={contacto.telefono} className="list-group mb-4">
                            <li className="list-group-item active">Contacto {index}</li>
                            <li className="list-group-item">{contacto.nombre}</li>
                            <li className="list-group-item">{contacto.apellidos}</li>
                            <li className="list-group-item">{contacto.direccion},{contacto.provincia},{contacto.codigoPostal}</li>
                            <li className="list-group-item">{contacto.telefono}</li>
                            <li className="list-group-item"><button className ="btn btn-warning" onClick={(evento) => removeContact(evento,contacto.telefono)}>Eliminar</button></li>
                        </ul>
                    </div>
                )
            })}

        </>
    )
}



export default Agenda;
