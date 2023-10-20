import React from "react";
import { Col, Row } from "react-bootstrap";

import { useTeam } from "@app/hooks";
import { GatsbyImage } from "gatsby-plugin-image";
import { TeamMemberData } from "@app/models";

export const TeamSection = () => {
  const team = useTeam({ sortByName: true });
  const [active, setActive] = React.useState(team[0]);

  const handleChange = (member: TeamMemberData) => () => {
    setActive(member);
  };

  return (
    <Row>
      <Col md={4} className="mb-4 mb-md-0">
        <h2 className="mb-5">The team</h2>
        <GatsbyImage image={active.image} alt={active.name} />
      </Col>
      <Col md={6}>
        {team.map((member) => (
          <div
            key={member.name}
            onClick={handleChange(member)}
            onMouseEnter={handleChange(member)}
            role="button"
          >
            <h4 className="fw-bold mb-0">{member.name}</h4>
            <p className="lead">{member.title}</p>
          </div>
        ))}
      </Col>
    </Row>
  );
};
