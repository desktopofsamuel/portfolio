import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import GatsbyLink from "./common/GatsbyLink";

const Wrapper = styled.div`
  background-color: var(--color-white-light-300);
  padding: 10px 25px;
  border-left: 4px solid var(--color-primary-light-700);
  box-shadow: none;
  border-radius: 8px;
  margin-bottom: 5vh;
  cursor: pointer;
  transition: background-color ease-in-out 0.2s;
`;

const Text = styled.p`
  color: var(--color-text);
  text-decoration: none;
  margin-bottom: 0;
`;

const Alert = ({ to, children }) => {
  return (
    <GatsbyLink to={to}>
      <Wrapper>{children}</Wrapper>
    </GatsbyLink>
  );
};

export default Alert;

Alert.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
