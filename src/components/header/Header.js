import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p className={styles.title}>Embifi</p>
      </div>
    </div>
  );
};

export default Header;
