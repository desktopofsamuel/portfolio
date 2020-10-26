import React from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Wrapper = ({ children, className, margin, style }) => (
  <Grid className={className} margin={margin} style={style}>
    {children}
  </Grid>
);

export default Wrapper;
