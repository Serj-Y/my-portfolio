import React from "react";
import styles from "./MyProjectBlockConstructor.module.css"


type PropsType = {
    img: string | undefined;
    name: string;
    description: string;
    alt: string

}

export const MyProjectBlockConstructor: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.MyProjectBlock}>
            <div>
                <img className={styles.Img}
                    src={props.img} alt={props.alt} />
            </div>
            <div className={styles.Name}>
                <h3> {props.name}</h3>
            </div>
            <div className={styles.Description}>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}