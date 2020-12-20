import React from "react";
import styled from "styled-components";
import Column from "elements/Column";

const Text = styled.p`
  font-size: var(--font-size-xs);
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
