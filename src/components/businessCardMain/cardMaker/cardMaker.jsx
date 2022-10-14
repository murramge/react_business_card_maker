import React from "react";
import styles from "./cardMaker.module.css";
import CardEditForm from "./cardEditForm";
import CardAddForm from "./cardAdd/cardAddForm";
function CardMaker({ cards, onAdd, updateCard, deleteCard }) {
  return (
    <div className={styles.maker}>
      <h1 className={styles.header}>CardMaker</h1>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <CardEditForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          ></CardEditForm>
        ))}
        <CardAddForm onAdd={onAdd} />
      </ul>
    </div>
  );
}

export default CardMaker;
