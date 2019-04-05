import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"


const Wrapper = styled.div`
display: grid;
grid-template-columns: 30% 70%;
border-bottom: 1px solid #f7f7f7 ;
margin: var(--padding-m) 0;
align-items: center;
grid-gap: 2rem;

@media only screen and (max-width: 768px) {
  display: block;
  text-align: center;
}
`

const Graphics = styled.div`
padding: var(--padding-m);
width: 100%;
max-width: 400px;
margin: 0 auto;

@media only screen and (max-width: 768px) {
  padding: var(--padding-m);
}
`

const Main = styled.main`
`

const Title = styled.h3`
margin: 0;
`

const Subtitle = styled.small``

const Content = styled.p``

export default props => 
<Wrapper>
<Graphics><Img fluid={props.image} /></Graphics>
<Main>
  <Title>{props.title}</Title>
  <Subtitle>{props.subtitle}</Subtitle>
  <Content>{props.content}</Content>
</Main>
</Wrapper>