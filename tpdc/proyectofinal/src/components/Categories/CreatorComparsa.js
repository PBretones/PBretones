import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';
import firstPrize from '../../images/comparsa/oh_capitan.jpg';
import secondPrize from '../../images/comparsa/chusma_selecta.jpg';
import thirdPrize from '../../images/comparsa/los_encaidenados.jpg';
import fourthPrize from '../../images/comparsa/los_aislados.jpg';



export const CreatorComparsa = () => {
    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="cardsPosition">

                        <Link to="/creator/comparsa/tino_tovar" ><CategoriesElements children="Tino Tovar" image={<img src={firstPrize} alt="firstPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/comparsa/martinez_ares" ><CategoriesElements children="Martinez Ares" image={<img src={secondPrize} alt="secondPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/comparsa/kike_remolino" ><CategoriesElements children="Kike Remolino" image={<img src={thirdPrize} alt="thirdPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/comparsa/el_jona" ><CategoriesElements children="El Jona" image={<img src={fourthPrize} alt="fourthPrize" width="350px" height="225px" object-fit="cover" />} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
}
