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

@media only screen and (max-width: 768px) {
  display: none;
}
`

const IconWrapper = styled.div`
bottom: 0;
display: grid;
grid-gap: 16px;
align-content: flex-end;
`

const NavBar = styled.div`
margin-left: 50px;
padding: var(--padding-m);

@media only screen and (max-width: 768px) {
  margin-left: 0px;
}
`

const SiteTitle = styled.h2 `
font-family: var(--primary-font);
font-weight: 700;

`

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <LeftSidebar>
          <IconWrapper>
            <a class="noeffect linkicon" href="/"><FaDribbble size="1.25rem"/></a>
            <a class="noeffect linkicon" href="/"><FaTwitter  size="1.25rem"/></a>
            <a class="noeffect linkicon" href="/"><FaInstagram  size="1.25rem"/></a>
          </IconWrapper>
        </LeftSidebar>
        <NavBar>
        <SiteTitle><Link to="/">Samuel Wong</Link> - Product Designer</SiteTitle>
        </NavBar>
        </div>
            );
          }
        }
        