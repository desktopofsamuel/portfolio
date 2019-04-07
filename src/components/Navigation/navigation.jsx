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
display: grid;
grid-template-columns: minmax(auto,5%) [content] auto minmax(auto,5%);
`

const NavBar = styled.div`
padding: 2rem 0;
margin-left: 50px;
grid-area: content;

@media only screen and (max-width: 1024px) {
  margin-left: 0px;
  padding: 1.5rem 0;
}
`

const SiteTitle = styled.h3 `
font-family: var(--primary-font);

`

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <LeftSidebar>
          <IconWrapper>
            <a class="noeffect linkicon" href="https://dribbble.com/desktopofsamuel" target="blank"><FaDribbble size="1.25rem"/></a>
            <a class="noeffect linkicon" href="https://twitter.com/desktopofsamuel" target="blank"><FaTwitter  size="1.25rem"/></a>
            <a class="noeffect linkicon" href="https://instagram.com/desktopofsamuelwong" target="blank"><FaInstagram  size="1.25rem"/></a>
          </IconWrapper>
        </LeftSidebar>
        <Main>
        <NavBar>
        <SiteTitle><Link to="/">Samuel Wong</Link> - Product Designer</SiteTitle>
        </NavBar>
        </Main>
        </div>
            );
          }
        }
        