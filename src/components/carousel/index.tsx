import React, { FC, useEffect, useRef } from "react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

import { isBrowser } from "@app/utils";

import * as styles from "./index.module.scss";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";

export type CarouselProps = {
  title?: string;
  hideArrows?: boolean;
  autoScroll?: boolean;
};

export const Carousel: FC<CarouselProps> = ({
  hideArrows,
  title,
  autoScroll,
  children,
}) => {
  const initialized = useRef(false);
  const container = useRef<HTMLDivElement>(null);
  const [arrowClicked, setArrowClicked] = React.useState(false);
  const isSmallDevice = useMediaQuery({ query: "(max-width: 992px)" });
  const isXLDevice = useMediaQuery({ query: "(min-width: 1400px)" });
  const moveAmount = isSmallDevice ? 300 : 420;

  // Auto scroll
  useEffect(() => {
    if (!autoScroll || arrowClicked) return;
    const interval = setInterval(() => {
      handleClickArrow("right", true)();
    }, 3000);
    return () => clearInterval(interval);
  }, [autoScroll, arrowClicked]);

  useEffect(() => {
    // margin-left: calc((100vw - 1320px) / 2);
    if (!initialized?.current && container?.current && isBrowser()) {
      initialized.current = true;
      container.current.scrollTo({
        left: -(window.innerWidth - 1320) / 2,
        behavior: "smooth",
      });
    }
  }, [container, isXLDevice]);

  const handleClickArrow =
    (direction: "left" | "right", isAuto?: boolean) => () => {
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

      if (!isAuto) {
        setArrowClicked(true);
      }
    };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="mb-0">{title}</h2>
          {!hideArrows && (
            <div className="d-flex gap-6">
              <div
                role="button"
                className={cn(styles.arrowBtn, "d-none d-md-flex")}
                onClick={handleClickArrow("left")}
              >
                <img
                  src={leftArrow}
                  className={styles.arrowImg}
                  alt="left arrow"
                  width={18}
                  height={13.6}
                />
              </div>
              <div
                role="button"
                className={styles.arrowBtn}
                onClick={handleClickArrow("right")}
              >
                <img
                  src={rightArrow}
                  className={styles.arrowImg}
                  alt="right arrow"
                  width={18}
                  height={13.6}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
      <div className={styles.ourWork}>
        <ScrollContainer ref={container}>
          <div className={cn("d-flex flex-nowrap gap-4", styles.items)}>
            <div className={cn(styles.item, styles.firstItem)} />
            {children}
          </div>
        </ScrollContainer>
      </div>
    </>
  );
};
