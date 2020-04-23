import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import GatsbyLink from "../components/common/GatsbyLink";

const Wrapper = styled.div`
  background-color: var(--color-white-500);
  padding: 10px 25px;
  border-left: 3px var(--color-brand-500) solid;
  box-shadow: none;
  margin-bottom: 5vh;
  cursor: pointer;
  transition: background-color ease-in-out 0.2s;
`;

const Text = styled.p`
  color: white
  text-decoration: none;
  margin-bottom: 0;
`;

const Alert = ({ href, text }) => {
  return (
    <Wrapper>
      <GatsbyLink to={href}>
        <Text className="noeffect">{text}</Text>
      </GatsbyLink>
    </Wrapper>
  );
};

export default Alert;

Alert.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
