import React from "react";
import styled from "styled-components";

const BoxContent = styled.div`
  max-width: 1024px;
  padding: 0 1rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 768px;
  }

  h2 {
    margin-top: 0;
  }
`;

const Boxed = ({ children, className }) => (
  <BoxContent classname={className}>{children}</BoxContent>
);

export default BoxContent;
