
function Lista(props) {

    return (
        <>
            <h1>{props.categoria}</h1>
            <ul>
                {props.amigos.map(amigos =>
                    <li>
                        {amigos.id + " "}
                        {amigos.productos + " "}
                        {amigos.marca + " "}
                        {amigos.theme && amigos.theme + " "} 
                        {amigos.precio}
                    </li>)}
            </ul>
           
        </>
    )
}

export { Lista };