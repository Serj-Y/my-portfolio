import React from "react";
import styles from "./Skills.module.css"



type PropsType = {

}

export const Skills: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Skills}>
           <div>react</div>
           <div>js</div>
           <div>css</div>
        </div>
    )
}