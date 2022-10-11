import React from "react";
import styles from "./cardAddForm.module.css";
import ImageFileInput from "../../../image_file_input/image_file_input";
import Button from "../../../button/button";
import { useRef, useState, useCallback } from "react";
import { useEffect } from "react";

function CardAddForm(props) {
  const formRef = useRef();

  const [addCard, setAddCards] = useState([
    {
      id: Date.now(),
      name: "",
      company: "",
      theme: "",
      title: "",
      email: "",
      message: "",
      fileName: "",
      fileURL: null,
    },
  ]);
  const handleAdd = useCallback((event) => {
    event.preventDefault();
    setAddCards({
      name: event.target.value,
    });
  }, []);

  console.log(addCard);
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        ref={formRef}
        type="text"
        name="name"
        defaultValue={addCard.name}
        placeholder="Name"
        onChange={handleAdd}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={handleAdd} />
    </form>
  );
}

export default CardAddForm;
