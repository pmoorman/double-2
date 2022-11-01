import React from "react";
import { Button, Container } from "react-bootstrap";
import { DoubleLogo, Link } from "@app/components";
import * as styles from "./index.module.scss";

export const FooterPolicy = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between py-4">
        <DoubleLogo />
        <div className={styles.footerLogo}>
          <Button to="/legal/privacy-policy" as={Link} variant="text">
            Privacy Policy
          </Button>
        </div>
      </div>
    </Container>
  );
};
