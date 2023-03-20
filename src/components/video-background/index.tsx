import React, { FC } from "react";
import ReactPlayer from "react-player";

import * as styles from "./index.module.scss";

export interface VideoBackgroundProps {
  src: string;
  onReady?: () => void;
}

export const VideoBackground: FC<VideoBackgroundProps> = ({
  src,
  onReady = () => {},
}) => {
  if (typeof src === "string" && src.startsWith("http")) {
    return (
      <div className={styles.bgWrapper}>
        <ReactPlayer
          url={src}
          width="100%"
          height="100%"
          playing
          muted
          loop
          playsinline
          className={styles.bgIframe}
          onReady={() => onReady()}
        />
      </div>
    );
  }

  return (
    <div className={styles.bgWrapper}>
      <video
        className={styles.videoBg}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => canPlay()}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
