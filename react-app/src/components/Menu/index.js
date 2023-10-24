import React from 'react';
import "./Menu.css";
import { NavLink } from 'react-router-dom';

function Menu({onAboutPress, onFloorPlanPress, onContactPress, closeMenu}) {

    return (
        <nav className="menu-wrapper">
            <NavLink exact to="/" className="menu-links">Home</NavLink>
            <div className="menu-links" onClick={() => {
                onAboutPress();
                closeMenu();
                }}>About</div>
            <div className="menu-links" onClick={() => {
                onFloorPlanPress();
                closeMenu();
            }}>Floor Plans</div>
            <div className="menu-links" onClick={() => {
                onContactPress();
                closeMenu();
            }}>Contact Us</div>
        </nav>
    )
}

export default Menu;
