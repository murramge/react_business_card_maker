import React from "react";
import Login from "./components/Login/login";
import styles from "./app.module.css";
import BusinessCardMain from "./components/businessCardMain/businessCardMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App({ authservice }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authservice={authservice} />}></Route>
          <Route
            path="/main"
            element={<BusinessCardMain authservice={authservice} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
