import React from 'react';
import { Link } from "@reach/router";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <Link to="favourites">
                <h3>Favourites</h3>
            </Link>
        </nav>
    )
}

export default NavBar
