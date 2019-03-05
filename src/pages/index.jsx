import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import { graphql } from "gatsby";
import Layout from "../layout/";
import PostListing from "../components/PostListing/PostListing";
import Button from "../components/Button/button";
import { FaApple } from "react-icons/fa";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import "./index.css";
import HyperAirSVG from "../../static/SVG/hyperair.svg"
import Circle from "../../static/SVG/circle.svg"

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-family: var(--secondary-font);
  font-weight: 500;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));

    & > * {
        grid-column: col-start / span 12;
    }
    
`
const Container = styled.main`

    .hero { 
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
        'intro'
        'timeline';

        @media only screen and (max-width: 768px) {
            display: block;
        }
    }

    .work-title {
        border: 1px solid var(--color-black-500);
        padding: var(--padding-m) 0;
        text-align: center;

        h1 {
            margin-bottom: 0;
        }
    }

`

const Black = styled.div`
    background: #000;

    &.one {
      grid-column: 3 / 4;
      grid-row: 2 / 8;
    }

    &.two {
      grid-column: 18 / 34;
      grid-row: 3 / 5;
    }

    &.three {
      grid-column: 1 / 2;
      grid-row: 12 / 18;
    }
`

const Row = styled.div`
    margin: 0 auto;
    display: grid;
    padding: var(--padding-m) 0;

    &.blog {
        grid-column: 4 / span 8;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 24px;
    }
`

const WorkGrid = styled(Row)`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 24px;
grid-template-areas: 
'one one two'
'three three two'
'four five five';


@media only screen and (max-width: 1260px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
'one'
'two'
'three'
'four'
'five';
}`

const PrettyTabs = styled(Tab)`
display: grid;
grid-template-columns: 1fr 2fr;
`


const WorkBlock = styled.div`
    overflow: hidden;
    background: #fff;
    color: var(--color--black-500);
    display: grid;
    padding: var(--padding-m);

    .graphics {
        z-index: 2;
        position: relative;
        width: 80%;
        max-height: 300px;
      }

    &:nth-child(1) {
        grid-area: one;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &:nth-child(2) {
        grid-area: two;
        grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-columns:  none;
      @media only screen and (max-width: 1256px) {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-template-rows: none;
      }

   
    }

    &:nth-child(3) {
        grid-area: three;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    &:nth-child(4) {
        grid-area: four;
    }

    &:nth-child(5) {
        grid-area: five;
    }
`

const Block = styled.div`
    &.intro {
        grid-area: intro;
    }

    &.timeline {
        grid-area: timeline;
        margin: 0 auto;
        padding: var(--padding-m) 0;
    }
`

const BlogIntro = styled.div`
 background: #000;
    padding: var(--padding-m);
    color: var(--color-background-500);
    h3 { 
      margin: 0;
    }

    h1 {
      margin: 1rem 0;
    }
`

const Intro = styled.p`
  font-size: 2rem;
  line-height: 150%;

`

const WorkPhoto = styled.div`
align-self: center;
text-align: center;
`

const WorkText = styled.div`
`
class Post extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
            <Grid>
                <Black className="one" />
                <Black className="two" />
                <Black className="three" />
                <Container>
                <Row className="hero">
                    <Block className="intro">
                        <h3>#01</h3>
                        <h1>Hello!</h1>
                        <Subtitle>My name is Samuel. I'm a Product Designer currently based in Hong Kong</Subtitle>
                    </Block>
                    <Block className="timeline">
                        <h4>Timeline</h4>
                        <Tabs defaultTab="vertical-tab-one" vertical className="tab">
                          <TabList>
                            <Tab className="tablistitem" tabFor="vertical-tab-one"><h3>Apple Inc.</h3></Tab>
                            <Tab className="tablistitem"tabFor="vertical-tab-two"><h3>Playa</h3></Tab>
                            <Tab className="tablistitem "tabFor="vertical-tab-three"><h3>HyperAir</h3></Tab>
                          </TabList>
                          <TabPanel tabId="vertical-tab-one">
                            <h4><FaApple/>Apple Inc.</h4>
                            <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college. I assist in the daily operation for iTunes Movies, Music Store and App Store. </p>
                          </TabPanel>
                          <TabPanel tabId="vertical-tab-two">
                          <h4>Playa</h4>
                        <p>I started my agency Playa in 2015, hoping to help small entrepreneurs and non-profits launching their projects, bridging the gap between project owners and end-users. </p>
                          </TabPanel>
                          <TabPanel tabId="vertical-tab-three">
                          <h4>HyperAir</h4>
                        <p>I'm working in HyperAir as a Principal Designer</p>
                          </TabPanel>
                        </Tabs>

                    </Block>
                </Row>
                <Row className="blog">
                <BlogIntro>
                    <h3>#02</h3>
                    <h1>Blog</h1>
                    <p>I write about design, technology and productivity.</p>
                </BlogIntro>
                <PostListing postEdges={postEdges}/>
                </Row>
                <Row className="work-title">
                    <h4>#03</h4>
                    <h1>Work</h1>
                    <p>Projects that I am working on and initiated in the past.</p>
                </Row>
                <WorkGrid className="three-row">
                <WorkBlock>
                    <WorkPhoto><img width="80%" src={HyperAirSVG} className="graphics"/></WorkPhoto>
                    <WorkText>
                    <h5>UI/UX Design, Brand Design</h5>
                    <h3>HyperAir Travel</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <Button href="/grid" text="Learn More" />
                    </WorkText>
                </WorkBlock>
                <WorkBlock>
                  <WorkPhoto><img width="80%" src={HyperAirSVG} className="graphics reverse"/></WorkPhoto>
                    <WorkText>
                    <h5>UI/UX Design</h5>
                    <h3>Water For Free</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <Button href="/grid" text="Learn More" />
                    </WorkText>
                </WorkBlock>
                <WorkBlock>
                  <WorkPhoto><img width="80%" src={HyperAirSVG} className="graphics"/></WorkPhoto>
                  <WorkText className="reverse">
                    <h5>UI/UX Design, Brand Design</h5>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <Button href="/grid" text="Learn More" />
                    </WorkText>
                    
                </WorkBlock>
            </WorkGrid>
            </Container>
            </Grid> 
        </Layout>
            );
        }
    }
      
      
      export default Post;
      
      /* eslint no-undef: "off" */
      export const pageQuery = graphql`
        query LabQuery {
          allMarkdownRemark(
            limit: 3
            sort: { fields: [fields___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                  date
                }
                excerpt(pruneLength: 200)
                timeToRead
                frontmatter {
                  title
                  path
                  tags
                  cover {
                    publicURL
                    size
                    childImageSharp {
                      sizes(maxWidth: 1140) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                    }
                  }
                }
                  date
                }
              }
            }
          }
        }
      `;
      