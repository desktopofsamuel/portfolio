import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../layout/";
import PostListing from "../components/PostListing/PostListing";
import Button from "../components/Button/button";
import "./index.css";
import HyperAirSVG from "../../static/SVG/hyperair.svg";
import Now from "../components/Now/Now"
import Footer from "../components/Footer/Footer"

const Subtitle = styled.h2`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));

  & > * {
    grid-column: col-start / span 12;
  }
`;
const Container = styled.main`
  .hero {
    display: grid;
    height: 50vh;
    position: relative;
    width: minmax( auto,64ch);
  }

  .work-title {
    border: 1px solid var(--color-black-500);
    padding: var(--padding-m) 0;
    text-align: center;

    h1 {
      margin-bottom: 0;
    }
  }
`;

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
`;

const Row = styled.div`
  margin: 0 auto;
  display: grid;
  padding: var(--padding-m) 0;

  &.blog {
    grid-column: 4 / span 8;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: var(--padding-s);
  }
`;

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .graphics {
    z-index: 2;
    position: relative;
    max-height: 300px;
    text-align: center;
  }

  &:nth-child(1) {
    grid-area: one;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  &:nth-child(2) {
    grid-area: two;
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: none;
    @media only screen and (max-width: 1256px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const Block = styled.div`
  &.intro {
    align-self: center;
    justify-self: flex-start;
  }
`;

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
`;

const Intro = styled.p`
  font-size: 2rem;
  line-height: 150%;
`;

const WorkPhoto = styled.div`
  align-self: center;
  text-align: center;
`;

const WorkText = styled.div``;
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
                <Subtitle>
                  My name is Samuel. I'm a Product Designer currently based in
                  Hong Kong
                </Subtitle>
              </Block>
            </Row>
            <Row className="blog">
              <BlogIntro>
                <h3>#02</h3>
                <h1>Blog</h1>
                <p>I write about design, technology and productivity.</p>
              </BlogIntro>
              <PostListing postEdges={postEdges} />
            </Row>
            <Row className="work-title">
              <h4>#03</h4>
              <h1>Work</h1>
              <p>Projects that I am working on and initiated in the past.</p>
            </Row>
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
                  <Button href="/grid" text="Learn More" />
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
                  <Button href="/grid" text="Learn More" />
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
            <Now className="full-width"/>
            <Footer></Footer>
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
