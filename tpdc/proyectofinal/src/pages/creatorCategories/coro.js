import { Sidebar } from '../../components/Sidebar/Sidebar';
import { CategoriesElements } from '../../components/Categories/CategoriesElements';
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { CreatorCoro } from '../../components/Categories/CreatorCoro';

export const coro = () => {



    return (
        <>
            <div className="creator">
                <Sidebar />
                <CreatorCoro />

            </div>
        </>
    );
}