import React from "react";
import styles from "./Nav.module.scss"

type PropsType = {

}

export const Nav: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Nav}>
<a className={styles.A} href="Home">Home</a>
<a className={styles.A} href="About">About</a>
<a className={styles.A} href="Skill">Skills</a>
<a className={styles.A} href="Contacts">Contacts</a>
        </div>
    )
}