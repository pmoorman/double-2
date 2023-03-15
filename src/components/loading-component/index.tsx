import React from "react";
import CountUp from "react-countup";

import * as styles from "./index.module.scss";
import WhiteLogo from "./whiteLogo.svg";

export const LoadingComponent = () => {
  return (
    <div className={styles.customLoading}>
      <CountUp end={99} className={styles.loading} duration={2} />

      <svg width="200" height="200" className={styles.loadingPie}>
        <circle r="50" cx="100" cy="100" className={styles.loadingCircle} />
      </svg>

      <div className={styles.preLogo}>
        <div>
          <img src={WhiteLogo} className={styles.logoImage} />
        </div>
      </div>

      <div className={styles.halfCircle}></div>
    </div>
  );
};
