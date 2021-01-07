import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center center;
  margin: 2rem 0;
`;

const Centered = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Centered;
