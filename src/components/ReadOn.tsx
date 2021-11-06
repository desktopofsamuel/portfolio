import React from "react";
import styled from "styled-components";
import GatsbyLink from "./common/GatsbyLink";
import { BodyMain } from "components/common/TextStyles";

type Props = {
  isSecondary: boolean,
};

// prettier-ignore
const Button = styled.div <Props>`

  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border: ${({ isSecondary }) =>
    (isSecondary === true && "none") || "1px var(--color-border) solid"};
  border-radius: 36px;

  ${BodyMain} {
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-bold);
    margin-bottom: 0;
    margin-right: 8px;
    transition: var(--transition);

    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }

  span {
    font-size: var(--font-size-m);
    color: var(--color-text-secondary);
    line-height: 0;
    margin-top: -4px;
    transition: var(--transition);
  }

  & {
    position: relative;
    z-index: 1;
    display: inline-flex;
    transition: var(--transition);
    padding: ${props => (props.isSecondary === true && "none") || "16px 24px"};
  }

  &:hover {
    color: var(--color-primary-500);

    & {
      border-color: var(--color-primary-500);
      
    }

    span {
      color: var(--color-primary-500);
    }

    ${BodyMain} {
      color: var(--color-primary-500);
      margin-right: 12px;
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
      <BodyMain>{text}</BodyMain>
      <span>→</span>
    </Button>
  </GatsbyLink>
);

ReadOn.defaultProps = defaultProps;

export default ReadOn;
