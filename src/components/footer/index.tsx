import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "@app/components";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.scss";
import { useSiteMetadata } from "@app/hooks";
import logo from "./logo.svg";
import logo1 from "./logo-1.svg";

export const Footer = () => {
  const { contact_email, contact_phone } = useSiteMetadata();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.headerLogo}>
            <h1 className="display-4 mb-4">
              Think we <br /> should <span>talk</span>?
            </h1>
            <p className="mb-4">
              Feel free to reach out if you are interested in working with us,
              for us, or just want to say hello.
            </p>

            <Button
              as={Link}
              to="/contact"
              variant="outline-light"
              className={styles.roundedButton}
            >
              Drop us a line
            </Button>
          </div>
          <div
            className={`${styles.footerMid} d-flex flex-column align-items-center`}
          >
            <div className="container">
              <div className="row gap-3">
                <div className="col-xl custom-col text-sm-start">
                  <h2 className="h5 fw-bold mb-3">
                    We work with ambitious <br /> businesses navigating <br />
                    uncharted territory.
                  </h2>
                </div>
                <div className="address col-xl custom-col text-sm-start">
                  <p>
                    <div className={styles.mapIcon}></div>
                    Prins Hendrikkade 21e, 1012 TL <br /> Amsterdam, Netherlands
                  </p>
                  <p>
                    <div className={styles.mapIcon}></div>
                    South Cache Street, WY 83002 <br /> United States of America
                  </p>
                </div>
                <div className="col-xl custom-col text-sm-start">
                  <h5 className="mb-1">Partners:</h5>
                  <div className={styles.partnersLogo}>
                    <div>
                      <StaticImage
                        src="./quora.png"
                        objectFit="contain"
                        alt="Quora Marketing Partner's logo"
                      />
                    </div>
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
            </div>
          </div>
        </Container>
      </footer>
      <div className={styles.footerPolicy}>
        <Container className="d-flex justify-content-between">
          <div className={styles.policyLogo}>
            ©
            <img src={logo1} alt="Double logo" />
          </div>
          <Link to="/legal/privacy-policy">Privacy Policy</Link>
        </Container>
      </div>
    </>
  );
};
