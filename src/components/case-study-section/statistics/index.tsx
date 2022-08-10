import { CaseStudyStats } from "@app/models";
import React, { FC } from "react";
import * as styles from "./index.module.scss";

export interface StatisticsProps {
  stats: CaseStudyStats[];
}

export const Statistics: FC<StatisticsProps> = ({ stats }) => {
  return (
    <div className="pt-lg-5 pb-lg-6 py-4">
      <div className={`numberStat d-flex + ${styles.tiktokStatics}`}>
        {stats.map((s) => (
          <div key={s.title}>
            <div>{s.value}</div>
            <span>{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
