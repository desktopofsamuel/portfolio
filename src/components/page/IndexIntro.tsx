import React from "react";
import styled from "styled-components";
import ReadOn from "components/ReadOn";

type Props = {
  noMargin: boolean,
};

const Wrapper =
  styled.div <
  Props >
  `
  margin: ${props =>
    props.noMargin === true
      ? "0"
      : "var(--var-padding-l) 0 var(--var-padding-m) 0"};
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Index = styled.small``;

const Title = styled.h2`
  font-size: var(--font-size-xl);
  font-family: var(--font-primary);
  margin: 0;
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: var(--font-size-xs);
  margin: 0;
`;

type IndexIntroProps = {
  index: string,
  title: string,
  description?: string,
  label: string,
  href: string,
  noMargin: boolean,
};

const IndexIntro = ({
  index,
  title,
  description,
  label,
  href,
  noMargin,
}: IndexIntroProps) => {
  return (
    <Wrapper noMargin={noMargin}>
      <Index>{index}</Index>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ReadOn text={label} href={href} target="_self" />
    </Wrapper>
  );
};

export default IndexIntro;
