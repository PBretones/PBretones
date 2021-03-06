import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import firstPrize from '../../images/comparsa/oh_capitan.jpg';
import secondPrize from '../../images/comparsa/chusma_selecta.jpg';
import thirdPrize from '../../images/comparsa/los_encaidenados.jpg';
import fourthPrize from '../../images/comparsa/los_aislados.jpg';



export const CreatorComparsa = () => {
    return (
        <>


            <div className="creatorRow">
                <SearchBox />
                <Tupase children="COMPARSA" />
                <div className="cardsPosition">
                    <Link to="/creator/comparsa/tino_tovar" ><CategoriesElements children="TINO TOVAR" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/comparsa/martinez_ares" ><CategoriesElements children="MARTINEZ ARES" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/comparsa/kike_remolino" ><CategoriesElements children="KIKE REMOLINO" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/comparsa/el_jona" ><CategoriesElements children="JONATHAN PÉREZ" image={<img src={fourthPrize} alt="fourthPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                </div>
            </div>

        </>
    );
}
