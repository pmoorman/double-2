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
            <StaticImage src="./crobox-logo-white.png" alt="Crobox logo" />
          </div>
          <div>
            <StaticImage src="./lely-logo-white.png" alt="Lely logo" />
          </div>
          <div>
            <StaticImage src="./alpian-logo-white.png" alt="Alpian logo" />
          </div>
          <div>
            <StaticImage src="./diesel-logo-white.png" alt="Diesel logo" />
          </div>
          <div>
            <StaticImage src="./tiktok-logo-white.png" alt="Tiktok logo" />
          </div>
          <div>
            <StaticImage
              src="./glowforge-logo-white.png"
              alt="Glowforge logo"
            />
          </div>
          <div>
            <StaticImage src="./anomalie-logo-white.png" alt="Anomalie logo" />
          </div>
          <div>
            <StaticImage
              src="./sendcloud-logo-white.png"
              alt="Sendcloud logo"
            />
          </div>
          <div>
            <StaticImage src="./sencyr-logo-white.png" alt="Sencyr logo" />
          </div>
          <div>
            <StaticImage
              alt="Nasacademy logo"
              src="./nasacademy-logo-white.png"
            />
          </div>
          <div>
            <StaticImage src="./exceedme-logo-white.png" alt="Exceedme logo" />
          </div>
          <div>
            <StaticImage
              src="./vacuumlabs-logo-white.png"
              alt="Vacuumlabs logo"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
