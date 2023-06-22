import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";

const items = [
  {
    title: "Seed",
    description:
      "Find product-market fit, delight early users, and prepare for the next stage of growth.",
  },
  {
    title: "Series A/B",
    description:
      "Gain meaningful traction and get ready to scale a healthy business.",
  },
  {
    title: "Established",
    description: "Stay competitive, while retaining long-time customers.  ",
  },
];

export const AboutSection = () => {
  const [selected, setSelected] = React.useState(0);

  const handleClick = (index: number) => (e: any) => {
    setSelected(index);
  };

  return (
    <>
      <Container className="mb-7">
        <Row>
          <Col>
            <h2>About our clients</h2>
            <h4>No matter which stage you’re at, we work with everyone.</h4>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.block}>
              {selected === 0 && (
                <StaticImage
                  src="./about-1.png"
                  alt="about 1"
                  loading="eager"
                  placeholder="none"
                />
              )}
              {selected === 1 && (
                <StaticImage
                  src="./about-2.png"
                  alt="about 2"
                  loading="eager"
                  placeholder="none"
                />
              )}
              {selected === 2 && (
                <StaticImage
                  src="./about-3.png"
                  alt="about 3"
                  loading="eager"
                  placeholder="none"
                />
              )}
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.buttons}>
              {items.map((item, index) => {
                let background;
                let color;

                if (selected === index) {
                  background = "var(--bs-primary)";
                  color = "#fff";
                }

                return (
                  <div
                    className={cn(
                      styles.block,
                      styles.btn,
                      "px-3 py-5 pe-md-8"
                    )}
                    style={{ background, color }}
                    onClick={handleClick(index)}
                  >
                    <h3 className="mb-3">{item.title}</h3>
                    <h4 className="pe-md-5">{item.description}</h4>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
