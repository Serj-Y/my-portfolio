import React, { useRef } from "react";
import styles from "./Contacts.module.scss"
import emailjs from '@emailjs/browser';

type PropsType = {

}

export const ContactsUs: React.FC<PropsType> = (props) => {

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_5qwlgkk', 'template_3z9yxwg', form.current, 'Y89xX9XApZV8jADya')
            .then((result) => {
                alert("Will be send");
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <form ref={form} className={styles.Form} onSubmit={sendEmail} >
            <input className={styles.Input} placeholder="Name" type="text" name="user_name" autoComplete="name" />
            <input className={styles.Input} placeholder="Email" type="text" name="user_email" autoComplete="email" />
            <textarea className={styles.TextArea} placeholder="Message" name="message" id="" />
            <button className={styles.Button} type="submit">Submit</button>
        </form>
    )
}