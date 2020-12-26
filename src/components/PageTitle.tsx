import React from "react";
import styled from "styled-components";

const PageTitleWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: var(--font-tertiary);
  color: var(--color-title);
  margin: 0;
`;

const Text = styled.p`
  color: var(--color-primary-shades-300);
  max-width: 40ch;
`;

type PageTitleProps = {
  title: string,
  description?: string,
};

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <PageTitleWrapper>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </PageTitleWrapper>
  );
};

export default PageTitle;
