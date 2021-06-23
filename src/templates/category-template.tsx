import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PostList from "components/page/BlogListWide";

const Container = styled.section`
  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

type CategoryPageProps = {
  data: {
    allMdx: {
      edges: {
        node: object,
      },
    },
  },
  pageContext: {
    category: string,
  },
};

const CategoryPageTemplate = ({ data, pageContext }: CategoryPageProps) => {
  const { category } = pageContext;
  const postEdges = data.allMdx.edges;

  return (
    <Layout
      title={`${category}`}
      description={`Blog articles on ${category}. UI/UX and web development tutorials, resources, journals and more`}
    >
      <PageTitle title={`${category}`} />
      <Boxed>
        <PostList category="none" postEdges={postEdges} />
      </Boxed>
    </Layout>
  );
};

export default CategoryPageTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        ...blogpost
      }
    }
  }
`;
