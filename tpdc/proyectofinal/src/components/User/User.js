import { Button, withStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { UserLogin } from '../User/UserLogin';
import { UserRegister } from '../User/UserRegister';



export const UserUnknown = () => {
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    const [start, setStart] = useState(true);

    const registerHandler = () => {
        setRegister(!register)
        setStart(!start)
    }

    const loginHandler = () => {
        setLogin(!login)
        setStart(!start)
    }


    return (
        <>
            <div className="user">
                <div className="userLogin">
                    <div className="loginDetails">
                        <span className="loginTitle">Bienvenido,
                            carnavalero</span>
                    </div>
                    {start && <div className="loginSubtitle"><span>See all the new features we’ve added through our tutorial.</span>
                        <span>See all the new features we’ve added through our tutorial.</span></div>}
                    {login ? <UserLogin /> : ""}
                    {register ? <UserRegister /> : ""}

                    {start && <div className="loginButtons">
                        <Button onClick={registerHandler} variant="containedSecondary" color="secondary">Registrarse</Button>
                        <Button onClick={loginHandler} variant="containedSecondary" color="secondary"><p>Iniciar sesión</p></Button>
                    </div>}
                </div>
            </div>


        </>
    );
}
