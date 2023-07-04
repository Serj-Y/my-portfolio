import React from "react";
import styles from "./Header.module.scss"
import { Nav } from "../nav/Nav";

type PropsType = {

}

export const Header: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Header}>
            <Nav />
        </div>
    )
}