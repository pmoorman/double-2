import React from "react";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import Slider, { Settings } from "react-slick";
import cn from "classnames";

import { BlockQuote } from "../block-quote";
import { useTestimonials } from "@app/hooks";

import * as styles from "./index.module.scss";

const settings: Settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1.1,
  slidesToScroll: 1,
};

export const TestimonialSlider = () => {
  const testimonials = useTestimonials();

  return (
    <>
      <div className="mt-lg-7 mb-lg-8 my-5">
        <h3>
          What Double Agents have to say? (...and they usually talk a lot)
        </h3>
        <Parallax>
          <div className={styles.quote}>
            <Slider {...settings}>
              {testimonials.map((t, i) => (
                <div key={t.title + i}>
                  <Row
                    className={cn(
                      styles.testimonialItem,
                      "d-flex align-items-center"
                    )}
                  >
                    <Col md="8">
                      <div className={styles.blockquote}>
                        <BlockQuote
                          name={t.name}
                          title={t.title}
                          location={t.location}
                        >
                          {t.quote}
                        </BlockQuote>
                      </div>
                    </Col>
                    <Col md="4">
                      <GatsbyImage
                        image={t.image}
                        alt="Testimonial"
                        className="mt-4"
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </div>
        </Parallax>
      </div>
    </>
  );
};
