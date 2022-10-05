import React from "react";
import styles from "./businessCardFooter.module.css";
function BusinessCardFooter(props) {
  return (
    <>
      <nav className={styles.bg}>
        <div className={styles.container}>
          <p className={styles.text}>Code your dream</p>
        </div>
      </nav>
    </>
  );
}

export default BusinessCardFooter;
