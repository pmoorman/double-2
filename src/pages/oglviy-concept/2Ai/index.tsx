import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";
import {
  Link,
  SEO,
  OgilvyHeader,
  OgilvyImage,
  OgilvyFooter,
} from "@app/components";

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

const OglviyConcept2 = () => {
  return (
    <>
      <SEO title="Ogilvy" />
      <OgilvyHeader></OgilvyHeader>

      <div className="mt-lg-6 my-4">
        <OgilvyImage></OgilvyImage>
      </div>

      <div className={styles.collectionSection}>
        <Container className="position-relative">
          <h2 className="mt-lg-7">The laws at a glance</h2>
          <div className={styles.sliderSection}>
            <Slider {...settings}>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./Union.svg" alt="union" />
                </div>
                <div>
                  <h4>Law 1: Getting users is hard</h4>
                  <p className="mb-0">
                    Founders underestimate how difficult it is to get their
                    product infront of the right users
                  </p>
                </div>
              </div>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./brand.svg" alt="brand" />
                </div>
                <div className="align-self-end">
                  <h4>Law 2: Systems, not hacks</h4>
                  <p className="mb-0">
                    Only scaleups that systemise all aspects of growth, win.
                  </p>
                </div>
              </div>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./strategy.svg" alt="strategy" />
                </div>
                <div className="align-self-end">
                  <h4>Law 3: Four essential growth sys</h4>
                  <p className="mb-0">
                    Acquisition, engagement, retention and analysis are the
                    backbone of every business.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
      <OgilvyFooter></OgilvyFooter>
    </>
  );
};

export default OglviyConcept2;
