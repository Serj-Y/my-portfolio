import React from "react";
import styles from "./Button.module.scss"

type PropsType = {
    PropBtnStyle?: string;
    Href?: string
    ButtonText: string;
}


export const Button: React.FC<PropsType> = (props) => {
    return <a className={`${styles.Btn} ${props.PropBtnStyle}`} target="_blank"  href={props.Href}>{props.ButtonText}</a>
}