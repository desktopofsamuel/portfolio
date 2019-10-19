import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Block = styled.div``;

const Label = styled.p``;

const Data = styled.h5``;

export default props => (
  <Block>
    <Label>{props.caption}</Label>
    <Data>{props.data}</Data>
  </Block>
);
