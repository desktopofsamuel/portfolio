import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  grid-gap: 16px;
`;

type StackProps = {
  children: object,
  spacing: "string",
};
const Stack = ({ children, spacing }: StackProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Stack;
