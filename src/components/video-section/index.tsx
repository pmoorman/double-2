import React, { FC } from "react";
import video from "./double-agency.mp4";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";

export const VideoSection = () => {
  return (
    <Parallax scale={[0.8, 1, "easeInQuad"]}>
      <div className={styles.playerWrapper}>
        <video
          src={video}
          type="video/mp4"
          autoPlay={true}
          muted
          playsinline
        ></video>
      </div>
    </Parallax>
  );
};
