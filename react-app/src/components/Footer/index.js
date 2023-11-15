import React from "react";
import styles from "./Footer.module.sass";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";

function Footer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const handleLogout = () => {
        dispatch(logout()).then(() => history.push("/"))
    }

    return (
        <div className={styles.wrapper}>
            {!user ? (
                <p onClick={() => history.push("/login")}>Admin Login</p>
            ) : (
                <p onClick={handleLogout}>Log Out</p>
            )}
        </div>
    )
}

export default Footer;
