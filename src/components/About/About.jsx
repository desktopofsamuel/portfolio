import React, { Component } from "react";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Profile from "../../../static/Profile.webp"

const Content = styled.main`
  max-width: 60vw;
  margin: 5vh auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;

  @media only screen and (max-width: 1024px) {
    display: block;
    max-width: 100vw;
  }

  .profile {
    position: sticky;
    margin-bottom: var(--padding-s);
  }
`

const Intro = styled.div`
`

class About extends Component {
  render() {
    return (
        <Content>        
          <div><img className="profile" src={Profile} width="100%" alt="Samuel W. Profile Photo"></img></div>
          <Intro className="textbig">
            <p> Hello! My name is Samuel. I'm a product designer who visions design as a mean to cross the barriers between sectors, by making technology more accessible. I craft wireframes and prototypes and execute stunning visuals and user interfaces.</p>
            <p>I started my agency <a ref="www.playa.hk">Playa</a> in 2015, hoping to help small entrepreneurs and non-profits launching their projects, bridging the gap between project owners and end-users. </p>
            <p>I launched <a href="https://pin.desktopofsamuel.com" target="blank">Pin</a> in 2018 to collect essential design tools to help designer to step up their game.</p>
            <p>I am constantly learning and treasure every opportunity to design better. I’m learning to code right now and this personal site site is my first attempt.</p>
          </Intro>
      </Content>
    );
  }
}

export default About;
