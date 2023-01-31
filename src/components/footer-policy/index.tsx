import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "@app/components";
import * as styles from "./index.module.scss";

export const FooterPolicy = () => {
  return (
    <div className={styles.FooterPolicy}>
      <Container>
        <div className="d-flex flex-lg-row flex-md-row flex-column align-items-lg-center justify-content-end">
          <Link to="/legal/terms">Terms & Conditions</Link>
          <Link to="/legal/privacy-policy">Privacy Policy</Link>
          <Link to="/legal/academy">The Academy</Link>
        </div>
      </Container>
    </div>
  );
};
