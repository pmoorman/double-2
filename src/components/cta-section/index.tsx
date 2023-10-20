// Component.js
import React from "react";
import * as styles from "./index.module.scss";
import hero from "./hero.svg";
import logo from "./logo.svg";

export default function CtaSection() {
  return (
    <div className={styles.container}>
      <div className={`${styles.box1}`}>
        <h2>
          Growth marketing <br /> <span>agency</span>
        </h2>
        <img src={hero} alt="" />
      </div>

      <div className={styles.box2}>
        <h3>
          We work with ambitious businesses navigating uncharted territory.
        </h3>
        <img src={logo} alt="" />

      </div>
    </div>
  );
}
