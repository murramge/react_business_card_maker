import React from "react";
import styles from "./businessCardHeader.module.css";

function BusinessCardHeader({ onLogout }) {
  return (
    <>
      <nav className={styles.bg}>
        {onLogout && (
          <button className={styles.logout} onClick={onLogout}>
            logout
          </button>
        )}
        <div className={styles.container}>
          <img src="favicon.ico" alt="logo" />

          <h1 className={styles.text}>Business Card Maker</h1>
        </div>
      </nav>
    </>
  );
}

export default BusinessCardHeader;
