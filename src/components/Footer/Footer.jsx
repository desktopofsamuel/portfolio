import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.footer`
display: grid;
grid-auto-flow: column;
grid-gap: var(--padding-s);
align-items: center;
justify-content: center;
min-height: 20vh;
`

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Link to="/blog">Blog</Link>
        <a href="https://pin.desktopofsamuel.com">Pin</a>
        <a href="https://photo.desktopofsamuel.com">Photo</a>
      </Container>
    );
  }
}