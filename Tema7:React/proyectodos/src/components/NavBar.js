function NavBar() {
    const verMensaje = (nombre) => {
        console.log(nombre);
        return (event) => {
            alert(`Hola ${nombre}`)
        }
    }
    return (
        <>
            <div onClick={verMensaje("John")} className="button">
                <a href="_blank"><button>Press me</button></a>
            </div>

            <div className="links">
                <a href="#">No refresh</a>
                <a href="_blank">Refresh in the same page</a>
            </div>

        </>
    );
}


export default NavBar;