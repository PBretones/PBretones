
import { SearchBox } from './SearchBox';

import { Tupase } from './Tupase';
import { Button } from '@material-ui/core';
import { Audio } from './Audio';
import { addAudio, deleteAudio, isAuth, postPase } from '../../helpers';

import { Switch, Link, Router, useLocation, useHistory } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

export const CreatorAudio = () => {
    const [tipo, setTipo] = useState([]);
    const [audio, setAudio] = useState([]);
    const [error, setError] = useState("");


    const { token } = isAuth();



    useEffect(() => {
        getAudio();
        getTipo();
    }, [])


    const getAudio = () => {
        return fetch("http://localhost:3002/api/audio/show", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setAudio(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getTipo = () => {
        return fetch(`http://localhost:3002/api/tipo/show`, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setTipo(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const tipoLocation = useLocation().pathname.split("/")[4];
    const tipoOne = tipo.find(tipo => tipo._id === tipoLocation);

    const customPase = [];
    const getAudios = () => {

        const newPase = JSON.stringify(customPase);

        localStorage.setItem("audios", newPase);


        return newPase;
    };

    console.log(tipoOne);

    const postCustomPase = () => {

        const userId = isAuth().user._id;
        const postData = { tipo: tipoOne.name, year: tipoOne.year, audios: customPase, picture: tipoOne.picture };
        postPase(userId, postData, token)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

        const newPase = JSON.stringify(customPase);
        localStorage.setItem("audios", newPase);


        return newPase;

    }


    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="topHeader">
                        <SearchBox />
                        {tipo.filter(tipo => tipo._id === tipoLocation).map(audio => (
                            <Tupase key={audio._id} children={(audio.name).replace(/\s+/g, '').toUpperCase()} />))}
                    </div>
                    <div className="authores">
                        <div className="authorCard" >
                            {audio.filter(audio => audio.tipo === tipoLocation).map(audio => (
                                <Audio customPase={customPase} key={audio._id} audio={audio} />
                            ))}
                            <Button onClick={token ? () => postCustomPase() : () => getAudios()} variant="contained" color="primary">START</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
