import React from "react";
import styled from "styled-components";
import { H1, Subtitle } from "components/common/TextStyles";

type Props = {
  type: "primary" | "secondary",
};

const Wrapper =
  styled.div <
  Props >
  `
  margin: 2rem 0 4rem 0;

  display: grid;
  place-content: ${props =>
    (props.type === "primary" && "center") ||
    (props.type === "secondary" && "baseline") ||
    "center"} ;
  text-align: ${props =>
    (props.type === "primary" && "center") ||
    (props.type === "secondary" && "left")};
  border-bottom: ${props =>
    (props.type === "primary" && "none") ||
    (props.type === "secondary" &&
      "1px  var(--color-secondary-light-100) solid")};
`;

const Title =
  styled(H1) <
  Props >
  `
  font-family: ${props =>
    (props.type === "primary" && "var(--font-primary)") ||
    (props.type === "secondary" && "var(--font-primary)")};
  color: var(--color-title);
  margin: 0;
  transition: var(--transition);
`;

const Description = styled(Subtitle)`
  max-width: 40ch;
  margin-left: auto;
  margin-right: auto;
`;

type PageTitleProps = {
  title: string,
  description?: string,
  type: "primary" | "secondary",
};

const defaultProps: PageTitleProps = {
  title: "",
  type: "primary",
};

const PageTitle = ({ title, description, type }: PageTitleProps) => {
  return (
    <Wrapper type={type}>
      <Title type={type}>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

PageTitle.defaultProps = defaultProps;

export default PageTitle;
