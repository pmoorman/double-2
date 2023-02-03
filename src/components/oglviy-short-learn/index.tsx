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

export interface OgilvyLearnFormProps {
  dripId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
}

export const OgilvyLearnForm: FC<OgilvyLearnFormProps> = ({
  dripId,
  recaptchaProps,
  buttonProps,
}) => {
  const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
  const { recaptchaKey } = useSiteMetadata();
  const action = `https://www.getdrip.com/forms/${dripId}/submissions`;

  return (
    <>
      <div className="my-6">
        <Container>
          <h2>What you’ll learn 👀</h2>
          <Row className={`mt-4 + ${styles.learnSection}`}>
            <div>
              <div>
                <h3>#1 — Make growth your obsession</h3>
                <div>
                  Growth and distribution should be your top priority, because
                  getting users is harder than it seems. It is poor
                  distribution— not product—that is the number one cause of
                  startup failure. Prioritise accordingly.
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>#2 — Systems, not hacks</h3>
                <div>
                  Not all growth is created equal. Some growth is temporary,
                  while other growth lasts.  Growth marketing is about unlocking
                  structural, compounding growth. To acquire millions of users,
                  marketing needs to become predictable, systematic, automated
                  and repeatable. 
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>Unlock all 38 laws</h3>
                <div>
                  Uncover all 38 laws of growth. Sign up with your email and
                  we’ll send them over
                </div>
                <Form name="form" method="POST" action={action}>
                  <Row>
                    <Col md="12" className="mt-3">
                      <Form.Label htmlFor="email">Work email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                        aria-describedby="email"
                        name="fields[email]"
                      />
                    </Col>
                  </Row>

                  {/* used by drip */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <br />
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
                    className=" mt-5 mb-4 text-white"
                    {...buttonProps}
                  >
                    Download PDF
                  </Button>
                </Form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
