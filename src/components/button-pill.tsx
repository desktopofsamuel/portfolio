import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  isSolid: boolean,
  isSecondary: boolean,
};

const Button =
  styled(GatsbyLink) <
  ButtonProps >
  `
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-700);
  text-transform: unset;
  letter-spacing: 0;
  display: flex;
  grid-gap: 0.5rem;
  padding: ${props => (props.isSecondary ? "0.5rem" : "1.25rem 1.25rem")};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  border: ${props =>
    props.isSecondary
      ? "1px solid var(--color-transparent)"
      : "1px solid var(--color-secondary-light-100)"};

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
  target?: "_blank" | "_self",
  isSolid?: boolean,
  isOutline?: boolean,
  isSecondary?: boolean,
};

const defaultProps: ButtonReadOnProps = {
  text: "Read On",
  lefticon: "",
  righticon: "",
  to: "",
  target: "_self",
  isSolid: false,
  isSecondary: false,
};

const ButtonPill: React.FC<ButtonReadOnProps> = ({
  to,
  text,
  lefticon,
  righticon,
  target,
  isSolid,
  isSecondary,
}: ButtonReadOnProps) => (
  <Button to={to} target={target} isSolid={isSolid} isSecondary={isSecondary}>
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
