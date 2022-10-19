import React from "react";
import { Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";
import { SEO, OgilvyHeader, OgilvyImage, OgilvyFooter } from "@app/components";

import * as styles from "./index.module.scss";

const settings: Settings = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  className: styles.blogSlider,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick",
    },
  ],
};

const dripId = "248444655";

const OglviyConcept2 = () => {
  return (
    <>
      <SEO title="38 laws of growth marketing" />
      <OgilvyHeader dripId={dripId} />
    </>
  );
};

export default OglviyConcept2;
