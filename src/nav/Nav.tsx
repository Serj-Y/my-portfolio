import React from "react";
import styles from "./Nav.module.scss"
import { Link } from "react-scroll";


type PropsType = {

}

export const Nav: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Nav}>
            <Link className={styles.NavButton} activeClass={styles.Active}
                to="Home"
                smooth={true}
                offset={1}
            > Home</Link>
            <Link className={styles.NavButton} activeClass={styles.Active}
                to="Skills"
                smooth={true}
                offset={-45}
            > Skills</Link>
            <Link className={styles.NavButton} activeClass={styles.Active}
                to="Projects"
                smooth={true}
                offset={1}
            > Projects</Link>
            <Link className={styles.NavButton} activeClass={styles.Active}
                to="Contacts"
                smooth={true}
                offset={1}
            > Contacts</Link>
        </div>
    )
}