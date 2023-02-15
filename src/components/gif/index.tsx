import React, { useState, useEffect, useRef } from "react";

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

  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <div className="align-items-center d-flex flex-column">
        dangerouslySetInnerHTML=
        {{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
         {videoUrl.length && <source src={videoUrl} type="video/mp4" />}
        </video>`,
        }}
      </div>
    </>
  );
};
