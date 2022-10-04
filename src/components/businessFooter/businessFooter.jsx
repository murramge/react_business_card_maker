import React from "react";
import styles from "./businessFooter.module.css";
function BusinessFooter(props) {
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

export default BusinessFooter;
