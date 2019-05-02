import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Main = styled.footer`
min-height: 30vh;
display: grid;
display: grid;
  grid-template-columns: minmax(0.5vw,10vw) [content] auto minmax(0.5vw,10vw);
  margin: 0 auto;
`

const Container = styled.div`
grid-area: content;
display: block;
text-align: left;
`


export default class Footer extends React.Component {
  render() {
    return (
      <Main>
        <Container>
          <a href="/rss.xml" className="subheading textlink rightspace">RSS</a>
          <Link className="subheading textlink rightspace" to="/about">About</Link>
          <Link className="subheading textlink rightspace" to="/blog">Blog</Link>
          <a href="https://pin.desktopofsamuel.com" className="subheading textlink rightspace">Pin</a>
          <a href="https://photo.desktopofsamuel.com" className="subheading textlink rightspace">Photo</a>
          {/*<Link className="subheading textlink rightspace" to="/gear">My Gear</Link>*/}
        </Container>
      </Main>
    );
  }
}