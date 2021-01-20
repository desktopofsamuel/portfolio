import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled(GatsbyLink)`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-700);
  text-transform: unset;
  letter-spacing: 0;
  display: flex;
  grid-gap: 0.5rem;
  padding: 1.25rem 1.25rem;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  border: 1px solid var(--color-border);

  p {
    margin: 0;
  }

  & > * {
    line-height: 0;
  }

  &:hover {
    color: var(--color-white-light-100);
    border: 1px solid var(--color-transparent);
    background: none;
    background-color: var(--color-primary-light-500);
  }

  &:active {
    outline: none;
  }
`;

type ButtonReadOnProps = {
  to: string,
  text: string,
  lefticon?: string,
  righticon?: string,
  target: "_blank" | "_self",
};

const defaultProps: ButtonReadOnProps = {
  text: "Read On",
  lefticon: "",
  righticon: "",
  to: "",
};

const ButtonPill: React.FC<ButtonReadOnProps> = ({
  to,
  text,
  lefticon,
  righticon,
  target,
}: ButtonReadOnProps) => (
  <Button to={to} target={target}>
    <FontAwesomeIcon
      size="1x"
      icon={lefticon}
      title={text}
      style={{ lineHeight: 0 }}
    />
    <p>{text}</p>
    <FontAwesomeIcon size="1x" icon={righticon} title={text} />
  </Button>
);

ButtonPill.defaultProps = defaultProps;

export default ButtonPill;
