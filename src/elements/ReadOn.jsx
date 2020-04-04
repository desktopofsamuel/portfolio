import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = styled(Link)`
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

class ReadOn extends React.Component {
  render() {
    const props = this.props;
    return (
      <Button to={props.href}>
        <h5>{props.text}</h5>
      </Button>
    );
  }
}
export default ReadOn;

ReadOn.defaultProps = {
  text: "Read On →"
};
