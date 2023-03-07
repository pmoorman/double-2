import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "@app/components";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.scss";
import logo from "./logo.svg";

export const FooterPolicy = () => {
  return (
    <div className={styles.footerPolicy}>
      <Container>
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src={logo} alt="Double logo" />
          </Link>
          <Link to="https://www.linkedin.com/company/double-agency/">
            <div className={styles.linkedinIcon}></div>
          </Link>
        </div>
        <div className="d-flex my-5">
          <Link to="/legal/privacy-policy">Privacy Policy</Link>
        </div>
      </Container>
    </div>
  );
};
