import { CategoriesElements } from './CategoriesElements';
import { SearchBox } from './SearchBox';
import { Sidebar } from '../Sidebar/Sidebar';
import { Tupase } from './Tupase';

import { Switch, Link, Router, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



export const CreatorAudio = ({ }) => {
    const [tipo, setTipo] = useState([]);
    const [audio, setAudio] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getAudio();
        getTipo();
    }, [])


    // A MANO
    const requestOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'applications/json',
            'Mode': 'no-cors'
        }
    };


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

    const tipoLocation = useLocation().pathname.split("/")[3];




    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="topHeader">
                        <SearchBox />
                        <Tupase children={"COMPARSA"} />
                    </div>
                    <div className="authores">
                        {console.log({ tipoLocation })}
                        {console.log(audio)}
                        {audio.map(audio => (
                            <div className="authorCard" key={audio._id}>
                                <button><a href={audio.mp3}>{audio.name}</a></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
