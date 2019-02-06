import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Navbar from "../components/Navbar/Navbar";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(33, 1fr);
    grid-template-rows: repeat(33, 1fr);

    width: 100%;
    height: 100%;
    background: #e2dedb;
    
`
const Black = styled.div`
    background: #000;

    &.one {
      grid-column: 4 / 10;
      grid-row: 2 / 3;
    }

    &.two {
      grid-column: 18 / 34;
      grid-row: 3 / 5;
    }

    &.three {
      grid-column: 1 / 3;
      grid-row: 12 / 18;
    }
`

const Block = styled.div`
  &.title {
    grid-column: 6 / 20;
    grid-row: 6 / 15;
  }

  &.timeline {
    grid-column: 21 / 33;
    grid-row-start: 21;
  }
`

class Index extends React.Component {
    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      return (
        <Layout>
            <Container>
                <Block className="title">
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
                <Black className="one" />
                <Black className="two" />
                <Black className="three" />
            </Container>
        </Layout>
            );
        }
      }
      
      export default Index;
      
      /* eslint no-undef: "off" */
      export const pageQuery = graphql`
        query NewQuery {
          allMarkdownRemark(
            limit: 2000
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
                  date
                }
              }
            }
          }
        }
      `;
      