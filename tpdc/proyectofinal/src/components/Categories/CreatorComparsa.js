import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import { CreatorAuthor } from './CreatorAuthor';




export const CreatorComparsa = () => {

    const [comparsa, setComparsa] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getComparsa();
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

    const getComparsa = () => {
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
                    setComparsa(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>

            <div className="creatorRow">
                <div className="topHeader">
                    <SearchBox />
                    <Tupase children="COMPARSA" />
                </div>
                <div className="authores">
                    {comparsa.filter(author => author.name === "605103d279b6a8875392b395").map(author => (
                        <div className="authorCard" key={author._id}>
                            <img src={author.photo} alt={author.name} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
