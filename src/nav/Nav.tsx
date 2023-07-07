import React from "react";
import styles from "./Nav.module.scss"
import { Button } from "../common/components/button/Button";


type PropsType = {

}

export const Nav: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Nav}>
            <Button ButtonText="Home" PropBtnStyle={styles.NavButton} Href="" />
            <Button ButtonText="Skills" PropBtnStyle={styles.NavButton} Href="#Skills" />
            <Button ButtonText="Projects" PropBtnStyle={styles.NavButton} Href="#Projects" />
            <Button ButtonText="Contacts" PropBtnStyle={styles.NavButton} Href="#Contacts" />
        </div>
    )
}