import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GatsbyLink from "../components/common/GatsbyLink";

const Button = styled(GatsbyLink)`
  margin: 0;
  background: none;
  border: none;
  text-transform: uppercase;
  color: var(--color-secondary-500);
  font-size: 0.85rem;
  letter-spacing: 0.075rem;
  cursor: pointer;
  display: inline;
  border-bottom: none;
  justify-self: flex-end;

  h5 {
    font-family: var(--font-primary);
  }
`;

const ReadOn = ({ href, text }) => {
  return (
    <Button to={href} className="noeffect">
      <h5>{text}</h5>
    </Button>
  );
};

export default ReadOn;

ReadOn.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ReadOn.defaultProps = {
  text: "Read On →",
};
