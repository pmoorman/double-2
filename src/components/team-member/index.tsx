import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { TeamMemberData } from "@app/models";

export interface TeamMemberProps {
  member: TeamMemberData;
}

export const TeamMember: FC<TeamMemberProps> = ({ member }) => {
  let image: JSX.Element | null = null;

  switch (member.name.toLowerCase()) {
    case "carine engbers":
      image = (
        <StaticImage
          src="./carine_engbers.jpg"
          alt="carine engbers"
          height={368}
          width={298}
        />
      );
      break;

    case "caspar lusink":
      image = (
        <StaticImage
          src="./caspar_lusink.jpg"
          alt="caspar lusink"
          height={368}
          width={298}
        />
      );
      break;

    case "dominik kondziela":
      image = (
        <StaticImage
          src="./dominik_kondziela.jpg"
          alt="dominik kondziela"
          height={368}
          width={298}
        />
      );
      break;

    case "erik brendon":
      image = (
        <StaticImage
          src="./erik_brendon.jpg"
          alt="erik_brendon"
          height={368}
          width={298}
        />
      );
      break;

    case "james wilkinson":
      image = (
        <StaticImage
          src="./james_wilkinson.jpg"
          alt="james wilkinson"
          height={368}
          width={298}
        />
      );
      break;

    case "louise de sadeleer":
      image = (
        <StaticImage
          src="./louise_de_sadeleer.jpg"
          alt="louise de sadeleer"
          height={368}
          width={298}
        />
      );
      break;

    case "naveed tariq":
      image = (
        <StaticImage
          src="./naveed_tariq.jpg"
          alt="naveed tariq"
          height={368}
          width={298}
        />
      );
      break;

    case "pieter moorman":
      image = (
        <StaticImage
          src="./pieter_moorman.jpg"
          alt="pieter moorman"
          height={368}
          width={298}
        />
      );
      break;
  }

  return (
    <div>
      <div className="mb-3">
        {image}
      </div>
      <h4 className="mb-2">
        {member.name}
      </h4>
      <div className="mb-2 lead">{member.position}</div>
      <p className="mb-2 d-flex"><i className="mapIcon"></i>{member.location}</p>
    </div>
  );
};
