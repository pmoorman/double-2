import React from "react";
import CountUp from "react-countup";

import * as styles from "./index.module.scss";
import WhiteLogo from "./whiteLogo.svg";

import loadable from "@loadable/component";
const Preloader = loadable(() => import("@app/components/preloader"));

export const LoadingComponent = () => {
  return (
    <Preloader
      animation="fade-down"
      background={"#2a2f45"}
      color={"#fff"}
      time={3600}
    >
      <>
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
      </>
    </Preloader>
  );
};
