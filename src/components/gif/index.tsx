import React, { useState, useEffect } from "react";

import MainFront1 from "./gif1.mp4";
import MainFront2 from "./gif2.mp4";
import MainFront3 from "./gif3.mp4";
import MainFront4 from "./gif4.mp4";
import MainFront5 from "./gif5.mp4";
import MainFront6 from "./gif6.mp4";
import MainFront7 from "./gif7.mp4";
import MainFront8 from "./gif8.mp4";
import MainFront9 from "./gif9.mp4";
import MainFront10 from "./gif10.mp4";
import MainFront11 from "./gif11.mp4";

import * as styles from "./index.module.scss";

export const GifSection = () => {
  const renderVideo = () => {
    const Images = [
      { video: MainFront1 },
      { video: MainFront2 },
      { video: MainFront3 },
      { video: MainFront4 },
      { video: MainFront5 },
      { video: MainFront6 },
      { video: MainFront7 },
      { video: MainFront8 },
      { video: MainFront9 },
      { video: MainFront10 },
      { video: MainFront11 },
    ];
    const randomVideoIndex = Math.floor(Math.random() * Images.length);
    return Images[randomVideoIndex].video;
  };

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const url = renderVideo();
    setVideoUrl(url);
  }, []);

  return (
    <>
      <div className="align-items-center d-flex flex-column">
        <video loop muted autoPlay playsInline preload="metadata">
          {videoUrl.length && <source src={videoUrl} type="video/mp4" />}
        </video>
        `
      </div>
    </>
  );
};
