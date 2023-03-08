import { useSiteMetadata } from "@app/hooks";
import React, { FC } from "react";
import { Col, Row, Form, Button, ButtonProps } from "react-bootstrap";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

export interface OgilvyFormProps {
  formId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
}

export const OgilvyForm: FC<OgilvyFormProps> = ({
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
        <Col md="12" className="mt-3">
          <Form.Label htmlFor="email">Business Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            aria-describedby="email"
            name="email_address"
          />
        </Col>
      </Row>

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
  );
};
