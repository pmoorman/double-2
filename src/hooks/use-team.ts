import team from "../../content/team.yaml";

import { TeamMemberData } from "@app/models";

export const useTeam = () => {
  return team as TeamMemberData[];
};
