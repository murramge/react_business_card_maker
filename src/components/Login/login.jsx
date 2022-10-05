import React, { useEffect } from "react";
import BusinessCardFooter from "../businessCardFooter/businessCardFooter";
import BusinessCardHeader from "../businessCardHeader/businessCardHeader";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import firebase from "firebase";

function Login({ authservice }) {
  const navigate = useNavigate();
  const goToMaker = (userID) => {
    navigate("/main", { state: { id: userID } });
  };
  const onLogin = (event) => {
    authservice
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authservice.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
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
