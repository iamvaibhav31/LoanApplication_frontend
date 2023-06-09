import React, { useEffect } from "react";
import styles from "./JourneySplash.module.css";
import { Journey } from "../../components";
import { Icon } from "../../components/SVGIcons";
import { useNavigate } from "react-router-dom";

const JourneySplash = () => {
  const navigate = useNavigate();
  let redirectTimeout;

  useEffect(() => {
    redirectTimeout = setTimeout(() => {
      navigate("/journey/Welcome", { replace: true });
    }, 3500);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);
  return (
    <Journey>
      <div className={styles.container}>
        <div className={styles.iconCon}>
          <p className={styles.title}> Powered By</p>

          <Icon />
        </div>
      </div>
    </Journey>
  );
};

export default JourneySplash;
