import React, { FC } from "react";
import * as styles from "./index.module.scss";

export const Stats = () => {
  
  return (
    <div className={`numberStat d-flex mt-lg-5 mb-lg-6 my-4 + ${styles.tiktokStatics}`}>
      <div>
        <div>5k</div>
        <span>Leads</span>
      </div>
      <div>
        <div>1</div>
        <span>Website</span>
      </div>
      <div>
        <div>6</div>
        <span>Weeks</span>
      </div>
    </div>
  );
};