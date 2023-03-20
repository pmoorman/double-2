import { useSiteMetadata } from "@app/hooks";
import React, { FC } from "react";
import {
  Col,
  Row,
  Form,
  InputGroup,
  Button,
  ButtonProps,
} from "react-bootstrap";

import * as styles from "./index.module.scss";

import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import { StaticImage } from "gatsby-plugin-image";

export interface OgilvyFormProps {
  formId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
}

export const OgilvyInlineForm: FC<OgilvyFormProps> = ({
  formId,
  recaptchaProps,
  buttonProps,
}) => {
  const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
  const { recaptchaKey } = useSiteMetadata();
  const action = `https://app.convertkit.com/forms/${formId}/subscriptions`;

  return (
    <Form name="form" method="POST" action={action}>
      {/* <Row>
        <Col md="12" className="mt-5">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            required
            placeholder="Enter your name"
            aria-describedby="name"
            name="fields[name]"
          />
        </Col>
      </Row> */}
      <Row>
        <Col md="12" className="mt-2">
          <InputGroup className={styles.inputGroup}>
            <Form.Control
              required
              type="email"
              placeholder="Work email"
              aria-describedby="email"
              name="email_address"
            />
            <Button
              disabled={submitIsDisabled}
              type="submit"
              variant="primary"
              className="text-white"
              {...buttonProps}
            >
              Download PDF
            </Button>
          </InputGroup>
          <div className={styles.avatars}>
            <StaticImage
              src="./people.png"
              alt="People avatars"
              objectFit="contain"
              className="d-none d-lg-flex"
              height={30}
            />
            <StaticImage
              src="./people_mobile.png"
              alt="People avatars"
              quality={50}
              objectFit="contain"
              className="d-flex d-lg-none"
              width={75}
            />
            <p>15,233+ people loved the guide</p>
          </div>
        </Col>
      </Row>

      <ReCAPTCHA
        {...recaptchaProps}
        onChange={() => setSubmitIsDisabled(false)}
        sitekey={recaptchaKey}
      />
    </Form>
  );
};
