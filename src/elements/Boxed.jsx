import React from "react";
import styled from "styled-components";

const BoxContent = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 768px;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 85%;
    padding: 0rem;
  }

  h2 {
    margin-top: 0;
  }
`;

const Boxed = ({ children, className }) => (
  <BoxContent classname={className}>{children}</BoxContent>
);

export default BoxContent;
