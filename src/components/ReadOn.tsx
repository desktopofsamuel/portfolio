import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";
import { SmallText } from "components/common/TextStyles";

type Props = {
  isSecondary: boolean,
};

// prettier-ignore
const Button = styled.div <Props>`
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border: ${({ isSecondary }) =>
    (isSecondary === true && "none") || "1px var(--color-border) solid"};
  border-radius: 36px;

  p {
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-bold);
    margin-bottom: 0;
    margin-right: 8px;
    transition: var(--transition);

    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    &:hover {
      color: var(--color-text);
    }
  }

  span {
    font-size: var(--font-size-m);
    line-height: 0;
    margin-top: -4px;
  }

  & {
    position: relative;
    z-index: 1;
    display: inline-flex;
    transition: var(--transition);
    padding: ${props => (props.isSecondary === true && "none") || "16px 24px"};
  }

  &:hover {
    & {
      border-color: var(--color-secondary-light-300);
    }

    p {
      margin-right: 16px;
    }
  }
`;

type ButtonReadOnProps = {
  href: string,
  text: string,
  target: "_blank" | "_self",
  isSecondary: boolean,
};

const defaultProps: ButtonReadOnProps = {
  text: "Read On",
  target: "_self",
  href: "",
  isSecondary: false,
};

const ReadOn: React.FC<ButtonReadOnProps> = ({
  href,
  text,
  target,
  isSecondary,
}: ButtonReadOnProps) => (
  <GatsbyLink to={href} target={target} className="noeffect">
    <Button isSecondary={isSecondary}>
      <SmallText>{text}</SmallText>
      <span>→</span>
    </Button>
  </GatsbyLink>
);

ReadOn.defaultProps = defaultProps;

export default ReadOn;
