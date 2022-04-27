import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Elements';

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
            </Nav>
        </>
    );
};

export default Navbar;