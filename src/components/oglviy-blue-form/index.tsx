import { useSiteMetadata } from "@app/hooks";
import React, { FC } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  ButtonProps,
} from "react-bootstrap";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

import * as styles from "./index.module.scss";

export interface OgilvBlueFormProps {
  formId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
}

export const OgilvBlueForm: FC<OgilvBlueFormProps> = ({
  formId,
  recaptchaProps,
  buttonProps,
}) => {
  const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
  const { recaptchaKey } = useSiteMetadata();
  const action = `https://www.getdrip.com/forms/${formId}/submissions`;

  return (
    <>
      <div className={styles.blueForm}>
        <h3 className="text-center mb-2 mt-0">Unlock all 38 laws</h3>
        <div className="text-center mb-2">
          Uncover all 38 laws of growth.
          <br />
          Sign up with your email and we’ll send them over.
        </div>
        <Form name="form" method="POST" action={action}>
          <Row>
            <Col md="12" className="mt-3">
              <Form.Control
                required
                type="email"
                placeholder="Work email"
                aria-describedby="email"
                name="fields[email]"
              />
            </Col>
          </Row>

          {/* used by drip */}
          <div
            style={{ display: "none" }}
            aria-hidden="true"
            className={styles.space}
          >
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="false"
              value=""
            />
          </div>

          <ReCAPTCHA
            {...recaptchaProps}
            onChange={() => setSubmitIsDisabled(false)}
            sitekey={recaptchaKey}
          />

          <Button
            disabled={submitIsDisabled}
            type="submit"
            className=" mt-3 text-white"
            {...buttonProps}
          >
            Download PDF
          </Button>
        </Form>
      </div>
    </>
  );
};
