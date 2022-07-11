import React from "react";
import { Button, Container } from "react-bootstrap";
import { DoubleLogo, Link } from "@app/components";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <DoubleLogo />
          <div>
            <Button to="#" as={Link} variant="text">
              Terms & Conditions
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
