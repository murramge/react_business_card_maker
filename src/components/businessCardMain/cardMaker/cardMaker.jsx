import React from "react";
import styles from "./cardMaker.module.css";
import CardEditForm from "./cardEditForm";
import CardAddForm from "./cardAdd/cardAddForm";
function CardMaker({ cards, onAdd }) {
  return (
    <div className={styles.maker}>
      <h1 className={styles.header}>CardMaker</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <div key={card.id}>
            <CardEditForm card={card}></CardEditForm>
          </div>
        ))}
        <CardAddForm onAdd={onAdd} />
      </ul>
    </div>
  );
}

export default CardMaker;
