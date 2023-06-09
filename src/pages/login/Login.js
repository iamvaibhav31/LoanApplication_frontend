import React from "react";
import styles from "./Login.module.css";
import { AuthForm } from "../../components";
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Embifi</h1>
        <AuthForm action={"LOGIN"} name={"Log In"} />
      </div>
    </div>
  );
};

export default Login;
