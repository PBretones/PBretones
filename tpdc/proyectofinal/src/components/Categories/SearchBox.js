import React from "react";

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


export const SearchBox = () => {
    return (
        <div>

            <form method="get" action="">
                <div className="tb">
                    <div className="searchBox"><input type="text" placeholder="Search" required></input></div>
                </div>
            </form>
        </div>
    );
}
