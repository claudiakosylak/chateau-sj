import React from 'react';
import "./Menu.css";
import { NavLink } from 'react-router-dom';

function Menu({onAboutPress, closeMenu}) {

    return (
        <nav className="menu-wrapper">
            <NavLink exact to="/" className="menu-links">Home</NavLink>
            <div className="menu-links" onClick={() => {
                onAboutPress();
                closeMenu();
                }}>About</div>
            <div className="menu-links">Floor Plans</div>
            <div className="menu-links">Contact Us</div>
        </nav>
    )
}

export default Menu;
