import React, { FC } from "react";
import * as styles from "./index.module.scss";

export const Stats = () => {
  return (
    <div className="pt-lg-5 pb-lg-6 py-4">
      <div className={`numberStat d-flex + ${styles.tiktokStatics}`}>
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
    </div>
  );
};
