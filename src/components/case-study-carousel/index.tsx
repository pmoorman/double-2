import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { useCaseStudies } from "@app/hooks";
import { CaseStudy } from "@app/models";
import { Carousel } from "@app/components";

import * as styles from "./index.module.scss";

export const CaseStudyCarousel = () => {
  const studies = useCaseStudies().sort(
    (a, b) => (a.carousel?.weight || 0) - (b.carousel?.weight || 0)
  );

  const renderItem = (study: CaseStudy) => {
    if (!study.carousel?.image) return null;
    const link = study.has_single_page ? study.slug : `/case-studies/`;
    return (
      <div key={study.title} className={styles.itemOuter}>
        <div className={styles.item}>
          <Link to={link}>
            <GatsbyImage
              objectFit="cover"
              image={study.carousel?.image}
              alt={study.title}
            />
          </Link>
        </div>
      </div>
    );
  };

  return <Carousel title="Our Work">{studies.map(renderItem)}</Carousel>;
};
