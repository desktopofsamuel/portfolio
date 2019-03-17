import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import styled from "styled-components";
import HyperAirSVG from "../../static/SVG/hyperair.svg";
import Button from "../components/Button/button";

const Block = styled.div``

const Row = styled.div`
  margin: 0 auto;
  padding: var(--padding-m) 0;
`

const WorkGrid = styled(Row)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  grid-template-areas:
    "one one two"
    "three three two"
    "four five five";

  @media only screen and (max-width: 1260px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "one"
      "two"
      "three"
      "four"
      "five";
  }
`;

const WorkBlock = styled.div`
  overflow: hidden;
  background: #fff;
  color: var(--color--black-500);
  display: grid;
  padding: var(--padding-m);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .graphics {
    z-index: 2;
    position: relative;
    max-height: 300px;
    text-align: center;
  }

  &:nth-child(1) {
    grid-area: one;
  }

  &:nth-child(2) {
    grid-area: two;
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
    @media only screen and (max-width: 768px) {
      grid-template-rows: none;
    }
  }

  &:nth-child(3) {
    grid-area: three;
    
  }

  &:nth-child(4) {
    grid-area: four;
  }

  &:nth-child(5) {
    grid-area: five;
  }
`;

const WorkPhoto = styled.div`
  align-self: center;
  text-align: center;
`;

const WorkText = styled.div``;

class OldIndexPage extends Component {
  render() {
    return (
      <Layout>
         <Row className="Work">
            <Block className="work-title">
              <h4>#03</h4>
              <h1>Work</h1>
              <p>Projects that I am working on and initiated in the past.</p>
            </Block>
            <WorkGrid className="three-row">
              <WorkBlock>
                <WorkPhoto>
                  <img width="80%" src={HyperAirSVG} className="graphics" />
                </WorkPhoto>
                <WorkText>
                  <h3>HyperAir Travel</h3>
                  <h5>UI/UX Design, Brand Design</h5>
                  <p>
                    Pingspace checks your site uptime every minute with real
                    user monitoring and let you know when your sites are down.
                  </p>
                  <Button href="/work/hyperair" text="Learn More" />
                </WorkText>
              </WorkBlock>
              <WorkBlock>
                <WorkPhoto>
                  <img
                    width="80%"
                    src={HyperAirSVG}
                    className="graphics reverse"
                  />
                </WorkPhoto>
                <WorkText>
                  <h3>Water For Free</h3>
                  <h5>Hong Kong Water Dispenser Map</h5>
                  <p>
                    I have designed the revamped crowd-source water dispenser map in Hong Kong and Macau that reduces plastic bottle usage. 
                  </p>
                  <Button href="/work/water-for-free" text="Learn More" />
                </WorkText>
              </WorkBlock>
              <WorkBlock>
                <WorkPhoto>
                  <img width="80%" src={HyperAirSVG} className="graphics" />
                </WorkPhoto>
                <WorkText className="reverse"> 
                  <h3>Pingspace.io</h3>
                  <h5>Cost-effective website uptime monitor</h5>
                  <p>
                    Pingspace checks your site uptime every minute with real
                    user monitoring and let you know when your sites are down.
                  </p>
                  <Button href="/grid" text="Learn More" />
                </WorkText>
              </WorkBlock>
            </WorkGrid>
            </Row>
      </Layout>
    );
  }
}

export default OldIndexPage;
