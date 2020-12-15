import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--var-padding-s);

  @media only screen and (max-width: 600px) {
    display: flex;
    row-gap: var(--var-padding-m);
    flex-direction: column;
  }
`;

const Column = ({ children, className }) => (
  <Grid className={className}>{children}</Grid>
);

export default Column;
