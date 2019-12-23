import React from "react";
import styled from "styled-components";

const Meta = styled.div`
  position: relative;
  margin: -4rem auto 0 auto;
  max-width: 80%;
  padding: var(--var-padding-m) var(--var-padding-l);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 8px;
  background-color: var(--color-white-500);
  border-radius: 16px;
  z-index: 1001;

  @media screen and (max-width: 1024px) {
    margin: var(--var-padding-s) auto;
    max-width: 100%;
  }
`;

const MetaBox = ({ children, className }) => (
  <Meta classname={className}>{children}</Meta>
);

export default MetaBox;
