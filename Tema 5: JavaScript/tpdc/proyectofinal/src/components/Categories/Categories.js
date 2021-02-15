import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { CategoriesElements } from './CategoriesElements';
import '../../styles.css';
import comparsa from '../../images/comparsa-la-eternidad-martinez-ares.jpg';
import chirigota from '../../images/chirigota-los-cadizfornia.jpg';
import cuarteto from '../../images/Cuarteto-cuarteto-More_1438667002_117267025_667x375.jpg';
import coro from '../../images/Coro-Creaciones-SA.jpg';
import { Button, Card, Paper, Typography, CardContent, CardActions } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';



export const Categories = () => {
    return (
        <>



            <div className="dashboard">
                <div className="homepageText">
                    <div className="title"><span className="pase">TUPASE</span><span className="carnaval">DECARNAVAL</span></div>
                    <div className="subtitle"><span className="subtext">Crea tu propio pase de carnaval de tu agrupación favorita: elige los audios que más te han gustado,únelos y descárgatelos...o escuchalos online!</span><Button className="moreButton" variant="contained" size="large" color="primary" disableElevation> Saber Más </Button></div>
                </div>
                <div className="cardsRow">
                    <CategoriesElements image={<img src={comparsa} alt="Comparsa" width="250px" height="150px" object-fit="cover" />} children="Comparsa"></CategoriesElements>
                    <CategoriesElements image={<img src={chirigota} alt="Chirigota" width="250px" height="150px" object-fit="cover" />} children="Chirigotas"></CategoriesElements>
                    <CategoriesElements image={<img src={cuarteto} alt="Cuarteto" width="250px" height="150px" object-fit="cover" />} children="Cuartetos"></CategoriesElements>
                    <CategoriesElements image={<img src={coro} alt="Coro" width="250px" height="150px" object-fit="cover" />} children="Coros"></CategoriesElements>
                </div>
            </div>

        </>
    );
}


export default Categories;