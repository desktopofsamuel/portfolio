import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;

  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

const WorkMeta = ({ children, className }) => {
  return (
    <>
      <Grid className="fullbleed">{children}</Grid>
    </>
  );
};

export default WorkMeta;
