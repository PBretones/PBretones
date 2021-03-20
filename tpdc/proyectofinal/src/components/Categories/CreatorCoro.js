import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React, { useState, useEffect } from 'react';
import firstPrize from '../../images/coro/la_colonial.jpg';
import secondPrize from '../../images/coro/tocame.jpg';
import thirdPrize from '../../images/coro/creaciones_sa.jpg';
import fourthPrize from '../../images/coro/las_doce.jpg';
import slugify from 'slugify';



export const CreatorCoro = () => {

    const [coro, setCoro] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getCoro();
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

    const getCoro = () => {
        return fetch("http://localhost:3002/api/tipo/show", {
            method: "GET",
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setCoro(data);
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
                    <Tupase children="CORO" />
                    <SearchBox />
                </div>
                <div className="cardsPosition">
                    {coro.filter(c => (c.final === true && c.modalidad === "Coro")).map(c => (
                        <Link myAuthor={c.author} key={c._id} to={`/creator/coro/${slugify(c.author, { replacement: "_", lower: true })}`} ><CategoriesElements children={c.name} image={<img src={c.picture} alt="group" width="325px" height="175px" object-fit="cover" />} /></Link>
                    ))}
                </div>
            </div>
        </>
    );
}
