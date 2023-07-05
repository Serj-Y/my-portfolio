import React from "react";
import styles from "./Nav.module.scss"
import { Button } from "../common/components/button/Button";

type PropsType = {

}

export const Nav: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Nav}>
            <Button ButtonText="Home" PropBtnStyle={styles.NavButton} />
            <Button ButtonText="About" PropBtnStyle={styles.NavButton} />
            <Button ButtonText="Skills" PropBtnStyle={styles.NavButton} />
            <Button ButtonText="Contacts" PropBtnStyle={styles.NavButton} />
        </div>
    )
}