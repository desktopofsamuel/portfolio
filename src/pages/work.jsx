import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import WorkHero from "../components/WorkHero/WorkHero";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import styled from "styled-components";

const Row = styled.section`
  padding: var(--var-padding-l) 0;

  &:first-child {
    padding-bottom: 0;
  }
`;

const BoxContent = styled.div`
  max-width: 85vw;
  padding-left: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 95vw;
    padding: 0 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Row>
          <small>Projects</small>
          <h1>My Work</h1>
        </Row>
        <Row>
          <Helmet title={config.siteTitle} />
          <WorkHero postEdges={postEdges} />
        </Row>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
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
            subtitle
            tags
            color
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
