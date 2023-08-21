import React from "react";
import styles from "./Contacts.module.scss"
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { Fade } from "react-awesome-reveal";
import {ContactUsFormik} from "./ContactUsFormik"
// import { ContactsUs } from "./ContactsUs";


export const Contacts = () => {
    return (
        <div id="Contacts" className={styles.Contacts}>
            <TitleConstructor Title={"Contacts"} />
            <div className={styles.Container} >
                <Fade direction="up" >
                    {/* <ContactsUs /> */}
                    <ContactUsFormik/>
                </Fade>
            </div>
        </div>
    )
}