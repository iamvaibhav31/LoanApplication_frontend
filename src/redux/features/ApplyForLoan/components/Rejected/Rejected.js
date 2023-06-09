import React from "react";
import { RejectedIllus } from "../../../../../components/SVGIcons";
import JourneyFormLayout from "../FormLayout/FormLayout";
import styles from "./Rejected.module.css";
import { useNavigate } from "react-router-dom";
const Rejected = () => {
  const navigate = useNavigate();
  return (
    <JourneyFormLayout
      name={"Back to Home"}
      onPress={() => {
        navigate("/");
      }}
      goBack={false}
    >
      <div className={styles.container}>
        <RejectedIllus />
        <div className={styles.title}> Application Rejected</div>
      </div>
    </JourneyFormLayout>
  );
};

export default Rejected;
