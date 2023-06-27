import React from "react";
import styles from "./Nav.module.css"

type PropsType = {

}

export const Nav: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Nav}>
<a href="Home">Home</a>
<a href="About">About</a>
<a href="Skill">Skills</a>
<a href="Contacts">Contacts</a>
        </div>
    )
}