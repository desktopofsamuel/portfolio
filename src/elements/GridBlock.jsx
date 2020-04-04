import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--var-padding-m);
`;

const GridBlock = ({ children, className }) => (
  <Grid className={className}>{children}</Grid>
);

export default GridBlock;
