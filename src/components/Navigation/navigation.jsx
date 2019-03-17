import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const Main = styled.div`
  display: grid;
  grid-template-columns: minmax(0,10vw) [content] auto minmax(0,10vw);
  margin: 5vh auto 0 auto;
`;

const Content = styled.div`
  grid-area: content;
  width: 100%;
`;

const Title = styled.div`
  float: left;
  padding: var(--padding-m) 0;
  height: 10vh;
`;

const Contact = styled.button`
  background: none;
  text-align: center;
  box-shadow: none;
  border: none;
  float: right;
  height: 10vh;
  padding: var(--padding-m);
  transition: all 0.2s ease-in-out;
  
  
  .nav {
    color: var(--color-black-500);
  }
  
  &:hover {
    background: var(--color-black-500);

    a {
    color: var(--color-white-500);
    }
  }

  & > a {
    border-bottom: none;
  }

  .with-icon {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1080px) {
    visibility: visible;
    opacity: 1;
  }
`;

const Bar = styled.div`
  padding: var(--padding-m) 0 var(--padding-m) var(--padding-m);
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--padding-l);
  background-color: var(--color-black-500);
  float: right;
  align-items: center;
  justify-content: center;

  a {
    border-bottom: none;
  }

  @media screen and (max-width: 1080px) {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
`

const Separator = styled.div`
  width: 200px;
  height: 1px;
  background-color: var(--color-white-500);
  align-self: center;
  padding-right: 0;
  margin-right: 0;
`

export default class Navigation extends React.Component {
  render() {
    return (
      <Main>
        <Content>
          <Title>
            <h5><Link to="/">Samuel W.</Link></h5>
          </Title>
          {/*<Bar>
            <Link to="/blog"><h5 className="nav">Blog</h5></Link>
            <a href="https://pin.desktopofsamuel.com/"><h5 className="nav">Pins</h5></a>
            <a href="https://photo.desktopofsamuel.com/"><h5 className="nav">Photos</h5></a>
            <a href="mailto:desktopofsamuel@gmail.com" ><h5 className="nav">Contact</h5></a>
            <Separator/>
          </Bar>*/}
          <Contact>
          <a href="mailto:desktopofsamuel@gmail.com" ><h5 className="nav"><FaEnvelope className="with-icon"/>Contact</h5></a>
          </Contact>
        </Content>
      </Main>
    );
  }
}
