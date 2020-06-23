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

  h6 {
    color: var(--color-text);
    font-weight: var(--font-weight-bold);
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
    padding-left: 10px;
    padding-bottom: 5px;
    padding-right: 10px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      var(--color-primary-highlight) 25%,
      rgba(0, 0, 0, 0) 40%
    );
    transition: width 0.1s ease-out;
    position: absolute;
    left: 0;
    bottom: 2px;
    z-index: -1;

    will-change: width;
    transform: rotate(-2deg);
    transform-origin: left bottom;
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
        <h6>{text}</h6>
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
