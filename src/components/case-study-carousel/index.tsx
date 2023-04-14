import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const CaseStudyCarousel = () => {
  return (
    <div className="d-flex">
      <div className={styles.item}>
        <StaticImage objectFit="cover" src="./Alpian.jpg" alt="" width={450} />
      </div>
    </div>
  );
};
