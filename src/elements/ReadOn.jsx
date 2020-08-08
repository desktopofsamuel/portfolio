import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GatsbyLink from "../components/common/GatsbyLink";

const Button = styled.div`
  padding: 0.5rem var(--var-padding-s);
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border: 1px var(--color-primary) solid;
  border-radius: 36px;

  p {
    color: var(--color-text);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    font-size: 14px;
    letter-spacing: 0.075rem;
    margin-bottom: 0;
    margin-right: 8px;
  }

  span {
    font-size: 14px;
  }

  & {
    position: relative;
    z-index: 1;
    display: inline-flex;
    transition: var(--transition);
    padding: 16px 24px;
  }

  &:hover::before {
    width: 0;
    transition-duration: 0.15s;
  }
`;

const ReadOn = ({ href, text, target }) => {
  return (
    <GatsbyLink to={href} target={target} className="noeffect">
      <Button>
        <p>{text}</p>
        <span>→</span>
      </Button>
    </GatsbyLink>
  );
};

export default ReadOn;

ReadOn.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"]).isRequired,
};

ReadOn.defaultProps = {
  text: "Read On",
  target: "_self",
};
