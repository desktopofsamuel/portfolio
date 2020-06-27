import React from "react";
import styled from "styled-components";

const Block = styled.div``;

const Label = styled.small`
  margin-bottom: 0;
  color: var(--color-primary-shades-300);
`;

const Number = styled.h5`
  font-size: 24px;
  line-height: 28px;
  margin: 8px 0;
`;

const Data = ({ caption, nodata, data2, data3 }) => {
  return (
    <Block>
      <Label>{caption}</Label>
      <Number>{nodata}</Number>
      <Number>{data2}</Number>
      <Number>{data3}</Number>
    </Block>
  );
};

export default Data;
