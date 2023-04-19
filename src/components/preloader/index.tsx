import React from "react";
import cn from "classnames";
import { StaticImage } from "gatsby-plugin-image";

import { useAnimationFrame } from "@app/hooks";

import * as styles from "./index.module.scss";

export const Preloader = () => {
  const initial = Date.now();
  const [show, setShow] = React.useState(true);
  const [count, setCount] = React.useState(0);

  useAnimationFrame(() => {
    const current = Date.now();
    const diff = current - initial;
    const progress = Math.round(100 * (diff / 2000));

    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    if (progress <= 100) {
      setCount(progress);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 1500);
    }
  });

  if (!show) return null;

  return (
    <div
      className={cn(styles.preloader, styles.customLoading)}
      key="preloader-element"
    >
      <div className={styles.loading}>{Math.round(count)}</div>

      <svg width="200" height="200" className={styles.loadingPie}>
        <circle r="50" cx="100" cy="100" className={styles.loadingCircle} />
      </svg>

      <div className={styles.preLogo}>
        <div>
          <StaticImage
            src="./white-logo.svg"
            alt="logo"
            className={styles.logoImage}
          />
        </div>
      </div>

      <div className={styles.halfCircle}></div>
    </div>
  );
};
