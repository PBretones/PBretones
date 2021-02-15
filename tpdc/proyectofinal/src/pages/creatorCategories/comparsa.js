import { Sidebar } from '../../components/Sidebar/Sidebar';
import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { CreatorComparsa } from '../../components/Categories/CreatorComparsa';
import React from 'react';


export const comparsa = () => {
    return (
        <>
            <div className="creator">
                <Sidebar />
                <CreatorComparsa />
            </div>
        </>
    );
}




