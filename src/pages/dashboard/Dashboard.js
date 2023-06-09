import React from "react";
import { Header } from "../../components";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { Loantable } from "../../redux/features/LoansList/components/index";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.registerButtonCon}>
        <button className={styles.registerButton}>Register</button>
      </div>
      <div className={styles.tableCon}>
        <Loantable />
      </div>
    </div>
  );
};

export default Dashboard;
