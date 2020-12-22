import React from "react";
import { graphql } from "gatsby";
import Boxed from "components/utils/Boxed";
import PageTitle from "elements/PageTitle";
import styled from "styled-components";
import Layout from "../layout";
import BlogDetail from "../components/page/BlogDetail";
import BlogList from "../components/page/BlogList";
import Link from "../components/common/GatsbyLink";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
`;

const BlogPage = ({ data }) => {
  const postEdges = data.feature.edges;
  const blogEdges = data.blog.edges;

  return (
    <Layout
      title="Design Blog"
      description="Hi! My name is Samuel. I write blog about web design, user interface and experiecne design."
      keywords="Design,Blog,Web,App,UI,UX,Interface,Portfolio,Hong Kong,Writing"
    >
      <Row>
        <Boxed>
          <PageTitle
            title="Blog"
            subtitle="Article"
            description="A collection of posts I wrote about design process, technology and
                productivity."
          />
          <Row id="featured">
            <BlogDetail postEdges={postEdges} />
          </Row>
          <small>All blog posts</small>
          <Row id="latest">
            <BlogList postEdges={blogEdges} />
          </Row>
        </Boxed>
      </Row>
    </Layout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */

export const bloglisting = graphql`
  fragment bloglisting on MdxConnection {
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
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
export const pageQuery = graphql`
  query BlogQuery {
    feature: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { draft: { ne: true }, feature: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...bloglisting
    }
    blog: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...bloglisting
    }
  }
`;
