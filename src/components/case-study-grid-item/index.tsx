import React, { FC, useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import cn from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { Link } from "@app/components";

import * as styles from "./index.module.scss";
import arrow from "./arrow-narrow-right.svg";
import cornerArrow from "./corner-down-left.svg";

export type CaseStudyGridItemProps = {
  image: React.ReactNode;
  title: string;
  subtitle: string;
  tags: string[];
  size: "square" | "high" | "wide";
  className?: string;
  align: "start" | "center" | "end";
  slug: string;
};

export const CaseStudyGridItem: FC<CaseStudyGridItemProps> = ({
  image,
  title,
  subtitle,
  tags = [],
  size,
  className,
  align = "start",
  slug,
}) => {
  const style: any = {};
  const _className = cn(className, "mb-7", {
    [`align-items-${align}`]: !!align,
  });
  let width = 4;

  if (size === "high") {
    style.height = "537px";
  }

  if (size === "wide") {
    width = 8;
  }

  if (size === "square") {
    style.height = "400px";
  }

  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;

    gsap.from(el, {
      y: 8,
      opacity: 0,
      duration: 1,
      delay: Math.random() * 2, // random delay
      ease: "power3.out",

      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        toggleActions: "play none none reverse",
        once: true, // only animate once
      },
    });
  }, []);

  return (
    <Col md={width} className={_className}>
      <Link to={slug} className={styles.item}>
        <div className={styles.image} ref={itemRef} style={style}>
          {image}
          <div className={styles.overlay} />
          <div className={styles.arrow}>
            <img className={styles.arrowStraight} src={arrow} alt="arrow" />
            <img className={styles.arrowCorner} src={cornerArrow} alt="arrow" />
            <div className={styles.tags}>
              {tags.map((t) => (
                <div key={t} className={styles.tag}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <strong>{title}</strong> — 
          {subtitle}
        </div>
      </Link>
    </Col>
  );
};
