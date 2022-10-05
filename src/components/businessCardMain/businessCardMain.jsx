import React from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./businessCardMain.module.css";

function BusinessCardMain(props) {
  return (
    <>
      <section className={styles.container}>
        <BusinessCardHeader />
        <div className={styles.maincontainer}></div>
        <BusinessCardFooter />
      </section>
    </>
  );
}

export default BusinessCardMain;
