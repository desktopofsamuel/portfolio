import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import { graphql } from "gatsby";
import Layout from "../layout/";
import PostListing from "../components/PostListing/PostListing";

const Grid = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-gap: 24px;
`

const Container = styled.div`
    margin: 0 auto;
    grid-area: 8 / 8 / span 23 / span 23;
`

const Row = styled.div`
    display: grid;
    padding: var(--padding-m) 0;
    grid-template-columns: repeat(23, 1fr);
    grid-template-rows: 1fr;

    &.two-row {
        grid-template-rows: repeat(2, 1fr);
    }

    &.three-row {
        grid-template-rows: repeat(3, 1fr);
    }

    &.blog {
    }
`

const Block = styled.div`
    &.intro {
        grid-column: 1 / 16;
        grid-row: 1 / 4 ;
    }

    &.timeline {
        grid-column: 17 / 24;
        grid-row: 2 / 4 ;
    }

    &.work-title {
        border: 1px solid var(--color-black-500);
        grid-column: 1 / 24;
        grid-row: 1 / 2;
        padding: var(--padding-s) 0;
        margin-bottom: 0;
        text-align: center;
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

const BlogBlock = styled.div`
    background: #000;
    padding: var(--padding-m);
    color: var(--color-background-500);
    grid-template-rows: 1fr;
    min-height: 400px;
    grid-area: 1 / span 3;
`
const WorkGrid = styled(Row)`
display: grid;
grid-gap: var(--padding-m);
grid-template-area: 
' one one two'
'one one two'
'three four four';

`

const WorkBlock = styled.div`
    
    background: #fff;
    color: var(--color--black-500);
    padding: var(--padding-m);


    &:nth-child(1) {
        grid-area: one;
    }

    &:nth-child(2) {
        grid-area: two;
    }

    &:nth-child(3) {
        grid-area: three;
    }

    &:nth-child(4) {
        grid-area: four;
    }

    &:nth-child(5) {
        grid-column: 9 / 24;
    }
`


class Index extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
            <Grid>
            <Black className="one" />
            <Black className="two" />
            <Black className="three" />
            <Container>
            <Row className="three-row">
                <Block className="intro">
                  <h3>#01</h3>
                  <h1>Hi, I', Samuel!</h1>
                  <h3>I’m a Product Designer.</h3>
                  <p> I deliver web / app projects in Playa, a web / app agency that I've co-founded. Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college.</p>
                  <p>I started my agency Playa in 2015, hoping to help small entrepreneurs and non-profits launching their projects, bridging the gap between project owners and end-users. I am constantly learning and treasure every opportunity to design better. I’m learning to code right now and this website is my first attempt.</p>
                </Block>
                <Block className="timeline">
                  <h4>Timeline</h4>
                  <h3>Apple Inc.</h3>
                  <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college.</p>
                  <h3>Playa</h3>
                  <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college.</p>
                  <h3>HyperAir</h3>
                  <p>Before that, I worked as Cross-Content Intern at iTunes & App Store, Apple during college.</p>
                </Block>
            </Row>
            <Row className="blog">
                <BlogBlock>
                    <h3>#02</h3>
                    <h1>Blog</h1>
                    <p>I write about design, technology and productivity.</p>
                </BlogBlock>
                <PostListing postEdges={postEdges} />
            </Row>
            <Row>
                <Block className="work-title">
                    <h4>#03</h4>
                    <h1>Work</h1>
                    <p>Projects that I am working on and initiated in the past.</p>
                </Block>
            </Row>
            <WorkGrid className="three-row">
                <WorkBlock>
                    <h4>UI/UX Design, Graphic Design</h4>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <button>Learn More</button>
                </WorkBlock>
                <WorkBlock>
                    <h4>UI/UX Design, Graphic Design</h4>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <button>Learn More</button>
                </WorkBlock>
                <WorkBlock>
                    <h4>UI/UX Design, Graphic Design</h4>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <button>Learn More</button>
                </WorkBlock>
                <WorkBlock>
                    <h4>UI/UX Design, Graphic Design</h4>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <button>Learn More</button>
                </WorkBlock>
                <WorkBlock>
                    <h4>UI/UX Design, Graphic Design</h4>
                    <h3>Pingspace.io</h3>
                    <p>Pingspace checks your site uptime every minute with real user monitoring and let you know when your sites are down.</p>
                    <button>Learn More</button>
                </WorkBlock>
            </WorkGrid>
            </Container>
            </Grid>
        </Layout>
            );
        }
      }
      
      export default Index;
      
      /* eslint no-undef: "off" */
      export const pageQuery = graphql`
        query GridQuery {
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
                excerpt
                timeToRead
                frontmatter {
                  title
                  tags
                  cover
                  date
                }
              }
            }
          }
        }
      `;
      