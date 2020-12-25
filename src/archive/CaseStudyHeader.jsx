import React from "react";
import styled from "styled-components";
import Column from "components/utils/Column";

const Text = styled.p`
  font-size: var(--font-size-2xs);
`;

const CaseStudyHeader = data => {
  return (
    <Column>
      <div>
        <small>My Role</small>
        <Text>{data.data.role}</Text>
      </div>
      <div>
        <small>Team</small>
        <ul>
          {data.data.team.map((team, i) => (
            <li key={team}>{team}</li>
          ))}
        </ul>
      </div>
    </Column>
  );
};
export default CaseStudyHeader;
