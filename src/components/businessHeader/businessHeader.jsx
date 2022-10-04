import React from "react";
import styles from "./businessHeader.module.css";
function BusinessHeader(props) {
  return (
    <>
      <nav className={styles.bg}>
        <div className={styles.container}>
          <img src="favicon.ico" alt="logo" />
          <h1 className={styles.text}>Business Card Maker</h1>
        </div>
      </nav>
    </>
  );
}

export default BusinessHeader;
