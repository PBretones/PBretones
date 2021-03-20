import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React, { useState, useEffect } from 'react';
import firstPrize from '../../images/chirigota/los_cadizfornia.jpg';
import secondPrize from '../../images/chirigota/los_impacientes.jpg';
import thirdPrize from '../../images/chirigota/geni_cadiz.jpg';
import fourthPrize from '../../images/chirigota/estres_porcuatro.jpg';
import slugify from 'slugify';



export const CreatorChirigota = () => {

    const [chirigota, setChirigota] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        getChirigota();
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

    const getChirigota = () => {
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
                    setChirigota(data);
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
                    <Tupase children="CHIRIGOTA" />
                </div>

                <div className="cardsPosition">
                    {chirigota.filter(c => (c.final === true && c.modalidad === "Chirigota")).map(c => (
                        <Link key={c._id} to={`/creator/chirigota/${slugify(c.author, { replacement: "_" })}`} ><CategoriesElements children={c.name} image={<img src={c.picture} alt="group" width="325px" height="175px" object-fit="cover" />} /></Link>
                    ))}
                </div>
            </div>

            {/* <div className="creatorRow">
                <SearchBox />
                <Tupase children="CHIRIGOTA" />
                <div className="cardsPosition">

                    <Link to="/creator/chirigota/vera_luque" ><CategoriesElements children="VERA LUQUE" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/puerto_real" ><CategoriesElements children="CHIRIGOTA DE PUERTO REAL" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/del_barrio" ><CategoriesElements children="CHIRIGOTA DEL BARRIO" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/el_selu" ><CategoriesElements children="GARCÍA COSSÍO 'SELU'" image={<img src={fourthPrize} alt="fourthPrize" width="400px" height="225px" object-fit="cover" />} /></Link>

                </div>
            </div> */}

        </>
    );
}
