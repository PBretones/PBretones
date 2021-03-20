import React, { useState } from "react";
import SidebarElements from './SidebarElements';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const against = !sidebarStatus;

    return (
        <>  <div className={`sideButton  ${sidebarStatus ? 'active-rope-in' : ''} ${against ? 'active-rope-out' : ''} `} onClick={() => setSidebarStatus(!sidebarStatus)}>

        </div>
            <SidebarElements setSidebarStatus={setSidebarStatus} sidebarStatus={sidebarStatus} >
                <div className="sideLogo"><NavLink to="/" className="text"><span className="paseSide">TUPASE</span><span className="carnavalSide">DECARNAVAL</span></NavLink></div>
                <div className="sideText">
                    <NavLink to="/news" className="text">Noticias</NavLink>
                    <NavLink to="/creator" className="text">Creador</NavLink>
                    <NavLink to="/user" className="text">Usuario</NavLink>
                    <NavLink to="/player" className="text">Reproductor</NavLink>
                </div>
            </SidebarElements>

        </>
    );
}



<nav className="">


</nav>



