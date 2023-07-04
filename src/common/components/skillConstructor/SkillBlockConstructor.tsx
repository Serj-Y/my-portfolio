import React from "react";
import styles from "./SkillBlockConstructor.module.scss"


type PropsType = {
    title?: string;
    propNameStyle?: string;
    propDescriptionStyle?: string;
    propBlockStyle?: string;
    propImgStyle?: string;
    img?: string;
    alt?: string;
    description?: string;
}

export const SkillBlockConstructor: React.FC<PropsType> = (props) => {
    return (
        <div className={`${styles.SkillBlockConstructor} ${props.propBlockStyle}`}>
            <div>
                <img className={`${styles.Img} ${props.propImgStyle}`}
                    src={props.img} alt={props.alt} />
            </div>
            <div className={`${styles.Name} ${props.propNameStyle}`}>
                <h3> {props.title}</h3>
            </div>
            <div className={`${styles.Description} ${props.propDescriptionStyle}`}>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}