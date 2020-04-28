import React, { Component } from "react";
import Link from "./GatsbyLink";
import styled from "styled-components";
import "../../layout/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import FadeIn from "react-fade-in";

const Main = styled.div`
  background: var(--color-white-500);
  width: 100%;
  height: 100%;
  padding: 0 var(--var-padding-s);
  border-top: 3px var(--color-palette-500) solid;

  @media only screen and (max-width: 768px) {
    background: var(--color-background-500);
    padding: 0 1rem;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const NavLeft = styled.div`
  display: inline-flex;
  align-items: baseline;

  a {
    margin-right: 1rem;
  }
`;

const NavRight = styled.div`
  margin-left: auto;
  display: inline-flex;
`;

const NavItem = styled(Link)`
  padding: 0.5rem 1rem;
  border-bottom: none;

  &:hover {
    background: var(--color-white-700);
  }
  &:active {
    background: var(--color-background-500);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItemIcon = styled(NavItem)`
  @media only screen and (max-width: 768px) {
    display: block;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  border-bottom: none;
  color: var(--secondary-700);
`;

const MobileItem = styled(Link)`
  display: block;
  border-bottom: none;
  margin: 0;

  h1 {
    margin: 2rem 0;
  }
`;

const MobileNav = styled.div`
  text-align: center;
`;

const Title = styled(Link)`
  margin: 0 auto;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-primary);
  border-bottom: none;
`;

const Description = styled.h2`
  margin: 0 auto;
  font-weight: var(--font-weight-regular);
  font-family: var(--font-primary);
  font-size: 0.85rem;
  line-height: 1.5rem;
  max-width: 35ch;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Main>
          <NavSection>
            <NavLeft>
              <Title to="/" className="noeffect">
                Samuel W.
              </Title>
              <Description>User Experience Designer</Description>
            </NavLeft>
            <NavRight>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/about"
              >
                <small>About</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/work"
              >
                <small>Work</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/blog"
              >
                <small>Blog</small>
              </NavItem>
              <NavItem
                activeClassName="nav-item-active"
                className="noeffect"
                to="/photo"
              >
                <small>Photo</small>
              </NavItem>
              <NavItemIcon onClick={this.openModal} className="noeffect">
                <MenuIcon icon={faBars} size="lg" />
              </NavItemIcon>
            </NavRight>
          </NavSection>
          <Popup
            lockScroll
            contentStyle={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              background: "rgba(255,255,255,0.95)",
              zIndex: "10000",
            }}
            overlayStyle={{}}
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div>
              <div>
                <MobileNav>
                  <FadeIn>
                    <MobileItem to="/about" className="noeffect">
                      <h1>About</h1>
                    </MobileItem>
                    <MobileItem to="/work" className="noeffect">
                      <h1>Work</h1>
                    </MobileItem>
                    <MobileItem to="/blog" className="noeffect">
                      <h1>Blog</h1>
                    </MobileItem>
                    <MobileItem to="/photo" className="noeffect">
                      <h1>Photo</h1>
                    </MobileItem>
                    <MobileItem className="noeffect">
                      <MenuIcon
                        icon={faTimes}
                        size="lg"
                        onClick={this.closeModal}
                      />
                    </MobileItem>
                  </FadeIn>
                </MobileNav>
              </div>
            </div>
          </Popup>
        </Main>
      </div>
    );
  }
}

export default NavBar;
