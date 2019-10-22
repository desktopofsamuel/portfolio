import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 8px;
`;

const GridBlock = ({ children, className }) => (
  <Grid classname={className}>{children}</Grid>
);

export default GridBlock;
