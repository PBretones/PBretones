import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React, { useState, useEffect } from 'react';
import firstPrize from '../../images/cuarteto/el_more.jpg';
import secondPrize from '../../images/cuarteto/juancarlos_1.jpg';
import thirdPrize from '../../images/cuarteto/cari_resiste.jpg';
import slugify from 'slugify';



export const CreatorCuarteto = () => {
    const [cuarteto, setCuarteto] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getCuarteto();
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

    const getCuarteto = () => {
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
                    setCuarteto(data);
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
                    <Tupase children="CUARTETO" />
                    <SearchBox />
                </div>
                <div className="cardsPosition">
                    {cuarteto.filter(c => (c.final === true && c.modalidad === "Cuarteto")).map(c => (
                        <Link key={c._id} to={`/creator/cuarteto/${slugify(c.author, { replacement: "_" })}`} ><CategoriesElements children={c.name} image={<img src={c.picture} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    ))}
                </div>
            </div>


            {/*  <div className="creatorRow">
                <SearchBox />
                <Tupase children="CUARTETO" />
                <div className="cardsPosition">
                    <Link to="/creator/cuarteto/los_niños" ><CategoriesElements children="LOS NIÑOS" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/cuarteto/el_gago" ><CategoriesElements children="EL GAGO" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/cuarteto/javi_aguilera" ><CategoriesElements children="JAVI AGUILERA" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                </div>
            </div> */}

        </>
    );
}
