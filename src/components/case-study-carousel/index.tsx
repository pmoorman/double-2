import React, { useEffect, useRef } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";
import { Container } from "react-bootstrap";

export const CaseStudyCarousel = () => {
  const container = useRef<HTMLDivElement>(null);

  const handleClickArrow = (direction: "left" | "right") => () => {
    if (!container.current) return;
    const currentLeft = container.current.scrollLeft;
    const newLeft =
      direction === "left" ? currentLeft - 420 : currentLeft + 420;
    container.current.scrollTo({
      left: newLeft,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="mb-0">Our work</h2>
          <div className="d-flex gap-5">
            <div role="button" onClick={handleClickArrow("left")}>
              <StaticImage
                objectFit="contain"
                src="./left-arrow.svg"
                alt=""
                width={39}
              />
            </div>
            <div role="button" onClick={handleClickArrow("right")}>
              <StaticImage
                objectFit="contain"
                src="./right-arrow.svg"
                alt=""
                width={39}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.ourWork}>
        <ScrollContainer ref={container}>
          <div className="d-flex flex-nowrap gap-3">
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./TikTok.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./Lely.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./InsideTracker.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./Glowforge.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./Deloitte.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./Ryder.jpg"
                alt=""
                width={450}
              />
            </div>
            <div className={styles.item}>
              <StaticImage
                objectFit="cover"
                src="./Alpian.jpg"
                alt=""
                width={450}
              />
            </div>
          </div>
        </ScrollContainer>
      </div>
    </>
  );
};
