import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../layout/index.css"
import { FaDribbble, FaTwitter, FaInstagram } from "react-icons/fa";

const LeftSidebar = styled.aside`
position: fixed;
height: 100%;
width: 50px;
right: auto;
bottom: 0;
display: flex;
background-color: var(--color-white-700);
z-index: 1000;
padding: 8px;
justify-content: center;

@media only screen and (max-width: 1024px) {
  display: none;
}
`

const IconWrapper = styled.div`
bottom: 0;
display: grid;
grid-gap: 16px;
align-content: flex-end;
`

const Main = styled.div`
  max-width: 85vw;
  padding-left: 50px;
  margin: 0 auto;

@media only screen and (max-width: 1024px) {
  max-width: 95vw;
  padding: 0 1.5rem;
}

@media only screen and (max-width: 768px) {
  padding: 0 1rem;
}
`

const NavBar = styled.div`
padding: 2rem 0;
width: 100%;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 1024px) {
  padding: 1.5rem 0;
}
`

const SiteID = styled.div``

const Title = styled.h2`
font-size: 1rem;
font-family: var(--primary-font);
margin-bottom: 1.5rem;
`

const Description = styled.h2`
color: var(--color-secondary-500);
font-size: 0.95rem;
line-height: 1.5rem;
width: 35ch;
font-weight: 400;
`

const NavItem = styled.div`
text-align: right;

@media only screen and (max-width: 768px) {
  display: none;
}
`


export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <LeftSidebar>
          <IconWrapper>
            <a className="noeffect linkicon" href="https://dribbble.com/desktopofsamuel" target="blank"><FaDribbble size="1.25rem"/></a>
            <a className="noeffect linkicon" href="https://twitter.com/desktopofsamuel" target="blank"><FaTwitter  size="1.25rem"/></a>
            <a className="noeffect linkicon" href="https://instagram.com/desktopofsamuelwong" target="blank"><FaInstagram  size="1.25rem"/></a>
          </IconWrapper>
        </LeftSidebar>
        <Main>
        <NavBar>
        <SiteID><Title><Link to="/">SAMUEL W.</Link></Title><Description>Product Designer based in Hong Kong. Reinventing travel experience at <a ref="https://www.hyperair.com" className="textlink" target="blank"> HyperAir</a>.</Description></SiteID>
        <NavItem>
          <Link to="/about" class="navblock noeffect"><small>About</small></Link>
          <Link to="/blog" class="navblock noeffect"><small>Blog</small></Link>
        </NavItem>
        </NavBar>
        </Main>
        </div>
            );
          }
        }
        