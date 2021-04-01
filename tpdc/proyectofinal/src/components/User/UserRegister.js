import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { authentication, mySignUp } from '../../helpers';
import { useHistory } from 'react-router-dom';


export const UserRegister = ({ setStart }) => {
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(true);

    const registerHandler = () => {
        setRegister(!register)
    }

    const loginHandler = () => {
        setLogin(false)
    }

    const [signUpOK, setSignUpOK] = useState({
        username: "",
        email: "",
        password: "",
        error: ""
    });
    const history = useHistory();

    const handleInputs = (name) => event => {
        setSignUpOK({ ...signUpOK, error: false, [name]: event.target.value })
    }

    const signUpSubmit = (event) => {
        event.preventDefault();

        mySignUp(signUpOK)
            .then(data => {
                if (data.error) {
                    setSignUpOK({ ...signUpOK, error: data.error })
                }
                else {

                    setSignUpOK({
                        username: "",
                        email: "",
                        password: "",
                        error: ""
                    })

                    authentication(data, () => {
                        setSignUpOK({ ...signUpOK })
                        history.push("/")


                    })



                }
            })


    }


    return (
        <>
            <div className="loginButtons">
                <form className="loginForm" method="POST">
                    <label htmlFor="username">Apodo</label>
                    <input value={signUpOK.username} onChange={handleInputs("username")} id="username" type="text" name="username" placeholder="Su Apodo" />
                    <label htmlFor="email">Email</label>
                    <input value={signUpOK.email} onChange={handleInputs("email")} id="mail" type="email" name="email" placeholder="Su Email" />
                    <label htmlFor="password">Password</label>
                    <input value={signUpOK.password} onChange={handleInputs("password")} id="password" htmlFor="password" type="password" name="password" placeholder="Su Password" />
                    <Button variant="contained" onClick={signUpSubmit} color="primary">Registrarse</Button>
                </form>
            </div>



        </>
    );
}