import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import BlogList from "../components/BlogList";
import Link from "../components/common/GatsbyLink";
import SEO from "../components/SEO";
import Boxed from "elements/Boxed";
import PageTitle from "elements/PageTitle";
import styled from "styled-components";

const Row = styled.section`
  padding: var(--var-padding-s) 0;
  background: white;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: [left] 30% [right] 70%;
  grid-gap: var(--grid-gap);

  @media only screen and (max-width: 768px) {
    display: block;
  }

  h1 {
    font-family: var(--font-primary);
  }
`;

const BlogListWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Left = styled.aside`
  grid-area: left;
`;

const Right = styled.main`
  grid-area: right;
`;

const CategoryBlock = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.post.edges;
    const listEdges = this.props.data.list.edges;
    const Feature1Edges = this.props.data.feature1.edges;
    const Feature2Edges = this.props.data.feature2.edges;
    return (
      <Layout>
        <Helmet title={`Design Blog | ${config.siteTitle}`}>
          <meta
            name="twitter:title"
            content={`Design Blog | ${config.siteTitle}`}
          />
          <meta
            property="og:title"
            content={`Design Blog | ${config.siteTitle}`}
          />
          <meta
            name="description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            name="twitter:description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            property="og:description"
            content="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
          />
          <meta
            name="keywords"
            content="Design,Blog,Web,App,UI,UX,Interface,Portfolio,Hong Kong,Writing"
          />
        </Helmet>
        <Row>
          <Boxed>
            <Row>
              <PageTitle
                title="Blog"
                subtitle="Article"
                description="A collection of posts I wrote about design process, technology and
                productivity."
              />
            </Row>
            <Main>
              <Left>
                <Row>
                  <CategoryBlock>
                    <small>Top Categories</small>
                    <h3>
                      <Link to="/categories/design-journal">Design</Link>
                    </h3>
                    <h3>
                      <Link to="/categories/work-in-progress">Development</Link>
                    </h3>
                    <h3>
                      <Link to="/categories/productivity">Productivity</Link>
                    </h3>
                    <h3>
                      <Link to="/categories/ctrl-alt-setup">
                        Ctrl Alt Setup
                      </Link>
                    </h3>
                  </CategoryBlock>
                </Row>
              </Left>
              <Right>
                <Row id="latest">
                  <small>Latest</small>
                  <BlogList postEdges={postEdges} />
                </Row>
              </Right>
            </Main>
          </Boxed>
        </Row>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */

export const bloglisting = graphql`
  fragment bloglisting on Mdx {
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
    feature1: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/2018-07-06 Color Tools/" } }
    ) {
      edges {
        node {
          ...bloglisting
        }
      }
    }
    feature2: allMdx(
      filter: {
        fileAbsolutePath: {
          regex: "/blog/2019-05-01 Building Gatsby v2 With Multiple Post Type/"
        }
      }
    ) {
      edges {
        node {
          ...bloglisting
        }
      }
    }
    post: allMdx(
      limit: 10
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
            tldr
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
    list: allMdx(limit: 2000) {
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
            tldr
          }
        }
      }
    }
  }
`;
