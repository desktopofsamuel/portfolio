import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Block = styled.div``;

const Label = styled.p``;

const Number = styled.h5``;

class Data extends React.Component {
  render() {
    const props = this.props;
    return (
      <Block>
        <Label>{props.caption}</Label>
        <Number>{props.nodata}</Number>
      </Block>
    );
  }
}

export default Data;
