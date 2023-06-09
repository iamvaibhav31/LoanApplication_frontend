import React from "react";
import JourneyFormLayout from "../FormLayout/FormLayout";
import styles from "./Approved.module.css";
import { ApprovedTick } from "../../../../../components/SVGIcons";
import { useNavigate } from "react-router-dom";
const Approved = () => {
  const navigate = useNavigate();
  return (
    <JourneyFormLayout
      name={"Back to Home"}
      onPress={() => {
        navigate("/");
      }}
      goBack={true}
      onPressGoBack={() => {
        navigate("/journey/agreement");
      }}
    >
      <div className={styles.container}>
        <ApprovedTick />
        <div className={styles.title}> Congratulations !</div>
        <div className={styles.title}>Application Approved</div>
      </div>
    </JourneyFormLayout>
  );
};

export default Approved;
