import React, { FC } from "react";

import { CaseStudy } from "@app/models";

import { CaseStudy1 } from "./case-study-1";
import { CaseStudy2 } from "./case-study-2";
import { CaseStudy3 } from "./case-study-3";
import { CaseStudy4 } from "./case-study-4";
import { CaseStudy5 } from "./case-study-5";

export interface CaseStudySectionProps {
  isHomepage?: boolean;
  type: 1 | 2 | 3 | 4 | 5;
  item: CaseStudy;
  isIndexPage?: boolean;
}

export const CaseStudySection: FC<CaseStudySectionProps> = (props) => {
  switch (props.type) {
    case 1:
      return <CaseStudy1 {...props} />;
    case 2:
      return <CaseStudy2 {...props} />;
    case 3:
      return <CaseStudy3 {...props} />;
    case 4:
      return <CaseStudy4 {...props} />;
    default:
      return null;
  }
};
