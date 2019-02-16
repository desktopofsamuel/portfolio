import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";

const Main = styled.div`
display: grid;
grid-template-columns: minmax(0,10vw) [content] auto minmax(0,10vw);
margin: 0 auto;
top: 0;
margin: 0 auto;
`


const Content = styled.div`
    grid-area: content;
    height: 100px;
    
    width: 100%;

`

const Title = styled.h5`
float: left;
align-self: baseline;
padding: var(--padding-m) 0;
`

const Contact = styled.button`
    background: none;
    text-align: center;
    box-shadow: none;
    border: none;
    float: right;
    padding: var(--padding-m) var(--padding-s);
    transition: all 0.2s ease-in-out;

    &:hover{
        background: var(--color-black-500);
        color: var(--color-white-500);
    }

    & > a {
        border-bottom: none;
    }
`

export default class Navigation extends React.Component {
    render() {
    return (
        <Main>
            <Content>
            <Title><Link to="/">Samuel W.</Link></Title>
            <Contact><a href="mailto:desktopofsamuel@gmail.com">Contact <FaEnvelope/></a></Contact>
            </Content>
        </Main>
    )}
}