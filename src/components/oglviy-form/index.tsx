import { useSiteMetadata } from "@app/hooks";
import React, { FC } from "react";
import { Col, Row, Form, Button, ButtonProps } from "react-bootstrap";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

export interface OgilvyFormProps {
  dripId: string;
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">;
  buttonProps?: ButtonProps;
}

export const OgilvyForm: FC<OgilvyFormProps> = ({
  dripId,
  recaptchaProps,
  buttonProps,
}) => {
  const [submitIsDisabled, setSubmitIsDisabled] = React.useState(true);
  const { recaptchaKey } = useSiteMetadata();
  const action = `https://www.getdrip.com/forms/${dripId}/submissions`;

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
        <Col md="12" className="mt-5">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            required
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
      <input
        type="hidden"
        name="tags[]"
        id="tags_"
        value="Ogilvy Q4 2022"
        tabIndex={-1}
      ></input>

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
