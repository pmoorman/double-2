import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DoubleLogo, Link } from "@app/components";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="mt-lg-6 mb-lg-7 mt-md-4 mb-md-4 align-items-center">
          <h2 className="d-md-block d-lg-none mb-3 ">Think we should talk?</h2>
          <Col  lg={6} md={{ span: 12, order: "2" }}  sm={{ span: 12, order: "2" }} xs={{ span: 12, order: "2" }}>
            <h4 className="mb-3">Email us</h4>
            <div className="mb-3">Hello@double-agency.com</div>
            <h4 className="mb-3">Call us</h4>
            <div className="mb-4">xxxxxxxxx</div>
            <Button
              as={Link}
              to="/contact"
              variant="outline-secondary">
              Contact us
            </Button>
          </Col>
          <Col className="mb-3 mb-lg-0" lg={{ span: 6, order: "2" }} md={12}>
            <StaticImage
                src="./footer_img.jpeg"
                alt="Contact us"
                className={styles.mobileImage}
              />
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-between">
          <DoubleLogo />
          <div className={styles.footerLogo}>
            <Button to="#" as={Link} variant="text">
              Terms & Conditions
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
