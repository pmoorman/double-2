import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import logo from "./double-logo-black.svg";
import * as styles from "./index.module.scss";

export const DoubleLogo = () => {
  return (
    <div>
      <img src={logo} alt="Double logo" className={styles.headerLogo} />
    </div>
  );
};
