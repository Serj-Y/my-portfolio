import React from "react";
import styles from "./Nav.module.scss"
import { Link } from "react-scroll";

export const Nav = () => {
    return (
        <div className={styles.Nav}>
            <Link className={styles.NavButton}
                to="Home"
                smooth={true}
                offset={1}
            > Home</Link>
            <Link className={styles.NavButton}
                to="Skills"
                smooth={true}
                offset={-70}
            > Skills</Link>
            <Link className={styles.NavButton}
                to="Projects"
                smooth={true}
                offset={-35}
            > Projects</Link>
            <Link className={styles.NavButton}
                to="Contacts"
                smooth={true}
                offset={1}
            > Contacts</Link>
        </div>
    )
}