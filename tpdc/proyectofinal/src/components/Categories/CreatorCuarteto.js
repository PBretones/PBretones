import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';
import firstPrize from '../../images/cuarteto/el_more.jpg';
import secondPrize from '../../images/cuarteto/juancarlos_1.jpg';
import thirdPrize from '../../images/cuarteto/cari_resiste.jpg';




export const CreatorCuarteto = () => {
    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="cardsPosition">

                        <Link to="/creator/comparsa/los_niños" ><CategoriesElements children="Los niños" image={<img src={firstPrize} alt="firstPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/comparsa/martinez_ares" ><CategoriesElements children="El Gago" image={<img src={secondPrize} alt="secondPrize" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/comparsa/kike_remolino" ><CategoriesElements children="Javi Aguilera" image={<img src={thirdPrize} alt="thirdPrize" width="350px" height="225px" object-fit="cover" />} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
}
