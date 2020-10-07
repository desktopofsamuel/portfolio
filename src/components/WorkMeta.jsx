import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const WorkMeta = ({ children, className }) => {
  return <Grid className={className}>{children}</Grid>;
};

export default WorkMeta;
