import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";

import { TeamMemberData } from "@app/models";

import * as styles from "./index.module.scss";

export interface TeamMemberProps {
  member: TeamMemberData;
  inSlider?: boolean;
}

export const TeamMember: FC<TeamMemberProps> = ({ member, inSlider }) => {
  const teamImageClass = cn({
    [styles.teamImageSlider]: inSlider,
  });

  return (
    <div>
      <div className="mb-3">
        <GatsbyImage
          image={member.image}
          alt={member.name}
          className={teamImageClass}
        />
      </div>
      <h4 className="mb-2">{member.name}</h4>
      <div className="mb-2 lead">{member.title}</div>
      <p className="mb-2 d-flex align-items-center">
        <i className={styles.mapIcon}></i>
        {member.location}
      </p>
    </div>
  );
};
