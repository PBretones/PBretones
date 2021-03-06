import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React from 'react';
import firstPrize from '../../images/chirigota/los_cadizfornia.jpg';
import secondPrize from '../../images/chirigota/los_impacientes.jpg';
import thirdPrize from '../../images/chirigota/geni_cadiz.jpg';
import fourthPrize from '../../images/chirigota/estres_porcuatro.jpg';



export const CreatorChirigota = () => {
    return (
        <>


            <div className="creatorRow">
                <SearchBox />
                <Tupase children="CHIRIGOTA" />
                <div className="cardsPosition">

                    <Link to="/creator/chirigota/vera_luque" ><CategoriesElements children="VERA LUQUE" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/puerto_real" ><CategoriesElements children="CHIRIGOTA DE PUERTO REAL" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/del_barrio" ><CategoriesElements children="CHIRIGOTA DEL BARRIO" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/chirigota/el_selu" ><CategoriesElements children="GARCÍA COSSÍO 'SELU'" image={<img src={fourthPrize} alt="fourthPrize" width="400px" height="225px" object-fit="cover" />} /></Link>

                </div>
            </div>

        </>
    );
}
