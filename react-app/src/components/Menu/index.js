import React from 'react';
import "./Menu.css";
import { NavLink, useLocation } from 'react-router-dom';

function Menu({onHomePress, onAboutPress, onFloorPlanPress, onContactPress, closeMenu}) {
    let location = useLocation();
    console.log("LOCATION: ", location)
    console.log("IS LOCATION? ", location.pathname === "/")

    return (
        <nav className="menu-wrapper">
            {location.pathname !== "/" ? (
                <NavLink exact to="/" className="menu-links">Home</NavLink>
            ) : (
                <div className="menu-links" onClick={() => {
                    onHomePress();
                    closeMenu();
                }}>Home</div>
            )}
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
