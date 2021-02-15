import React from "react";
import { CategoriesElements } from './CategoriesElements';
import '../../styles.css';
import comparsa from '../../images/comparsa/la_eternidad.jpg';
import chirigota from '../../images/chirigota/los_cadizfornia.jpg';
import cuarteto from '../../images/cuarteto/el_more.jpg';
import coro from '../../images/coro/creaciones_sa.jpg';
import { Button } from '@material-ui/core';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


export const Categories = () => {
    return (
        <>
            <div className="dashboard">
                <div className="homepageText">
                    <div className="title"><span className="pase">TUPASE</span><span className="carnaval">DECARNAVAL</span></div>
                    <div className="subtitle"><span className="subtext">Crea tu propio pase de carnaval de tu agrupación favorita: elige los audios que más te han gustado,únelos y descárgatelos...o escuchalos online!</span><Button className="moreButton" variant="contained" size="large" color="primary" disableElevation> Saber Más </Button></div>
                </div>
                <div className="cardsRow">
                    <Link to='/creator/comparsa' ><CategoriesElements image={<img src={comparsa} alt="Comparsa" width="250px" height="150px" object-fit="cover" />} children="Comparsa"></CategoriesElements></Link>
                    <Link to="/creator/chirigota" ><CategoriesElements image={<img src={chirigota} alt="Chirigota" width="250px" height="150px" object-fit="cover" />} children="Chirigotas"></CategoriesElements></Link>
                    <Link to="/creator/cuarteto" ><CategoriesElements image={<img src={cuarteto} alt="Cuarteto" width="250px" height="150px" object-fit="cover" />} children="Cuartetos"></CategoriesElements></Link>
                    <Link to="/creator/coro" ><CategoriesElements image={<img src={coro} alt="Coro" width="250px" height="150px" object-fit="cover" />} children="Coros"></CategoriesElements></Link>
                </div>
            </div>
        </>
    );
}
export default Categories;