import React from "react";
import logo from "./navy-double-logo.svg";
import * as styles from "./index.module.scss";

export const DoubleLogo = () => {
  return (
    <div>
      <img src={logo} alt="Double logo" className={styles.headerLogo} />
    </div>
  );
};
