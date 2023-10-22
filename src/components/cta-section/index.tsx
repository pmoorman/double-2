// Component.js
import React, { useEffect, useRef } from "react";
import * as styles from "./index.module.scss";
import hero from "./hero.svg";
import logo from "./logo.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function CtaSection() {
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;

    gsap.from(el, {
      y: 12,
      opacity: 0,
      duration: 1.2,
      delay: Math.random() * 1.2, // random delay
      ease: "power3.out",

      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
        once: true, // only animate once
      },
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={`${styles.box1}`} ref={itemRef}>
        <h2>
          Growth marketing <br /> <span>agency</span>
        </h2>
        <img src={hero} alt="" />
      </div>

      <div className={styles.box2} ref={itemRef}>
        <h3>
          We work with ambitious businesses navigating uncharted territory.
        </h3>
        <img src={logo} alt="" />

      </div>
    </div>
  );
}
