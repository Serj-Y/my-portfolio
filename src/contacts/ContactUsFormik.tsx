import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import styles from "./Contacts.module.scss";

type ErrorType = {
  user_name?: string;
  user_email?: string;
  message?: string;
};

const validate = (values: {
  user_name: string;
  user_email: string;
  message: string;
}) => {
  let error: ErrorType = {};
  if (!values.user_name) {
    error.user_name = "Required";
  } else if (values.user_name.length > 50) {
    error.user_name = "Must be 15 characters or less";
  }

  if (!values.user_email) {
    error.user_email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
  ) {
    error.user_email = "Invalid email address";
  }

  if (!values.message) {
    error.message = "Required";
  } else if (values.message.length > 500) {
    error.message = "Must be 20 characters or less";
  }

  return error;
};

export const ContactUsFormik = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formStatus, setFormStatus] = useState("Submit");

  const changeFormStatusTimeOut = () => {
    setFormStatus("Submit");
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setFormStatus("Send...");
      emailjs
        .send(
          "service_5qwlgkk",
          "template_3z9yxwg",
          values,
          "Y89xX9XApZV8jADya"
        )
        .then(
          (result) => {
            console.log(result);
            setFormStatus("Done");
            values.message = "";
            values.user_email = "";
            values.user_name = "";
            setTimeout(changeFormStatusTimeOut, 2000);
          },
          (error) => {
            console.log(error.text);
            setErrorMessage("SOMETHING WRONG WITH SERVER");
            setFormStatus("Submit");
            values.message = "";
            values.user_email = "";
            values.user_name = "";
          }
        );
    },
  });

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <div>{errorMessage}</div>
      <label htmlFor="user_name" />
      <input
        className={styles.Input}
        placeholder="Name"
        id="user_name"
        name="user_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_name}
      />
      {formik.touched.user_name && formik.errors.user_name ? (
        <div>{formik.errors.user_name}</div>
      ) : null}
      <label htmlFor="user_email" />
      <input
        className={styles.Input}
        placeholder="Email"
        id="user_email"
        name="user_email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.user_email}
      />
      {formik.touched.user_email && formik.errors.user_email ? (
        <div>{formik.errors.user_email}</div>
      ) : null}
      <label htmlFor="message" />
      <textarea
        className={styles.TextArea}
        placeholder="Message"
        id="message"
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div>{formik.errors.message}</div>
      ) : null}
      <button className={styles.Button} type="submit">
        {formStatus}
      </button>
    </form>
  );
};
