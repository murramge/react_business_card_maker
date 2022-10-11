import React from "react";
import styles from "./cardPreview.module.css";
import Cards from "./cards";

function CardPreview({ cards }) {
  return (
    <div className={styles.preview}>
      <h1 className={styles.header}>CardPreview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <div key={card.id}>
            <Cards card={card}></Cards>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CardPreview;
