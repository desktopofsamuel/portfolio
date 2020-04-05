import React, { Component } from "react";
import Link from "../GatsbyLink/GatsbyLink";
import styled from "styled-components";
import "../../layout/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

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

const NavBar = styled.div`
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
  padding: 1rem 5rem;
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

class Navigation3 extends React.Component {
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
          <NavBar>
            <NavLeft>
              <Title to="/">Samuel W.</Title>
              <Description>User Experience Designer</Description>
            </NavLeft>
            <NavRight>
              <NavItem
                activeClassName="nav-item-active"
                className="nav-icon-desktop"
                to="/about"
              >
                <small>About</small>
              </NavItem>
              <NavItem activeClassName="nav-item-active" to="/work">
                <small>Work</small>
              </NavItem>
              <NavItem activeClassName="nav-item-active" to="/blog">
                <small>Blog</small>
              </NavItem>
              <NavItem activeClassName="nav-item-active" to="/photo">
                <small>Photo</small>
              </NavItem>
              <NavItemIcon onClick={this.openModal}>
                <MenuIcon icon={faBars} size="lg" />
              </NavItemIcon>
            </NavRight>
          </NavBar>
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
              zIndex: "10000"
            }}
            overlayStyle={{}}
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div>
              <div>
                <MobileNav>
                  <MobileItem to="/about">
                    <small>About</small>
                  </MobileItem>
                  <MobileItem to="/work">
                    <small>Work</small>
                  </MobileItem>
                  <MobileItem to="/blog">
                    <small>Blog</small>
                  </MobileItem>
                  <MobileItem to="/photo">
                    <small>Photo</small>
                  </MobileItem>
                  <MobileItem>
                    <MenuIcon
                      icon={faTimes}
                      size="lg"
                      onClick={this.closeModal}
                    />
                  </MobileItem>
                </MobileNav>
              </div>
            </div>
          </Popup>
        </Main>
      </div>
    );
  }
}

export default Navigation3;
