import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.min || "repeat(auto-fit, minmax(300px, 1fr))"};
  grid-gap: ${props => props.gap || "var(--var-padding-s)"};
  margin: ${props => props.margin || "var(--var-padding-m) 0"};
  align-items: center;
`;

const GridBlock = ({ children, className, margin, gap, style, min }) => (
  <Grid className={className} margin={margin} gap={gap} style={style} min={min}>
    {children}
  </Grid>
);

export default GridBlock;
