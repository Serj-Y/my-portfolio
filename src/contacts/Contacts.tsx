import React from "react";
import styles from "./Contacts.module.scss"
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { Fade } from "react-awesome-reveal";

import { ContactsUs } from "./ContactsUs";

type PropsType = {

}

export const Contacts: React.FC<PropsType> = (props) => {
    return (
        <div id="Contacts" className={styles.Contacts}>
            <TitleConstructor Title={"Contacts"} />
            <div className={styles.Container} >
                <Fade direction="up" >
                    <ContactsUs />
                </Fade>
            </div>
        </div>
    )
}