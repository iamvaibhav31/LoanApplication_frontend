import React from "react";
import { Header } from "../../components";
import { LoanDetails } from "../../redux/features/LoansList/components/index";
import styles from "./Loandetails.module.css";
import { BackArrows } from "../../components/SVGIcons";
import { useNavigate } from "react-router-dom";
const Loandetails = () => {
  const navigate = useNavigate();
  const handelOnClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backButtonCon}>
        <div onClick={handelOnClick}>
          <BackArrows />
        </div>
      </div>
      <LoanDetails />
    </div>
  );
};

export default Loandetails;
