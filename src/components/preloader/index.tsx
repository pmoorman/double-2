import React from "react";

import { useAnimationFrame } from "@app/hooks";

import whiteLogo from "./white-logo.svg";
import * as styles from "./index.module.scss";

export const Preloader = () => {
  const initial = Date.now();
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(true);

  useAnimationFrame((_) => {
    const current = Date.now();
    const diff = current - initial;
    const progress = Math.round(100 * (diff / 2000));

    if (progress <= 100) {
      setCount(progress);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 650);
    }
  });

  if (!show) return null;

  return (
    <div className={styles.preloader}>
          <img src={whiteLogo} className={styles.logoImage} />

    </div>
  );
};
