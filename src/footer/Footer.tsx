import React from "react";
import styles from "./Footer.module.scss";
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from '../common/components/button/Button';


export const Footer = () => {
    return (
        <div className={styles.Footer}>
            <TitleConstructor Title={"Serhii Iliniuk"} />
            <div className={styles.Container} >
                <Button PropBtnStyle={styles.Btn} Href="https://github.com/Serj-Y" ExtraComponent={<FontAwesomeIcon icon={faGithub} size="2x" />} />
                <Button PropBtnStyle={styles.Btn} Href="https://instagram.com/serhii_iliniuk" ExtraComponent={<FontAwesomeIcon icon={faInstagram} size="2x" />} />
                <Button PropBtnStyle={styles.Btn} Href="https://twitter.com/SYliniuc" ExtraComponent={<FontAwesomeIcon icon={faTwitter} size="2x" />} />
                <Button PropBtnStyle={styles.Btn} Href="https://t.me/Serhii_Iliniuk" ExtraComponent={<FontAwesomeIcon icon={faTelegram} size="2x" />} />
            </div>
            <h6>© 2023 Serj_Y. All rights reserved.</h6>
        </div>
    )
}