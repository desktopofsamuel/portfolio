import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
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

class Alert extends React.Component {
  render() {
    const props = this.props;
    return (
      <Wrapper>
        <GatsbyLink to={props.href}>
          <Text className="noeffect">{props.text}</Text>
        </GatsbyLink>
      </Wrapper>
    );
  }
}

export default Alert;
