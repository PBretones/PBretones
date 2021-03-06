import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Tupase } from '../Categories/Tupase';
import { SearchBox } from '../Categories/SearchBox';
import React from 'react';
import firstPrize from '../../images/cuarteto/el_more.jpg';
import secondPrize from '../../images/cuarteto/juancarlos_1.jpg';
import thirdPrize from '../../images/cuarteto/cari_resiste.jpg';




export const CreatorCuarteto = () => {
    return (
        <>


            <div className="creatorRow">
                <SearchBox />
                <Tupase children="CUARTETO" />
                <div className="cardsPosition">

                    <Link to="/creator/cuarteto/los_niños" ><CategoriesElements children="LOS NIÑOS" image={<img src={firstPrize} alt="firstPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/cuarteto/el_gago" ><CategoriesElements children="EL GAGO" image={<img src={secondPrize} alt="secondPrize" width="400px" height="225px" object-fit="cover" />} /></Link>
                    <Link to="/creator/cuarteto/javi_aguilera" ><CategoriesElements children="JAVI AGUILERA" image={<img src={thirdPrize} alt="thirdPrize" width="400px" height="225px" object-fit="cover" />} /></Link>

                </div>
            </div>

        </>
    );
}
