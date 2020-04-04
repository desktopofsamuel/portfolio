import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../layout/index.css";
import { FaTwitter, FaInstagram } from "react-icons/fa";

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
`;

const IconWrapper = styled.div`
  bottom: 0;
  display: grid;
  grid-gap: 16px;
  align-content: flex-end;
`;

const Main = styled.div`
  max-width: 85vw;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 95vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavBar = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    padding: 1.5rem 0;
  }
`;

const SiteID = styled.div``;

const Title = styled.h2`
  margin: 0 auto 1.5rem;
  font-size: 1rem;
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

const NavItem = styled.div`
  text-align: right;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        {/* <LeftSidebar>
          <IconWrapper>
            <a
              className="noeffect linkicon"
              href="https://twitter.com/desktopofsamuel"
              target="blank"
            >
              <FaTwitter size="1.25rem" />
            </a>
            <a
              className="noeffect linkicon"
              href="https://instagram.com/desktopofsamuelwong"
              target="blank"
            >
              <FaInstagram size="1.25rem" />
            </a>
          </IconWrapper>
        </LeftSidebar> */}
        <Main>
          <NavBar>
            <SiteID>
              <Title>
                <Link to="/">SAMUEL W.</Link>
              </Title>
              <Description>
                User Experience Designer in Hong Kong <br />
                Reinventing Travel Experience at HyperAir
              </Description>
            </SiteID>
            <NavItem>
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
            </NavItem>
          </NavBar>
        </Main>
      </div>
    );
  }
}
