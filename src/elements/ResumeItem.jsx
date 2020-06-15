import React from "react";
import styled from "styled-components";

const Block = styled.div`
  border-top: ${props =>
    props.noBorder ? "none" : "1px var(--color-white-500) solid"};
  padding-top: ${props => (props.noBorder ? "0" : "1rem")};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--color-white-500);
  margin: 0;
`;

const Content = styled.p`
  color: var(--color-secondary-100);
  line-height: 16px;
  margin-top: ${props => (props.noBorder ? "0" : "1rem")};
`;

const Meta = styled.p`
  color: var(--color-secondary-100);
  opacity: 0.5;
  font-family: var(--font-primary);
  letter-spacing: 0.025rem;
`;

const ResumeItem = ({ title, content, meta, noBorder }) => {
  return (
    <Block noBorder={noBorder}>
      <Title>{title}</Title>
      <Content noBorder={noBorder}>{content}</Content>
      <Meta>{meta}</Meta>
    </Block>
  );
};

export default ResumeItem;
