import React from "react";
import styles from "./Footer.module.sass";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
    const history = useHistory();

    return (
        <div className={styles.wrapper}>
            <p onClick={() => history.push("/login")}>Admin Login</p>
        </div>
    )
}

export default Footer;
