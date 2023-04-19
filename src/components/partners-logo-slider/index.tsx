import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";

import * as styles from "./index.module.scss";

const settings: Settings = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "100px",
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const LogoSlider = () => {
  return (
    <>
      <div className={styles.slider}>
        <Slider {...settings} className={styles.logoSlider}>
          <div>
            <StaticImage src="./alpian-logo-gray.png" alt="alpian logo" />
          </div>
          <div>
            <StaticImage
              src="./insidetracker-logo-gray.png"
              alt="insidetracker logo"
            />
          </div>
          <div>
            <StaticImage src="./glowforge-logo-gray.png" alt="glowforge logo" />
          </div>
          <div>
            <StaticImage src="./deloitte-logo-gray.png" alt="deloitte logo" />
          </div>
          <div>
            <StaticImage src="./diesel-logo-gray.png" alt="diesel logo" />
          </div>
          <div>
            <StaticImage src="./ryder-logo-gray.png" alt="ryder logo" />
          </div>
          <div>
            <StaticImage src="./sendcloud-logo-gray.png" alt="sendcloud logo" />
          </div>
          <div>
            <StaticImage src="./lely-logo-gray.png" alt="lely logo" />
          </div>
          <div>
            <StaticImage src="./tiktok-logo-gray.png" alt="tiktok logo" />
          </div>
          <div>
            <StaticImage alt="crobox logo" src="./crobox-logo-gray.png" />
          </div>
          <div>
            <StaticImage
              src="./vacuumlabs-logo-gray.png"
              alt="vacuumlabs logo"
            />
          </div>
          <div>
            <StaticImage src="./stryber-logo-gray.png" alt="Vacuumlabs logo" />
          </div>

          <div>
            <StaticImage src="./anomalie-logo-gray.png" alt="anomalie logo" />
          </div>
          <div>
            <StaticImage src="./klooker-logo-gray.png" alt="klooker logo" />
          </div>
          <div>
            <StaticImage src="./sencyr-logo-gray.png" alt="sencyr logo" />
          </div>
        </Slider>
      </div>
    </>
  );
};
