import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import classNames from 'classnames';
import "./hamburger.css";

const Nav = styled.nav`
    display: block;
    max-width: 1280px;
    height: 50px;
    margin: 0 auto;
`

const NavGrid = styled.ul`
    float: right;
`

const NavHide = styled.div`
    display: inline-grid;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    grid-auto-flow: row;
    grid-gap: 24px;
    justify-items: center;
    margin: auto;

&.is-active {
    opacity: 1;
    animation: menu-reveal 0.3s ease-in-out;
    @keyframes menu-reveal {
        from {grid-gap: 16px;}
        to {grid-gap: 24px;}
}
} 

@media (min-width: 480px) {
    grid-auto-flow: column;
}
`

const NavShow = styled.div`
    display: block;
    float: right;
`

const NavItem = styled.li`
    display: inline;
`
export default class Navbar extends React.Component {
    state = {
        isActive: false
      };
    
      handleClick = () => {
        this.setState(state => ({ isActive: !state.isActive }));
      };

    render() {
    const menuClass = classNames({
        menu: true,
        'is-active': this.state.isActive
    });


    return (
    <Nav>
        <NavGrid onClick={this.handleClick}>
            <NavHide className={menuClass}>
                <NavItem><Link  to="/blog"><h6>Work</h6></Link></NavItem>
                <NavItem><Link to="/blog"><h6>Blog</h6></Link></NavItem>
                <NavItem><Link to="/blog"><h6>Photography</h6></Link></NavItem>
                <NavItem><Link to="/blog"><h6>Pins</h6></Link></NavItem>
            </NavHide>
                <NavItem >
                    <button class={`hamburger hamburger--collapse ${menuClass}`} type="button">
                        <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </NavItem>
        </NavGrid>
    </Nav>
    )}
}
