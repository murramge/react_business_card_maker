import React, { useEffect } from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./businessCardMain.module.css";
import { useNavigate } from "react-router-dom";
import CardMaker from "./cardMaker/cardMaker";
import CardPreview from "./cardPreview/cardPreview";
import { useState, useCallback } from "react";
function BusinessCardMain({ authservice, onAdd }) {
  const navigate = useNavigate();
  const onLogout = () => {
    authservice.logout();
  };
  useEffect(() => {
    authservice.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  let [cards, setCards] = useState({
    1: {
      id: 1,
      name: "ellie",
      company: "samsung",
      theme: "dark",
      title: "software Engineer",
      email: "ellie@gmail.com",
      message: "elliee!",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "murramge",
      company: "lg",
      theme: "light",
      title: "software Engineer",
      email: "murramge@gmail.com",
      message: "murramge",
      fileName: "murramge",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "doong",
      company: "samsung",
      theme: "colorful",
      title: "software Engineer",
      email: "doong@gmail.com",
      message: "doongdoong!",
      fileName: "doong",
      fileURL: "doong.png",
    },
  });

  console.log(cards);

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      {
        const updated = { ...cards };
        updated[card.id] = card;
        return updated;
      }
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      {
        const updated = { ...cards };
        delete updated[card.id];
        return updated;
      }
    });
  };

  console.log(cards);
  return (
    <>
      <section className={styles.container}>
        <BusinessCardHeader onLogout={onLogout} />
        <div className={styles.maincontainer}>
          <CardMaker
            onAdd={createOrupdateCard}
            cards={cards}
            updateCard={createOrupdateCard}
            deleteCard={deleteCard}
          />
          <CardPreview cards={cards} />
        </div>
        <BusinessCardFooter />
      </section>
    </>
  );
}

export default BusinessCardMain;
