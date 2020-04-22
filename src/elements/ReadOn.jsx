import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GatsbyLink from "../components/common/GatsbyLink";

const Button = styled.div`
  border: 1px var(--color-secondary-500) solid;
  padding: 0.5rem var(--var-padding-s);
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);

  h6 {
    color: var(--color-secondary-500);
    font-weight: var(--font-weight-regular);
    margin-bottom: 0;
    margin-right: 8px;
  }

  span {
    font-size: 14px;
  }

  &:hover {
    background: var(--color-secondary-500);

    & > * {
      color: var(--color-white-500);
    }
  }
`;

const ReadOn = ({ href, text }) => {
  return (
    <GatsbyLink to={href} className="noeffect">
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
};

ReadOn.defaultProps = {
  text: "Read On",
};
