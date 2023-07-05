import React from "react";
import styles from "./ProjectConstructor.module.scss"
import { Button } from "../button/Button";


type PropsType = {
    HrefForButton?: string;
    style?: any
    title?: string;
    propTitleStyle?: string;
    propDescriptionStyle?: string;
    propProjectStyle?: string;
    propImgStyle?: string;
    description?: string;
}

export const ProjectConstructor: React.FC<PropsType> = (props) => {
    return (
        <div className={`${styles.ProjectConstructor} ${props.propProjectStyle}`} >
            <div className={`${styles.Img} ${props.propImgStyle}`} style={props.style}>
                <Button ButtonText="View" Href={props.HrefForButton} />
            </div>
            <div className={`${styles.Title} ${props.propTitleStyle}`}>
                <h3> {props.title}</h3>
            </div>
            <div className={`${styles.Description} ${props.propDescriptionStyle}`}>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}