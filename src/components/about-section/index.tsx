import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import * as styles from "./index.module.scss";

import about1 from "./about-1.svg";
import about2 from "./about-2.svg";
import about3 from "./about-3.svg";

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
    <div className="mt-20">
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
            <div className={styles.wrapper}>
            <div className={styles.block + " mb-3 mb-md-0"}>
              {selected === 0 && <img src={about1} alt="about 1" />}
              {selected === 1 && <img src={about2} alt="about 2" />}
              {selected === 2 && <img src={about3} alt="about 3" />}
            </div>
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
                      styles.textBlock,
                      styles.btn,
                      "px-3 py-5 pe-md-8 mb-3 mb-md-0"
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
    </div>
  );
};
