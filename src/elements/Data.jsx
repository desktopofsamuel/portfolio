import React from "react";
import styled from "styled-components";

const Block = styled.div``;

const Label = styled.p`
  text-transform: uppercase;
  letter-spacing: 5%;
  font-size: 12px;
  margin-bottom: 0;
`;

const Number = styled.h5`
  font-size: 24px;
`;

const Data = ({ caption, nodata }) => {
  return (
    <Block>
      <Label>{caption}</Label>
      <Number>{nodata}</Number>
    </Block>
  );
};

export default Data;
