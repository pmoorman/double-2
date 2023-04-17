import React, { useRef } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Container } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { useCaseStudies } from "@app/hooks";
import { CaseStudy } from "@app/models";

import * as styles from "./index.module.scss";

export const CaseStudyCarousel = () => {
  const studies = useCaseStudies().sort(
    (a, b) => (a.carousel?.weight || 0) - (b.carousel?.weight || 0)
  );
  const container = useRef<HTMLDivElement>(null);
  const isSmallDevice = useMediaQuery({ query: "(max-width: 992px)" });
  const moveAmount = isSmallDevice ? 300 : 420;

  const handleClickArrow = (direction: "left" | "right") => () => {
    if (!container.current) return;
    const currentLeft = container.current.scrollLeft;
    const newLeft =
      direction === "left"
        ? currentLeft - moveAmount
        : currentLeft + moveAmount;
    container.current.scrollTo({
      left: newLeft,
      behavior: "smooth",
    });
  };

  const renderItem = (study: CaseStudy) => {
    if (!study.carousel?.image) return null;
    const link = study.has_single_page ? study.slug : `/case-studies/`;
    return (
      <div key={study.title} className={styles.item}>
        <Link to={link}>
          <GatsbyImage
            objectFit="cover"
            image={study.carousel?.image}
            alt={study.title}
          />
        </Link>
      </div>
    );
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="mb-0">Our work</h2>
          <div className="d-flex gap-5">
            <div
              role="button"
              className={cn(styles.arrowBtn, "d-none d-md-flex")}
              onClick={handleClickArrow("left")}
            >
              <StaticImage
                imgClassName={styles.arrowImg}
                objectFit="contain"
                src="./left-arrow.svg"
                alt=""
                width={18}
                height={13.6}
              />
            </div>
            <div
              role="button"
              className={styles.arrowBtn}
              onClick={handleClickArrow("right")}
            >
              <StaticImage
                objectFit="contain"
                src="./right-arrow.svg"
                alt=""
                width={16}
                height={12}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.ourWork}>
        <ScrollContainer ref={container}>
          <div className="d-flex flex-nowrap gap-3">
            {studies.map(renderItem)}
          </div>
        </ScrollContainer>
      </div>
    </>
  );
};
