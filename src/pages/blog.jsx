import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PostHero from "../components/PostHero/PostHero";
import SEO from "../components/SEO/SEO";
import styled from "styled-components";

const Row = styled.section`
padding: var(--var-padding-l) 0;
background: white; 

&:first-child {
  padding-bottom: 0;
}
`

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
`
class Index extends React.Component {
  render() {
    const postEdges = this.props.data.post.edges;
    const listEdges = this.props.data.list.edges;
    return (
      <Layout>
          <Helmet title={`Design Blog | ${config.siteTitle}`}>
            <meta property="twitter:title" content={`Design Blog | ${config.siteTitle}`}/>
            <meta property="og:title" content={`Design Blog | ${config.siteTitle}`}/>
            <meta property="description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta property="twitter:description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta property="og:description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta property="keywords" content="Design,Blog,Web,App,UI,UX,Interface,Portfolio,Hong Kong,Writing" />
          </Helmet>
          <Row>
              <h1>Blog</h1>
              <h3>This is the place I write about Design, Technology and Productivity. </h3>
          </Row>
          <Row>
            {/*<Container>
              <PostList postEdges={postEdges} />
            </Container>*/}
            <PostHero postEdges={listEdges} />

          </Row>
            
      
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
