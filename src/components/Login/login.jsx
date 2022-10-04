import React from "react";
import BusinessFooter from "../businessFooter/businessFooter";
import BusinessHeader from "../businessHeader/businessHeader";
import styles from "./login.module.css";

function Login({ authservice }) {
  const onLogin = (event) => {
    authservice.login(event.currentTarget.textContent).then(console.log);
  };
  return (
    <>
      <section className={styles.container}>
        <BusinessHeader />
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={onLogin}>
            Github
          </button>
        </div>
        <BusinessFooter />
      </section>
    </>
  );
}

export default Login;
