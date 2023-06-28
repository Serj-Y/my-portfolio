import React from "react";
import styles from "./BlockConstructor.module.css"


type PropsType = {
    propNameStyle?: string;
    propDescriptionStyle?: string;
    propBlockStyle?: string;
    propImgStyle?: string;
    img?: string;
    alt?: string
    description?: string;
    name?: string;
}

export const BlockConstructor: React.FC<PropsType> = (props) => {
    return (
        <div className={`${styles.BlockConstructor} ${props.propBlockStyle}`}>
            <div>
                <img className={`${styles.Img} ${props.propImgStyle}`}
                    src={props.img} alt={props.alt} />
            </div>
            <div className={`${styles.Name} ${props.propNameStyle}`}>
                <h3> {props.name}</h3>
            </div>
            <div className={`${styles.Description} ${props.propDescriptionStyle}`}>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}