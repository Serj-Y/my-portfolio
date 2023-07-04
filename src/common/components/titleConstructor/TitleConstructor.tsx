import React from "react";
import styles from "./TitleConstructor.module.scss"


type PropsType ={
    Title: string;
    PropTitleStyle?: string;

}


export const TitleConstructor: React.FC<PropsType> = (props) => {
    return(
          <div className={`${styles.Title} ${props.PropTitleStyle}`} >
<h2>{props.Title}</h2>
    </div>  
    )

}