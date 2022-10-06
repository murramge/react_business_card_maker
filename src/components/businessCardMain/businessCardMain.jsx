import React, { useEffect } from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./businessCardMain.module.css";
import { useNavigate } from "react-router-dom";
import CardMaker from "./cardMaker/cardMaker";
import CardPreview from "./cardPreview/cardPreview";
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
  return (
    <>
      <section className={styles.container}>
        <BusinessCardHeader onLogout={onLogout} />
        <div className={styles.maincontainer}>
          <CardMaker />
          <CardPreview />
        </div>
        <BusinessCardFooter />
      </section>
    </>
  );
}

export default BusinessCardMain;
