import React from "react";
import SidebarElements from './SidebarElements';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import "../../styles.css";


export const Sidebar = () => {

    return (
        <>
            <SidebarElements width={150}>
                <div className="sideText">
                    <NavLink to="/" className="test">Home</NavLink>
                    <NavLink to="/news" className="test">Noticias</NavLink>
                    <NavLink to="/creator" className="test">Creador</NavLink>
                    <NavLink to="/user" className="test">Usuario</NavLink>
                    <NavLink to="/player" className="test">Reproductor</NavLink>
                </div>
            </SidebarElements>
        </>
    );
}



<nav className="">


</nav>



