import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import BigPostList from "../components/BigPostList/BigPostList";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import PostHero from "../components/PostHero/PostHero";
import styled from "styled-components";


const BlogLayout = styled.main`
  width: 70vw;
  margin: 10vh auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const Container = styled.section`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
`

const PostList = styled(BigPostList)`
`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.post.edges;
    const listEdges = this.props.data.list.edges;
    return (
      <Layout>
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <SEO />
          <BlogLayout>
            <h1>Blog</h1>
            {/*<Container>
              <PostList postEdges={postEdges} />
            </Container>*/}
            <PostHero postEdges={listEdges} />
          </BlogLayout>
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
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            category
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
          }
        }
      }
    }
    list: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMM DD, YYYY", locale: "en")
          }
          excerpt(pruneLength: 150)
          timeToRead
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
