import React from "react";
import styles from "./Footer.module.scss";
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';


type PropsType = {

}

export const Footer: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Footer}>
            <TitleConstructor Title={"Serhii Iliniuk"} />
            <div className={styles.Container} >
                <a href="https://github.com/Serj-Y" className={styles.Btn} >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://instagram.com/serhii_iliniuk" className={styles.Btn} >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com/SYliniuc" className={styles.Btn} >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://t.me/Serhii_Iliniuk" className={styles.Btn} >
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
            </div>
            <h6>© 2023 Serj_Y. All rights reserved.</h6>
        </div>
    )
}
