import React from "react";
import { Button } from '@material-ui/core';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


export const Tupase = ({ children }) => {
    return (
        <>
            <div className="myBreadcrumb">
                <div className="myTitle"><span className="paseSide">TUPASE<span className="carnavalSide">DE{children}</span></span></div>
            </div>
        </>
    );
}