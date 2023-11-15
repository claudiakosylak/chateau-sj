import React from 'react';
import styles from "./Menu.module.sass";
import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';

function Menu({ onHomePress, onAboutPress, onFloorPlanPress, onContactPress, closeMenu, onAdminPress }) {
    const dispatch = useDispatch();
    let location = useLocation();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            history.push("/")
            closeMenu()
        })
    }

    return (
        <>
        {!user ? (

            <nav className={styles.wrapper}>
                {location.pathname !== "/" ? (
                    <NavLink exact to="/" className={styles.links} onClick={closeMenu}>Home</NavLink>
                    ) : (
                        <div className={styles.links} onClick={() => {
                            onHomePress();
                            closeMenu();
                        }}>Home</div>
                )}
                <div className={styles.links} onClick={() => {
                    if (location.pathname !== "/") {
                        history.push("/", { to: "about" })
                    } else {
                        onAboutPress();
                    }
                    closeMenu();
                }}>About</div>
                <div className={styles.links} onClick={() => {
                    if (location.pathname !== "/") {
                        history.push("/floor-plans")
                    } else {
                        onFloorPlanPress();
                    }
                    closeMenu();
                }}>Floor Plans</div>
                <div className={styles.links} onClick={() => {
                    if (location.pathname !== "/") {
                        history.push("/", { to: "contact" })
                    } else {
                        onContactPress();
                    }
                    closeMenu();
                }}>Contact Us</div>
            </nav>
        ): (
            <nav className={styles.wrapper}>
                <NavLink exact to="/admin" className={styles.links} onClick={closeMenu}>Admin Home</NavLink>
                <div className={styles.links} onClick={handleLogout}>Log Out</div>
            </nav>
        )}
        </>
        )
    }

    export default Menu;
