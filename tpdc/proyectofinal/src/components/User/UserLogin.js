import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { authentication, myLogin, isAuth } from '../../helpers';
import { useHistory } from 'react-router-dom';



export const UserLogin = () => {
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(true);
    const { user } = isAuth();

    const registerHandler = () => {
        setRegister(!register)
    }

    const loginHandler = () => {
        setLogin(false)
    }

    const [loginOK, setLoginOK] = useState({
        email: "",
        password: "",
        error: ""
    });


    const history = useHistory();
    console.log(user);
    const handleInputs = (name) => event => {
        setLoginOK({ ...loginOK, error: false, [name]: event.target.value })
    }

    const loginSubmit = (event) => {
        event.preventDefault();

        myLogin(loginOK)
            .then(data => {
                if (data.error) {
                    setLoginOK({ ...loginOK, error: data.error })
                }
                else {
                    authentication(data, () => {
                        setLoginOK({ ...loginOK })
                        history.push("/creator")
                    })

                }
            })

    }



    return (
        <>
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input value={loginOK.email} onChange={handleInputs("email")} id="mail" type="email" name="email" placeholder="Su Email" />
                <label htmlFor="password">Password</label>
                <input value={loginOK.password} onChange={handleInputs("password")} id="password" htmlFor="password" type="password" name="password" placeholder="Su Password" />
                <Button variant="contained" onClick={loginSubmit} color="primary">Iniciar Sesión</Button>
            </form>
        </>
    );
}
