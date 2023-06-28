import React from "react";
import styles from "./BlockConstructor.module.css"


type PropsType = {
    img: string | undefined;
    alt: string
    description: string;
    name: string;
}

export const BlockConstructor: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.BlockConstructor}>
            <div>
                <img className={styles.Img}
                    src={props.img} alt={props.alt} />
            </div>
            <div className={styles.name}>
                <h3> {props.name}</h3>
            </div>
            <div className={styles.Description}>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}