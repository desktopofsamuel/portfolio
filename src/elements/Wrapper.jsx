import React from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Wrapper = ({ children, className, margin }) => (
  <Grid className={className} margin={margin}>
    {children}
  </Grid>
);

export default Wrapper;
