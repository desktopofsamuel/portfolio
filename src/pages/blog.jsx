import React from "react";
import { graphql } from "gatsby";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import styled from "styled-components";
import Layout from "../layout";
import BlogDetail from "../components/page/BlogDetail";
import BlogList from "../components/page/BlogList";
import Link from "../components/common/GatsbyLink";
import { SmallText } from "components/common/TextStyles";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
`;

const BlogPage = ({ data }) => {
  const postEdges = data.feature.edges;
  const blogEdges = data.blog.edges;

  return (
    <Layout
      title="Blog"
      description="Blog on design process, technology and productivity."
      keywords="Design,Blog,Web,App,UI,UX,Interface,Portfolio,Hong Kong,Writing,Samuel Wong, Tech, Productivity"
    >
      <Boxed>
        <PageTitle
          title="Blog"
          description="A collection of posts I wrote about design process, technology and
                productivity."
        />
        <SmallText>Featured posts</SmallText>
        <Row id="featured">
          <BlogDetail postEdges={postEdges} />
        </Row>
      </Boxed>
      <Boxed size="small">
        <SmallText>All posts</SmallText>
        <Row id="latest">
          <BlogList postEdges={blogEdges} />
        </Row>
      </Boxed>
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
      limit: 8
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
