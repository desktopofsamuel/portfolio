import React from "react";
import styled from "styled-components";

const BoxContent = styled.div`
  max-width: 60vw;
  padding: 0 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 70vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
    padding: 0rem;
  }
`;

const Boxed = ({ children, className }) => (
  <BoxContent classname={className}>{children}</BoxContent>
);

export default BoxContent;
