import React from "react";
import { useSelector } from "react-redux";
import { getLoanDetails } from "../../LoansSlice";
import styles from "./LoanDetails.module.css";
const LoanDetails = () => {
  const loanDetailsData = useSelector(getLoanDetails);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Details</div>
      <div className={styles.detailsCon}>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Full Name</div>
          <div className={styles.detailsValue}>Vaibhav sharma</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Business Type</div>
          <div className={styles.detailsValue}>proprietorship</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>FLoan Amount</div>
          <div className={styles.detailsValue}> ₹1,00000</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>DOB</div>
          <div className={styles.detailsValue}>02/08/2022</div>
        </div>
        <div className={styles.detailsSubCon}>
          <div className={styles.detailsKey}>Mobile Number</div>
          <div className={styles.detailsValue}>9560476537</div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
