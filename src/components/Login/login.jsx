import React from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login({ authservice }) {
  const navigate = useNavigate();
  const onLogin = (event) => {
    authservice.login(event.currentTarget.textContent).then((obj) => {
      obj.operationType && navigate(`/main`);
    });
  };
  return (
    <>
      <section className={styles.container}>
        <BusinessCardHeader />
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
        <BusinessCardFooter />
      </section>
    </>
  );
}

export default Login;
