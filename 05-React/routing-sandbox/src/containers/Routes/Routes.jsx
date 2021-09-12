import React from 'react';
import { Router } from "@reach/router";

import Home from "../Home";
import Favourites from "../Favourites";
import NotFound from '../../components/NotFound';

const Routes = () => {
    return (
        <Router>
            <Home path="/" />
            <Favourites path="favourites" />
            <NotFound default />
        </Router>
    )
}

export default Routes
