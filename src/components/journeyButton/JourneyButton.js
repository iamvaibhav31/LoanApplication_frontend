import React from "react";
import styles from "./JourneyButton.module.css";
const JourneyButton = ({ name, onPress }) => {
  return (
    <button className={styles.container} onClick={onPress}>
      {name}
    </button>
  );
};

export default JourneyButton;
