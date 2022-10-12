import React from "react";
import styles from "./cardAddForm.module.css";
import ImageFileInput from "../../../image_file_input/image_file_input";
import Button from "../../../button/button";
import { useRef, useCallback } from "react";
import { useEffect } from "react";

function CardAddForm(props) {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleAdd = useCallback((event) => {
    event.preventDefault();
    const { onAdd } = props;
    const data = {
      id: Date.now,
      name: nameRef.current.value || " ",
      company: companyRef.current.value || " ",
      theme: themeRef.current.value,
      title: titleRef.current.value || " ",
      email: emailRef.current.value || " ",
      message: messageRef.current.value || " ",
      fileName: " ",
      fileURL: null,
    };
    console.log(data);
    onAdd(data);
    formRef.current.reset();
  }, []);

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
        ref={titleRef}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        ref={emailRef}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        ref={messageRef}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={handleAdd} />
    </form>
  );
}

export default CardAddForm;
