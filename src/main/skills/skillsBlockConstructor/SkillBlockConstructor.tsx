import React from "react";
import styles from "./SkillBlockConstructor.module.css"


type PropsType = {
    img: string | undefined   ;
    description: string;
    title: string;
    alt: string

}

export const SkillBlockConstructor: React.FC<PropsType> = (props) => {
    return (
            <div className={styles.SkillsBlock}>
                <div>
                    <img className={styles.Img} 
                    src={ props.img   } alt={props.alt} />
                </div>
                <div className={styles.Title}>
                    <h2> {props.title}</h2>
                </div>
                <div className={styles.Description}>
                    <h5>{props.description}</h5>
                </div>
            </div>
    )
}