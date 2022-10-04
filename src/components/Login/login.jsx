import React from "react";
import BusinessFooter from "../businessFooter/businessFooter";
import BusinessHeader from "../businessHeader/businessHeader";
import styles from "./login.module.css";

function Login(props) {
  return (
    <>
      <BusinessHeader />
      <section className={styles.container}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <button className={styles.button}>Google</button>
        </div>
        <div>
          <button className={styles.button}>Github</button>
        </div>
      </section>
      <BusinessFooter />
    </>
  );
}

export default Login;
