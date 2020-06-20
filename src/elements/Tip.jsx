import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-primary-background);
  border-left: 4px solid var(--color-primary);
  padding: 1rem;
  border-radius: var(--border-radius);
`;

const Title = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  display: inline;
  margin-right: 8px;
`;

const Tip = ({ children, className }) => (
  <Wrapper className={className}>
    <Title>Tip:</Title>
    {children}
  </Wrapper>
);

export default Tip;
