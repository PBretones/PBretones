import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React from 'react';
import firstPrize from '../../images/coro/la_colonial.jpg';
import secondPrize from '../../images/coro/tocame.jpg';
import thirdPrize from '../../images/coro/creaciones_sa.jpg';
import fourthPrize from '../../images/coro/las_doce.jpg';



export const CreatorCoro = () => {
    return (
        <>


            <div className="creatorRow">
                <SearchBox />
                <Tupase children="CORO" />
                <div className="cardsPosition">
                    <Link to="/creator/coro/david_fernandez" ><CategoriesElements children="DAVID FERNÁNDEZ" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/coro/julio_pardo" ><CategoriesElements children="JULIO PARDO" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/coro/nandi_migueles" ><CategoriesElements children="NANDI MIGUELES" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/coro/luis_rivero" ><CategoriesElements children="LUIS RIVERO" image={<img src={fourthPrize} alt="fourthPrize" width="400px" height="225px" object-fit="cover" />} /></Link>

                </div>
            </div>

        </>
    );
}
