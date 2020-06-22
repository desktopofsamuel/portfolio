import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Text = styled.small`
  color: ${props => props.textColor || "white"};
  text-decoration: none;
  margin-bottom: 0;
`;

const Wrapper = styled.button`
  background-color: ${props => props.bgColor || "var(--color-white-500"};
  padding: 10px 25px;
  border: 1px var(--color-primary) solid;
  box-shadow: none;
  margin-bottom: 5vh;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background-color: blueviolet;
  }
`;

export default props => (
  <Link to={props.href}>
    <Wrapper
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.textColor}`,
        borderColor: `${props.borderColor}`,
      }}
    >
      <Text style={{ color: `${props.textColor}` }}>{props.text}</Text>
    </Wrapper>
  </Link>
);
