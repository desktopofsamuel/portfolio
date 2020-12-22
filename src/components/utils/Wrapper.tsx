import React from "react";
import { ReactChildren } from "react";
import styled, { CSSProperties } from "styled-components";

const Grid = styled.div``;

type WrapperProps = {
  children: ReactChildren,
  className?: string,
  style?: CSSProperties,
};

const Wrapper = ({ children, className, style }: WrapperProps) => (
  <Grid className={className} style={style}>
    {children}
  </Grid>
);

export default Wrapper;
