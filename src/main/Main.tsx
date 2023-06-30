import React from "react";
import styles from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"


type PropsType = {

}

export const Main: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Main}>
            <div className= {`${styleContainer.Container} ${styles.Container}`} >
                <div className={styles.Img}>
                    img
                </div>
                <div className={styles.Text} >
                    <span> Hi There</span>
                    <h1>I Am <p>Serj_Y</p></h1>
                    <p>Front_end Developer.</p>
                </div>
            </div>
        </div>
    )
}