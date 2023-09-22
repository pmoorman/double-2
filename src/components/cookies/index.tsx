import React, { FC, useState } from "react";
import { useMediaQuery } from "react-responsive";

import * as styles from "./index.module.scss";
import cross from "./cross.svg";
import { Button } from "react-bootstrap";

export interface CookiesProps {}

export const Cookies: any = () => {
  const [isTrue, setIsTrue] = useState(false);
  const isMdDevice = useMediaQuery({ query: "(min-width: 992px)" });

  if (isTrue)
    return (
      <div className={`${styles.cookies}`}>
        <div className="close" onClick={() => setIsTrue(false)}>
          <img src={cross} alt="Close" className={styles.cross} />
        </div>
        <h4>Oh, cookies!</h4>
        <p>
          Just like a good recipe, our website uses <br /> cookies to enhance
          your visit. Rest assured, <br /> they’re entirely digital &
          calorie-free!
        </p>
        <div className="btn-contain">
          <Button
            onClick={() => setIsTrue(false)}
            variant="outline-light"
            buttonVariant="secondary"
            className={styles.roundedButton}
          >
            I consent
          </Button>
          <Button
            onClick={() => setIsTrue(false)}
            variant="outline-light"
            buttonVariant="secondary"
            className={styles.roundedButton}
          >
            I do not consent
          </Button>
        </div>
      </div>
    );
};
