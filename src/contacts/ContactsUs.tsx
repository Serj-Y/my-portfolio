import React, { useRef, useState } from "react";
import styles from "./Contacts.module.scss"
import emailjs from '@emailjs/browser';



export const ContactsUs = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [formStatus, setFormStatus] = useState("Submit")
    const refOfForm: any = useRef();

    const resetFormValue = () => {
        setName("")
        setEmail("")
        setText("")
    }

    const changeFormStatusTimeOut = () => {
        setFormStatus("Submit")
    }

    const validations = (e: React.SyntheticEvent<EventTarget>) => {
        setErrorMessage("")
        e.preventDefault();
        if (!name) {
            setErrorMessage("Name field is empty!")
        } else if (!email) {
            setErrorMessage("Email field is empty!")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setErrorMessage("Invalid email address!")
        } else if (!text) {
            setErrorMessage("Message field is empty")
        } else { submitForm(e) }
    }

    const submitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();

        setFormStatus("Send...")
        emailjs.sendForm('service_5qwlgkk', 'template_3z9yxwg', refOfForm.current, 'Y89xX9XApZV8jADya')
            .then((result) => {
                setFormStatus("Done");
                resetFormValue()
                setTimeout(changeFormStatusTimeOut, 2000)

            }, (error) => {
                console.log(error.text)
                setErrorMessage("SOMETHING WRONG WITH SERVER")
                setFormStatus("Submit")
            });

    };

    return (
        <form ref={refOfForm} className={styles.Form} onSubmit={validations}  >
            <div>{errorMessage}</div>
            <input className={styles.Input} placeholder="Name" type="text" name="user_name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={styles.Input} placeholder="Email" type="text" name="user_email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea className={styles.TextArea} placeholder="Message" name="message" value={text} onChange={(e) => setText(e.target.value)} />
            <button className={styles.Button} type="submit" >{formStatus}</button>
        </form>
    )
}