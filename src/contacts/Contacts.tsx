import React from "react";
import styles from "./Contacts.module.scss"
import { TitleConstructor } from "../common/components/titleConstructor/TitleConstructor";
import { Fade } from "react-awesome-reveal";


type PropsType = {

}


export const Contacts: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.Contacts}>
             <TitleConstructor Title={"Contacts"}  />
            <div className={styles.Container} >
                <Fade direction="up" >
                     <form className={styles.Form}>
                    <input className={styles.Input} type="text" name="name" autoComplete="name" />
                    <input className={styles.Input} type="text" name="email" autoComplete="email" />
                    <textarea className={styles.TextArea} name="message" id="" />
                    <button  className={styles.Button}type="submit">Submit</button>
                </form>
                </Fade>
               
            </div>
        </div>
    )
}