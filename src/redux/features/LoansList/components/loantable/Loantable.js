import React, { useEffect } from "react";
import styles from "./Loantable.module.css";
import LoanCard from "../loancard/LoanCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoans } from "../../LoansSlice";
import { AllLoans } from "../../services/loanServices";
const Loantable = () => {
  const dispatch = useDispatch();
  const loansData = useSelector(getAllLoans);
  useEffect(() => {
    dispatch(AllLoans());
  });
  console.log("Loantable", loansData);
  return (
    <table className={styles.loans}>
      <tr>
        <th>Name</th>
        <th>Mobile No.</th>
        <th>Business type</th>
        <th></th>
      </tr>
      {loansData.map((item) => (
        <LoanCard
          id={item._id}
          phoneNo={item.phoneNo}
          businessType={item.businessType}
          name={item.name}
          key={item._id}
        />
      ))}
    </table>
  );
};

export default Loantable;
