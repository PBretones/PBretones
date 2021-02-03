function Tabla(props) {
   
    return(
        <>
       <table>
           <thead>
           <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Categoria</th>
           </tr>
           </thead>
           <tbody>{props.amigos.map(value=>{return(<tr>{value.productos}
           <td>{value.marca}</td>
           <td>{value.precio}</td>
           {/* <td>{Object.values(amigos).map((cell) => <td>{cell}</td>)}</td> */}
                     
           </tr>)})}</tbody>
           
       </table>
       </>
    )
}

export default Tabla;
