import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../layout/index.css";

const Main = styled.div``;

const NavBar = styled.div``;

const NavLeft = styled.div``;

const NavRight = styled.div``;

const Title = styled.h2`
  margin: 0 auto 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-secondary);
`;

const Description = styled.h2`
  margin-top: 0;
  font-family: var(--font-secondary);
  color: var(--color-secondary-500);
  font-size: 0.95rem;
  line-height: 1.5rem;
  max-width: 35ch;
  font-weight: 400;
`;

export default class Navigation3 extends React.Component {
  render() {
    return (
      <div>
        <Main>
          <NavBar>
            <NavLeft>
              <Title>
                <Link to="/">SAMUEL W.</Link>
              </Title>
              <Description>
                User Experience Designer in Hong Kong <br />
                Reinventing Travel Experience at HyperAir
              </Description>
            </NavLeft>
            <NavRight>
              <Link to="/about" class="navblock noeffect">
                <small>About</small>
              </Link>
              <Link to="/work" class="navblock noeffect">
                <small>Work</small>
              </Link>
              <Link to="/blog" class="navblock noeffect">
                <small>Blog</small>
              </Link>
              <Link to="/photo" class="navblock noeffect">
                <small>Photo</small>
              </Link>
            </NavRight>
          </NavBar>
        </Main>
      </div>
    );
  }
}
