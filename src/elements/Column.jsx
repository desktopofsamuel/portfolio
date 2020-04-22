import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--var-padding-s);

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const Column = ({ children, className }) => (
  <Grid className={className}>{children}</Grid>
);

export default Column;
