import React, { useEffect } from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./businessCardMain.module.css";
import { useNavigate } from "react-router-dom";
import CardMaker from "./cardMaker/cardMaker";
import CardPreview from "./cardPreview/cardPreview";
import { useState } from "react";
function BusinessCardMain({ authservice }) {
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

  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

  return (
    <>
      <section className={styles.container}>
        <BusinessCardHeader onLogout={onLogout} />
        <div className={styles.maincontainer}>
          <CardMaker cards={cards} />
          <CardPreview cards={cards} />
        </div>
        <BusinessCardFooter />
      </section>
    </>
  );
}

export default BusinessCardMain;
