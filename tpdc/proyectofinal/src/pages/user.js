
import { Button } from '@material-ui/core';



export const User = () => {
    return (
        <>
            <div className="falla">

                <div className="user">
                    <div className="userLogin">
                        <div className="loginDetails">
                            <span className="loginTitle">Bienvenido,
                            carnavalero</span>
                        </div>
                        <div className="loginSubtitle"><span>See all the new features we’ve added through our tutorial.</span>
                            <span>See all the new features we’ve added through our tutorial.</span></div>
                        <div className="loginButtons">

                            <Button variant="contained" color="primary" >Registrarse</Button>
                            <Button variant="contained" color="primary">Iniciar sesión</Button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

