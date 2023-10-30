import React, { FC, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { Link, DoubleLogo, MobileMenu } from "@app/components";
import * as styles from "./index.module.scss";

const ID = "main-nav";
const LINKS = [
  { label: "Clients", to: "/case-studies" },
  { label: "About", to: "/about" },
  // { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
];

export interface HeaderProps {
  hideNav?: boolean;
}

export const Header: FC<HeaderProps> = ({ hideNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const isMdDevice = useMediaQuery({ query: "(min-width: 992px)" });

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // scroll down
        setHideHeader(true);
      } else {
        // scroll up
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`${styles.navbar} ${hideHeader ? styles.hide : ""}`}
    >
      <div className="container">
        {!isMdDevice && !hideNav && <MobileMenu />}

        {!hideNav ? (
          <>
            <Navbar.Brand as={Link} to="/" className={styles.navbarLogo}>
              <DoubleLogo />
            </Navbar.Brand>
            <Nav className={styles.navbarNav}>
              {LINKS.map((link) => (
                <Nav.Link
                  key={link.to}
                  className={styles.navLink}
                  activeClassName={styles.navLinkActive}
                  onClick={() => setIsOpen(false)}
                  as={Link}
                  to={link.to}
                >
                  <span>{link.label}</span>
                </Nav.Link>
              ))}
            </Nav>
            <button className={styles.roundedButton}>
              <Nav.Link
                key="/contact"
                onClick={() => setIsOpen(false)}
                as={Link}
                to="/contact"
              >
                <span>Contact us</span>
              </Nav.Link>
            </button>
          </>
        ) : (
          <Navbar.Brand as={Link} to="/" className={styles.navbarLogo}>
            <DoubleLogo />
          </Navbar.Brand>
        )}
      </div>
    </Navbar>
  );
};
