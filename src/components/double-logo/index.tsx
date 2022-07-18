import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const DoubleLogo = () => {
  return (
    <div>
      <StaticImage
        alt="Double logo"
        src="./double-logo-black.svg" 
        className={styles.headerLogo}
      />
    </div>
  );
};
