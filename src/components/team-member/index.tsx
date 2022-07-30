import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { TeamMemberData } from "@app/models";

import * as styles from "./index.module.scss";

export interface TeamMemberProps {
  member: TeamMemberData;
  inSlider?: boolean;
}

export const TeamMember: FC<TeamMemberProps> = ({ member, inSlider }) => {
  let image: JSX.Element | null = null;
  const layout = !inSlider ? "fullWidth" : undefined;
  const teamImageClass = cn({
    [styles.teamImageSlider]: inSlider,
  });

  switch (member.name.toLowerCase()) {
    case "carine engbers":
      image = (
        <StaticImage
          src="./carine_engbers.jpg"
          alt="carine engbers"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "caspar lusink":
      image = (
        <StaticImage
          src="./caspar_lusink.jpg"
          alt="caspar lusink"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "dominik kondziela":
      image = (
        <StaticImage
          src="./dominik_kondziela.jpg"
          alt="dominik kondziela"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "erik brendon":
      image = (
        <StaticImage
          src="./erik_brendon.jpg"
          alt="erik_brendon"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "james wilkinson":
      image = (
        <StaticImage
          src="./james_wilkinson.jpg"
          alt="james wilkinson"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "louise de sadeleer":
      image = (
        <StaticImage
          src="./louise_de_sadeleer.jpg"
          alt="louise de sadeleer"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "naveed tariq":
      image = (
        <StaticImage
          src="./naveed_tariq.jpg"
          alt="naveed tariq"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;

    case "pieter moorman":
      image = (
        <StaticImage
          src="./pieter_moorman.jpg"
          alt="pieter moorman"
          width={298}
          layout={layout}
          className={teamImageClass}
        />
      );
      break;
  }

  return (
    <div>
      <div className="mb-3">{image}</div>
      <h4 className="mb-2">{member.name}</h4>
      <div className="mb-2 lead">{member.position}</div>
      <p className="mb-2 d-flex align-items-center">
        <i className={styles.mapIcon}></i>
        {member.location}
      </p>
    </div>
  );
};
