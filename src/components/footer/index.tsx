import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "@app/components";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.scss";
import { useSiteMetadata } from "@app/hooks";
import logo from "./logo.svg";

export const Footer = () => {
  const { contact_email, contact_phone } = useSiteMetadata();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.headerLogo}>
            <img src={logo} alt="Double logo" />
            <Link to="https://www.linkedin.com/company/double-agency/">
              <div className={styles.linkedinIcon}></div>
            </Link>
          </div>
          <div className="mt-lg-5 mt-4 d-flex flex-lg-row flex-column justify-content-lg-between">
            <div lg={6} md={12}>
              <h4 className="mb-3">Email us</h4>
              <div className="mb-3">{contact_email}</div>
              <h4 className="mb-3">Call us</h4>
              <div className="mb-4">{contact_phone}</div>
              <Button
                as={Link}
                to="/contact"
                variant="outline-light"
                className={styles.roundedButton}
              >
                Contact us
              </Button>
              <div className="my-5 d-flex flex-direction-row">
                <div className={styles.mapIcon}></div>
                <div>
                  Netherlands - Amsterdam
                  <br />
                  Prins Hendrikkade 21e, 1012 TL
                  <br />
                  8:00-20:00 Mon-Fri
                </div>
              </div>
              <div className="mb-5 d-flex flex-direction-row">
                <div className={styles.mapIcon}></div>
                <div>
                  United States of America
                  <br />
                  680 South Cache Street, WY 83002
                </div>
              </div>
            </div>
            <div className="mb-3 mb-lg-0" lg={6} md={12}>
              <h5 className="mb-1">Partners</h5>
              <div className={styles.partnersLogo}>
                <div>
                  <StaticImage
                    src="./netlify.png"
                    objectFit="contain"
                    alt="Netlify logo"
                  />
                </div>
                <div>
                  <StaticImage
                    src="./google.png"
                    objectFit="contain"
                    alt="Google partner logo"
                  />
                </div>
                <div>
                  <StaticImage
                    src="./drip.png"
                    objectFit="contain"
                    alt="Drip logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className={styles.footerPolicy}>
        <Container>
          <div className="d-flex flex-lg-row flex-md-row flex-column align-items-lg-center justify-content-end">
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
          </div>
        </Container>
      </div>
    </>
  );
};
