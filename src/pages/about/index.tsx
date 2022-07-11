import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useTeam } from "@app/hooks";
import { TeamMember } from "@app/components";

const AboutPage = () => {
  const team = useTeam();

  return (
    <Container>
      <Row>
        <Col>
          <h1>AboutPage</h1>
        </Col>
      </Row>
      <Row>
        {team.map((member) => (
          <Col key={member.name} md={3}>
            <TeamMember member={member} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutPage;
