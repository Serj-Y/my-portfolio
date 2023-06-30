import React from "react";
import styles from "./Contacts.module.css"



type PropsType = {

}


export const Contacts: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Contacts}>
            <div className={styles.Title}>
                <h2>Contacts</h2>
            </div>
            <div className={styles.Container} >
                <form className={styles.Form}>
                    <input className={styles.Input} type="text" />
                    <input className={styles.Input} type="text" />
                    <textarea className={styles.TextArea} name="" id="" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}