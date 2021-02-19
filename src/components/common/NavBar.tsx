import React, { useState } from "react";
import styled from "styled-components";
import "../../layout/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import FadeIn from "react-fade-in";
import Link from "components/common/GatsbyLink";

const Container = styled.div`
  width: 100%;
  min-height: 48px;
  position: relative;
  max-width: var(--page-container-m);
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px var(--color-border) solid;
  }
`;

const SiteID = styled.div``;

const Title = styled(Link)`
  color: var(--color-title);
  margin: 0 auto;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-primary);
  border-bottom: none;
`;

const Navigation = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    grid-gap: 36px;
  }
`;

const NavItem = styled(Link)`
  font-family: var(--font-primary);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
  height: 48px;
  color: var(--color-text-secondary);
  transition: var(--transition);
  display: grid;
  place-content: center;
  transition: var(--transition);

  & :hover {
    color: var(--color-text);
  }
`;

const NavItemIcon = styled.div`
  display: block;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: grid;
  place-content: center;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  border-bottom: none;
  color: var(--secondary-700);
  max-width: 16px;
  max-height: 16px;
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

const NewNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <SiteID>
        <Title to="/" className="noeffect">
          Samuel Wong
        </Title>
      </SiteID>
      <Navigation>
        <NavItem
          activeClassName="nav-item-active"
          className="noeffect"
          to="/about"
        >
          About
        </NavItem>
        <NavItem
          activeClassName="nav-item-active"
          className="noeffect"
          to="/work"
        >
          Work
        </NavItem>
        <NavItem
          activeClassName="nav-item-active"
          className="noeffect"
          to="/blog"
        >
          Blog
        </NavItem>
        <NavItem
          activeClassName="nav-item-active"
          className="noeffect"
          to="/photo"
        >
          Photo
        </NavItem>
      </Navigation>
      <NavItemIcon onClick={setOpen} className="noeffect">
        <MenuIcon icon={faBars} size="lg" />
      </NavItemIcon>
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
        open={open}
        closeOnDocumentClick
        onClose={() => setOpen(false)}
      >
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
                size="4x"
                onClick={() => setOpen(false)}
              />
            </MobileItem>
          </FadeIn>
        </MobileNav>
      </Popup>
    </Container>
  );
};

export default NewNavBar;
