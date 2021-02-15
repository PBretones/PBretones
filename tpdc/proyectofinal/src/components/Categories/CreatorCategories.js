import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import comparsa1 from '../../images/comparsa/la_eternidad.jpg';
import comparsa2 from '../../images/comparsa/oh_capitan.jpg';
import comparsa3 from '../../images/comparsa/chusma_selecta.jpg';
import comparsa4 from '../../images/comparsa/los_encaidenados.jpg';
import chirigota1 from '../../images/chirigota/lapa_negra.jpg';
import chirigota2 from '../../images/chirigota/los_enteraos.jpg';
import chirigota3 from '../../images/chirigota/los_impacientes.jpg';
import chirigota4 from '../../images/chirigota/estosiquees_unachirigota.jpeg'
import cuarteto1 from '../../images/cuarteto/el_more.jpg';
import cuarteto2 from '../../images/cuarteto/a_minuscula.jpg';
import cuarteto3 from '../../images/cuarteto/nos_retiramos.jpg';
import cuarteto4 from '../../images/cuarteto/la_mary.jpg';
import coro1 from '../../images/coro/creaciones_sa.jpg';
import coro2 from '../../images/coro/el_orfeon.jpg';
import coro3 from '../../images/coro/el_patio.jpg';
import coro4 from '../../images/coro/rockola.jpg';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import React from 'react';





export const CreatorCategories = () => {

    const firstComparsa = [comparsa1, comparsa2, comparsa3, comparsa4];
    const firstChirigota = [chirigota1, chirigota2, chirigota3, chirigota4];
    const firstCuarteto = [cuarteto1, cuarteto2, cuarteto3, cuarteto4];
    const firstCoro = [coro1, coro2, coro3, coro4];
    const randomComparsa = firstComparsa[Math.floor(Math.random() * firstComparsa.length)];
    const randomChirigota = firstChirigota[Math.floor(Math.random() * firstChirigota.length)];
    const randomCuarteto = firstCuarteto[Math.floor(Math.random() * firstCuarteto.length)];
    const randomCoro = firstCoro[Math.floor(Math.random() * firstCoro.length)];

    return (
        <>
            <div className="creator">
                <div className="creatorRow">
                    <div className="cardsPosition">

                        <Link to='/creator/comparsa' ><CategoriesElements children="comparsa" image={<img src={randomComparsa} alt={"Comparsa"} width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/chirigota" ><CategoriesElements children="chirigota" image={<img src={randomChirigota} alt="Chirigota" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/cuarteto" ><CategoriesElements children="cuarteto" image={<img src={randomCuarteto} alt="Cuarteto" width="350px" height="225px" object-fit="cover" />} /></Link>
                        <Link to="/creator/coro" ><CategoriesElements children="coro" image={<img src={randomCoro} alt="Coro" width="350px" height="225px" object-fit="cover" />} /></Link>

                    </div>
                </div>
            </div>
        </>
    );
}
