import React from "react";
import styles from "./Jounrey.module.css";

const Journey = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mobScreen}>{children}</div>
    </div>
  );
};

export default Journey;
