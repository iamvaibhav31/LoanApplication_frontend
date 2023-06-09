import React from "react";

import { Journey, JourneyButton } from "../../../../../components";
import styles from "./FormLayout.module.css";
import { BackArrows } from "../../../../../components/SVGIcons/index";
const JourneyFormLayout = ({
  children,
  name,
  onPress,

  goBack,
  onPressGoBack,
}) => {
  return (
    <Journey>
      <div className={styles.container}>
        <div
          className={[
            styles.formCon,
            goBack === false ? styles.formConAdditional : "",
          ].join(" ")}
        >
          {goBack && (
            <div onClick={onPressGoBack}>
              <BackArrows />
            </div>
          )}
          <div className={styles.form}>{children}</div>
        </div>

        <JourneyButton name={name} onPress={onPress} />
      </div>
    </Journey>
  );
};

export default JourneyFormLayout;
