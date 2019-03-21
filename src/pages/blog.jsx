import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import PostHero from "../components/PostHero/PostHero";
import styled from "styled-components";

const BlogBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: var(--padding-l);
 

  h3 {
    font-size: calc(30px + (48 - 36) * ((100vw - 300px) / (1600 - 300)));
  }

  .block {
    display: grid;
    margin: 0 auto;
    grid-template-columns:  repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: var(--padding-m);
    border-bottom: 1px var(--color-black-500) solid;

    p {
      font-size: 1rem;
      background-clip: none;
      -webkit-text-fill-color: unset;
    }
  }
`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.post.edges;
    const listEdges = this.props.data.list.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <SEO />
          <BlogBlock><PostListing postEdges={postEdges} /></BlogBlock>
          <PostHero postEdges={listEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    post: allMarkdownRemark(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
    list: allMarkdownRemark(
      limit: 2000
      skip: 10
      sort: { fields: [fields___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 600)
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
