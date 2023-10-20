"use client";

import React, { useState, useEffect } from "react";
import * as styles from "./index.module.scss";

const Scrollbar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, []);

  return (
    <div className={styles.progressBar}>
    <div 
      className={styles.progressBarInner}
      style={{width: `${scrollPercentage}%`}}
    />
  </div>
  );
};

export default Scrollbar;