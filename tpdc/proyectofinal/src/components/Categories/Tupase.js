import React from "react";
import { Button } from '@material-ui/core';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { CreatorCategories } from '../Categories/CreatorCategories';

export const Tupase = ({ children }) => {
    return (
        <>
            <div className="myBreadcrumb">
                <div className="title"><span className="paseSide">TUPASE<span className="carnavalSide">DE{children}</span></span></div>
            </div>
        </>
    );
}