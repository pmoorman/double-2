import * as React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, SEO } from "@app/components";

import * as styles from "./index.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Not found" />
      <Container>
        <div className="text-center py-lg-8 py-5 position-relative">
          <div className={styles.bg_image}></div>
          <h1 className="mb-4">
            404 - Page <br />
            not found
          </h1>
          <div className="mb-4">
            The page you’re looking for has either moved or your URL has an
            error.
          </div>
          <Button as={Link} to="/" variant="secondary">
            Home
          </Button>
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;
