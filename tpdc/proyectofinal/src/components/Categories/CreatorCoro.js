import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';
import firstPrize from '../../images/coro/la_colonial.jpg';
import secondPrize from '../../images/coro/tocame.jpg';
import thirdPrize from '../../images/coro/creaciones_sa.jpg';
import fourthPrize from '../../images/coro/las_doce.jpg';



export const CreatorCoro = () => {
    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="cardsPosition">

                        <Link to="/creator/coro/tino_tovar" ><CategoriesElements children="Tino Tovar" image={<img src={firstPrize} alt="firstPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/coro/martinez_ares" ><CategoriesElements children="Martinez Ares" image={<img src={secondPrize} alt="secondPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/coro/kike_remolino" ><CategoriesElements children="Kike Remolino" image={<img src={thirdPrize} alt="thirdPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/coro/el_jona" ><CategoriesElements children="El Jona" image={<img src={fourthPrize} alt="fourthPrize" width="350px" height="225px" object-fit="cover" />} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
}
