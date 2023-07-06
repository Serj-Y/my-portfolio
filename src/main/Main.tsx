import React from "react";
import styles from "./Main.module.scss"
import DefaultPhoto from "../common/assets/image/Avatar.png"
import { Fade } from "react-awesome-reveal";

type PropsType = {

}

export const Main: React.FC<PropsType> = (props) => {

    const DefaultImage = {
        backgroundImage: `url(${DefaultPhoto})`
    }
    return (
        <div className={styles.Main}>
            <div className={styles.Container} >
                <Fade direction="left">
                    <div className={styles.ImgContainer} style={DefaultImage} />
                </Fade>
                <Fade direction="right">
                    <div className={styles.Text} >
                        <span> Hi There</span>
                        <span>I Am Serhii <span>Iliniuk</span></span>
                        <h3>Front_end Developer.</h3>
                    </div>
                </Fade>
            </div>
        </div >
    )
}
// 