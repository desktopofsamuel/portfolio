import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  grid-gap: 16px;
`;

type StackProps = {
  spacing: string,
};

const Stack: React.FC<StackProps> = ({ children, spacing }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Stack;
