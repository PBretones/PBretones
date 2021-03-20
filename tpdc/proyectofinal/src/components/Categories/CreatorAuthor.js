import { CategoriesElements } from './CategoriesElements';
import { SearchBox } from './SearchBox';
import { Sidebar } from '../Sidebar/Sidebar';
import { Tupase } from './Tupase';

import { Switch, Link, Router, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



export const CreatorAuthor = ({ }) => {
    const [modalidad, setModalidad] = useState([]);
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getAuthor();
        getModalidad();
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


    const getAuthor = () => {
        return fetch("http://localhost:3002/api/author/show", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setAuthor(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getModalidad = () => {
        return fetch(`http://localhost:3002/api/modalidad/show`, {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setModalidad(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const Location = useLocation().pathname.split("/")[2];


    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="topHeader">
                        <SearchBox />
                        <Tupase children={"COMPARSA"} />
                    </div>
                    <div className="authores">
                        {author.filter(author => author.modalidad._id === Location).map(author => (
                            <Link key={author._id} to={`/creator/${author.modalidad._id}/${author._id}`} >
                                <div className="authorCard" key={author._id}>
                                    <p>{author.name}</p>
                                    <img src={author.photo} alt={author.name}></img>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
