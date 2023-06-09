import React from "react";
import { Journey, JourneyButton } from "../../components";
import {
  Welcomeillus,
  Welcomedocillus,
  Welcomeokhand,
  Tick,
} from "../../components/SVGIcons";
import styles from "./JourneyWelcome.module.css";
import { useNavigate } from "react-router-dom";
const JourneyWelcome = () => {
  const navigate = useNavigate();
  return (
    <Journey>
      <div className={styles.container}>
        <div className={styles.illusCon}>
          <Welcomeillus />
          <div className={styles.title}>Get a Loan in just 2 minutes</div>
          <div>
            <div className={styles.RulesCon}></div>
            <div className={styles.rulecon}>
              <Tick />
              Minimal documentation
              <div>
                <Welcomedocillus />
              </div>
            </div>
            <div className={styles.rulecon}>
              <Tick />
              Zero prepayment charges{" "}
              <div>
                <Welcomeokhand />
              </div>
            </div>
            <JourneyButton
              name={"Register for Loan"}
              onPress={() => {
                navigate("/journey", { replace: true });
              }}
            />
          </div>
        </div>
      </div>
    </Journey>
  );
};

export default JourneyWelcome;
