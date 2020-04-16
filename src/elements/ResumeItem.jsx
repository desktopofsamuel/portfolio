import React from "react";
import styled from "styled-components";

const Block = styled.div`
  border-top: 1px var(--color-white-500) solid;
  padding-top: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--color-white-500);
  margin: 0;
`;

const Content = styled.p`
  color: var(--color-secondary-100);
`;

const Meta = styled.p`
  color: var(--color-secondary-100);
  opacity: 0.5;
  font-family: var(--font-primary);
  letter-spacing: 0.025rem;
`;

const ResumeItem = ({ title, content, meta }) => {
  return (
    <Block>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Meta>{meta}</Meta>
    </Block>
  );
};

export default ResumeItem;
