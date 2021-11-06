import React from "react";
import styled from "styled-components";

const Foreground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  width: 800px;
  height: 800px;
  margin: auto;
  border-radius: 50%;
  background-image: linear-gradient(45deg, #0077cc 20%, #4b4ded);
  opacity: 0.3;
  filter: blur(50px);
`;

const IndexBackground = () => {
  return <Foreground />;
};

export default IndexBackground;
