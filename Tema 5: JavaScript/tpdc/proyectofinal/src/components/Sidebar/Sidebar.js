import React from "react";
import SidebarElements from './SidebarElements';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { News } from '../../pages/news';
import { Home } from '../../pages/home';
export const Sidebar = () => {
    return (
        <>
            <div className="">

                <SidebarElements width={175} height={"100vh"}>
                    <div className="textGradient">
                        <div className="sideText">
                            <NavLink to="/" className="">Home</NavLink>
                            <NavLink to="/news" className="">Noticias</NavLink>
                            <a>CREADOR</a>
                            <a>USUARIO </a>
                            <a>REPRODUCTOR</a>
                        </div>
                    </div>
                </SidebarElements>


            </div>
        </>
    );
}



<nav className="">


</nav>



