import classNames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import * as styles from "./index.module.scss";

const items = [
  {
    title: "Go-to-market",
    body: "GTM is taking your solution and making it easy for the market to buy it. We’ve played a part in 100+ GTMs; crafting the marketing strategy but also creating the brand and it’s messaging.",
    image: <StaticImage src="./item-1.svg" alt="Go-to-market" />,
    buttonText: "Case study: Lely →",
    buttonLink: "",
  },
  {
    title: "Acquisition",
    body: "Acquiring new customers is core to growth. This means; more leads, more users, more revenue. We’re not bound by specific channels, you can rest assured we’re experts in every ad platform.",
    image: <StaticImage height={51} src="./item-2.svg" alt="Acquisition" />,
    buttonText: "Case study: Glowforge →",
    buttonLink: "",
  },
  {
    title: "Retention",
    body: "When doubling your effort doesn’t double your results; you’ve got a scaling issue. The remedy is a system-based marketing approach. We use automation techniques, so you can do more without growing pains. ",
    image: <StaticImage src="./item-3.svg" alt="Retention" />,
    buttonText: "Case study: Tik tok →",
    buttonLink: "",
  },
  {
    title: "Scaling",
    body: "If acquisition creates growth, then retention makes it future-proof. The answers for this lie within your customers. We study your business model and audience to find the leaks.",
    image: <StaticImage src="./item-4.svg" alt="Scaling" />,
    buttonText: "Case study: Insidetracker →",
    buttonLink: "",
  },
];

export const ServicesSection = () => {
  const [selected, setSelected] = useState<(typeof items)[0]>();

  const renderModal = () => {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{selected?.body}</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  };

  return (
    <>
      <Container className="mb-7">
        <Row>
          <Col>
            <h2>Services</h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {items.map((item, index) => (
            <Col md={6} key={item.title} className="mb-4">
              <div
                className={classNames(
                  styles.block,
                  "d-flex align-items-center"
                )}
              >
                <div>{item.image}</div>
                <h3 className="mb-0 ms-5">{item.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {renderModal()}
    </>
  );
};
