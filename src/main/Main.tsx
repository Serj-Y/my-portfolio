import React from "react";
import styles from "./Main.module.css"
import { Skills } from "./skills/Skills";


type PropsType = {

}

export const Main: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Main}>
        <Skills/>
        </div>
    )
}