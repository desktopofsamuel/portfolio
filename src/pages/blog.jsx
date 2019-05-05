import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PostHero from "../components/PostHero/PostHero";
import PostList from "../components/PostListing/PostListing";
import Link from "../components/GatsbyLink/GatsbyLink";
import SEO from "../components/SEO/SEO";
import BlogFeature from "../components/BlogFeature/BlogFeature"
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


const Main = styled.div`
display: grid;
grid-template-columns: [left] 30% [right] 70%;
grid-gap: var(--var-padding-m);

@media only screen and (max-width: 768px) {
  display: block;
}
 
`
const Left = styled.aside`
grid-area: left;
`

const Right = styled.div`
grid-area: right;
`

const BlogSubtitle = styled.h3`
  @media only screen and (max-width: 768px) {
    display: none;
}
`

const CategoryBlock = styled.div`
margin-top: 8rem;

@media only screen and (max-width: 768px) {
    display: none;
}
`

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.post.edges;
    const listEdges = this.props.data.list.edges;
    const Feature1Edges = this.props.data.feature1.edges;
    const Feature2Edges = this.props.data.feature2.edges;
    return (
      <Layout>
          <Helmet title={`Design Blog | ${config.siteTitle}` }>
            <meta name="twitter:title" content={`Design Blog | ${config.siteTitle}`}/>
            <meta property="og:title" content={`Design Blog | ${config.siteTitle}`}/>
            <meta name="description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta name="twitter:description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta property="og:description" content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design." />
            <meta name="keywords" content="Design,Blog,Web,App,UI,UX,Interface,Portfolio,Hong Kong,Writing" />
          </Helmet>
          <Row>
            <Main>
            <Left>
              <h1>Blog</h1>
              <BlogSubtitle>A collection of posts I wrote about design, technology and productivity. </BlogSubtitle>
              <CategoryBlock>
                <small>Top Categories</small>
                <h3><Link to="/categories/design-journal">Design</Link></h3>
                <h3><Link to="/categories/work-in-progress">Development</Link></h3>
                <h3><Link to="/categories/productivity">Productivity</Link></h3>
                <h3><Link to="/categories/ctrl-alt-setup">Ctrl Alt Setup</Link></h3>
                </CategoryBlock>
            </Left>
            <Right>
              <small>Featured</small>
              <BlogFeature postEdges={Feature1Edges}/>
              <BlogFeature postEdges={Feature2Edges}/>
              <Row id="latest">
              <small>Latest</small>
              <PostHero postEdges={listEdges} />
              </Row>
            </Right>
            </Main>
          </Row>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */

export const bloglisting = graphql`
fragment bloglisting on MarkdownRemark {
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
`;
export const pageQuery = graphql`
  query BlogQuery {
    feature1: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/2018-07-06 Color Tools/"}}
    ) {
      edges {
        node {
          ...bloglisting
        }
      }
    }
    feature2: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/2019-05-01 Building Gatsby v2 With Multiple Post Type/"}}
    ) {
      edges {
        node {
          ...bloglisting
        }
      }
    }
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
                sizes(maxWidth: 1200) {
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
