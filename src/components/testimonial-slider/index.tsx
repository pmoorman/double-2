import React from "react";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";
import { BlockQuote } from "../block-quote";
import { useTestimonials } from "@app/hooks/use-testimonials";

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
            {testimonials.map((t, i) => (
              <div key={t.title + i}>
                <Row className="d-flex align-items-center">
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
          </div>
        </Parallax>
      </div>
    </>
  );
};
