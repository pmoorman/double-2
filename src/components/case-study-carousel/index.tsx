import React, { useEffect, useRef } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const CaseStudyCarousel = () => {
  const container = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!container.current) return;
  //     container.current.scrollTo({
  //       left: container.current.scrollLeft + 10,
  //       behavior: "smooth",
  //     });
  //   }, 40);
  //   return () => clearInterval(interval);
  // }, [container.current]);

  const handleClickRight = () => {
    console.log(container.current);
    if (!container.current) return;
    container.current.scrollTo({
      left: container.current.scrollLeft + 400,
      behavior: "smooth",
    });
  };

  const handleClickLeft = () => {
    console.log(container.current);
    if (!container.current) return;
    container.current.scrollTo({
      left: container.current.scrollLeft - 400,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>Our work</h2>
        <div className="d-flex">
          <div role="button" onClick={handleClickLeft}>
            <StaticImage
              objectFit="contain"
              src="./left-arrow.svg"
              alt=""
              width={39}
            />
          </div>
          <div role="button" onClick={handleClickRight}>
            <StaticImage
              objectFit="contain"
              src="./right-arrow.svg"
              alt=""
              width={39}
            />
          </div>
        </div>
      </div>
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
    </>
  );
};
