import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';
import firstPrize from '../../images/chirigota/los_cadizfornia.jpg';
import secondPrize from '../../images/chirigota/los_impacientes.jpg';
import thirdPrize from '../../images/chirigota/geni_cadiz.jpg';
import fourthPrize from '../../images/chirigota/estres_porcuatro.jpg';



export const CreatorChirigota = () => {
    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="cardsPosition">

                        <Link to="/creator/chirigota/vera_luque" ><CategoriesElements children="Vera Luque" image={<img src={firstPrize} alt="firstPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/chirigota/coto_antoñito" ><CategoriesElements children="Fermín Coto y Antoñito" image={<img src={secondPrize} alt="secondPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/chirigota/del_barrio" ><CategoriesElements children="Chirigota del barrio" image={<img src={thirdPrize} alt="thirdPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/chirigota/el_selu" ><CategoriesElements children="García Cossío 'Selu'" image={<img src={fourthPrize} alt="fourthPrize" width="350px" height="225px" object-fit="cover" />} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
}
