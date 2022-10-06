import React from "react";
import styles from "./cardMaker.module.css";
import CardEditForm from "./cardEditForm";
function CardMaker({ cards }) {
  return (
    <div className={styles.maker}>
      <h1 className={styles.header}>CardMaker</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <CardEditForm card={card}></CardEditForm>
        ))}
      </ul>
    </div>
  );
}

export default CardMaker;
