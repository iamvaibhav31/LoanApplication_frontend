import React from "react";
import styles from "./LoanOfferCard.module.css";
const LoanOfferCard = ({ amount, givenin, interest, onSelect }) => {
  return (
    <div className={styles.container}>
      <div className={styles.con}>
        <div className={styles.title}>₹ {amount}</div>
        <div className={styles.title}>{givenin} Days</div>
      </div>
      <div className={styles.con}>
        <div className={styles.subtitle}>{interest} % Interest Per Month</div>
      </div>

      <div className={styles.con1}>
        <div>
          <div className={styles.con1txt}>₹ 46.67</div>
          <div className={styles.con1txt}>Total Interest</div>
        </div>
        <div>
          <div className={styles.con1txt}>₹ 10,046.7</div>
          <div className={styles.con1txt}>Principal + Interest</div>
        </div>
      </div>
      <div className={styles.con}>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={onSelect}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default LoanOfferCard;
