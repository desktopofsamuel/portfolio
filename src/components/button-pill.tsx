import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-700);
  text-transform: unset;
  letter-spacing: 0;
  display: flex;
  grid-gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  p {
    margin: 0;
  }

  & > * {
    line-height: 0;
  }

  &:hover {
    background-color: var(--color-primary-500);
    color: var(--color-white-300);
  }

  &:active {
    outline: none;
  }
`;

type ButtonReadOnProps = {
  href: string,
  text: string,
  lefticon?: string,
  righticon?: string,
};

const defaultProps: ButtonReadOnProps = {
  text: "Read On",
  lefticon: "",
  righticon: "",
  href: "",
};

const ButtonPill: React.FC<ButtonReadOnProps> = ({
  href,
  text,
  lefticon,
  righticon,
}: ButtonReadOnProps) => (
  <Button>
    <FontAwesomeIcon icon={lefticon} title={text} />
    <p>{text}</p>
    <FontAwesomeIcon icon={righticon} title={text} />
  </Button>
);

ButtonPill.defaultProps = defaultProps;

export default ButtonPill;
