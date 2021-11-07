import React, { useState, useEffect } from "react";
import { PageProps, graphql } from "gatsby";
import Boxed from "components/utils/Boxed";
import PageTitle from "components/PageTitle";
import styled from "styled-components";
import Layout from "../layout";
import BlogDetail from "../components/page/BlogDetail";
import { SmallText } from "components/common/TextStyles";
import BlogParallel from "components/page/BlogParallel";
import ReadOn from "components/ReadOn";
import ButtonPill from "components/button-pill";

const Row = styled.section`
  padding: var(--var-padding-m) 0;
  background: var(--color-background);
`;

const BlogPage: React.FC<PageProps> = ({ data }) => {
  const postEdges = data.feature.edges;
  const blogEdges = data.blog.edges;

  const [list, setList] = useState([...blogEdges.slice(0, 4)]);

  const [loadMore, setLoadMore] = useState(false);

  const [hasMore, setHasMore] = useState(blogEdges.length > 4);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < blogEdges.length;
      const nextResults = isMore
        ? blogEdges.slice(currentLength, currentLength + 4)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < blogEdges.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

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
      <Boxed size="large">
        <SmallText>All posts</SmallText>
        <Row id="latest">
          <BlogParallel postEdges={list} />
          {hasMore ? (
            <ButtonPill onClick={handleLoadMore}>Load More</ButtonPill>
          ) : (
            <p>No more </p>
          )}
        </Row>
      </Boxed>
    </Layout>
  );
};

export default BlogPage;

/* eslint no-undef: "off" */

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
      ...bloglist
    }
    blog: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...bloglist
    }
  }
`;
