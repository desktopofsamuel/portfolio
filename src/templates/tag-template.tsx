import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import PageTitle from "components/PageTitle";
import Boxed from "components/utils/Boxed";
import BlogParallel from "components/page/BlogParallel";
import { PageProps } from "gatsby";

const TagTemplate: React.FC<PageProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const postEdges = data.allMdx.edges;

  return (
    <Layout
      title={`Posts tagged as ${tag}`}
      description={`Blog articles on ${tag}. UI/UX and web development tutorials, resources, journals and more`}
    >
      <Boxed>
        <PageTitle title={`Posts tagged as ${tag}`} />
        <BlogParallel postEdges={postEdges} />
      </Boxed>
    </Layout>
  );
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        ...blogpost
      }
    }
  }
`;
