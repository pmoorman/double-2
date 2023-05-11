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
  formId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
  sectionTitle?: string;
  block1Title?: string;
  block1Body?: string;
  block2Title?: string;
  block2Body?: string;
  formTitle?: string;
  formBody?: string;
  formButton?: string;
}

export const OgilvyLearnForm: FC<OgilvyLearnFormProps> = ({
  formId,
  recaptchaProps,
  buttonProps,
  sectionTitle = "What you’ll learn",
  block1Title = "#1 — Make growth your obsession",
  block1Body = "Growth and distribution should be your top priority, because getting users is harder than it seems. It is poor distribution— not product—that is the number one cause of startup failure. Prioritise accordingly.",
  block2Title = "#2 — Systems, not hacks",
  block2Body = "Not all growth is created equal. Some growth is temporary, while other growth lasts.  Growth marketing is about unlocking structural, compounding growth. To acquire millions of users, marketing needs to become predictable, systematic, automated and repeatable. ",
  formTitle = "Unlock all 38 laws",
  formBody = "Uncover all 38 laws of growth. Sign up with your email and we’ll send them over.",
  formButton = "Download PDF",
}) => {
  const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
  const { recaptchaKey } = useSiteMetadata();
  const action = `https://www.getdrip.com/forms/${formId}/submissions`;

  return (
    <>
      <div className="my-6">
        <Container>
          <h2>{sectionTitle}</h2>
          <Row className={`mt-4 + ${styles.learnSection}`}>
            <div>
              <div>
                <h3>{block1Title}</h3>
                <div>{block1Body}</div>
              </div>
            </div>
            <div>
              <div>
                <h3>{block2Title}</h3>
                <div>{block2Body}</div>
              </div>
            </div>
            <div>
              <div>
                <h3>{formTitle}</h3>
                <div>{formBody}</div>
                <Form name="form" method="POST" action={action}>
                  <Row>
                    <Col md="12" className="mt-3">
                      <Form.Label htmlFor="email">Work email</Form.Label>
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
                    {formButton}
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
