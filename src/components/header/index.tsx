import React, { FC, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { Link, DoubleLogo, MobileMenu } from "@app/components";
import * as styles from "./index.module.scss";

const ID = "main-nav";
const LINKS = [
  { label: "Clients", to: "/case-studies" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  // { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact us", to: "/contact" },
];

export interface HeaderProps {
  hideNav?: boolean;
}

export const Header: FC<HeaderProps> = ({ hideNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMdDevice = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <Navbar expand="lg" className={styles.navbar}>
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
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
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
