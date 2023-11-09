import React from 'react';
import "./Menu.css";
import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Menu({onHomePress, onAboutPress, onFloorPlanPress, onContactPress, closeMenu}) {
    let location = useLocation();
    const history = useHistory();

    return (
        <nav className="menu-wrapper">
            {location.pathname !== "/" ? (
                <NavLink exact to="/" className="menu-links" onClick={closeMenu}>Home</NavLink>
            ) : (
                <div className="menu-links" onClick={() => {
                    onHomePress();
                    closeMenu();
                }}>Home</div>
            )}
            <div className="menu-links" onClick={() => {
                if (location.pathname !== "/") {
                    history.push("/", {to: "about"})
                } else {
                    onAboutPress();
                }
                closeMenu();
                }}>About</div>
            <div className="menu-links" onClick={() => {
                if (location.pathname !== "/") {
                    history.push("/floor-plans")
                } else {
                    onFloorPlanPress();
                }
                closeMenu();
            }}>Floor Plans</div>
            <div className="menu-links" onClick={() => {
                if (location.pathname !== "/") {
                    history.push("/", {to: "contact"})
                } else {
                    onContactPress();
                }
                closeMenu();
            }}>Contact Us</div>
        </nav>
    )
}

export default Menu;
