import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = styled(Link)`
  margin: 0;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.075em;
  cursor: pointer;
  display: inline;
  border-bottom: none;
  justify-self: flex-end;
`;

function ReadOn(props) {
  return (
    <Button to={props.href}>
      <p>{props.text}</p>
    </Button>
  );
}

export default ReadOn;

ReadOn.defaultProps = {
  text: "Read On →"
};
