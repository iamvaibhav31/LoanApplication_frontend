import React from "react";
import styles from "./Register.module.css";
import { AuthForm } from "../../components";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authContainer}>
        <h1 className={styles.title}>Embifi</h1>
        <AuthForm action={"REGISTER"} name={"Register"} />
      </div>
    </div>
  );
};

export default Register;
