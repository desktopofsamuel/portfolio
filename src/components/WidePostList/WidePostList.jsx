import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import kebabCase from "lodash/kebabCase";

const Container = styled.article`
  margin-bottom: var(--padding-m);
  display: grid;
  grid-gap: 48px;
  grid-template-columns: [left] 30% [right] 70%;

  @media only screen and (max-width: 425px) {
    margin-bottom: 100px;
    display: block;
  }
`;

const ListTitle = styled.h1`
  cursor: pointer;
  font-family: var(--primary-font);
  font-size: 2rem;
`;
const ListRight = styled.div`
  grid-area: right;
`;
const ListExcerpt = styled.p`
  margin-bottom: var(--var-padding-s);
`;

const ListLeft = styled.div`
  grid-area: left;
  margin-top: 20px;
  border-top: 1px solid #000;

  @media only screen and (max-width: 425px) {
    border-top: none;
  }
`;

const ListMetaWrapper = styled.div``;

const ListMeta = styled.small``;

const ListCategory = styled.div`
  display: ${props => props.category || "inline"};
`;

class WidePostList extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        category: postEdge.node.frontmatter.category,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    const props = this.props;
    return postList.map(post => (
      <Container>
        <ListLeft />
        <ListRight>
          <ListTitle>
            <Link to={post.path}>{post.title}</Link>
          </ListTitle>
          <ListExcerpt>{post.excerpt}</ListExcerpt>
          <ListMetaWrapper>
            <ListMeta>{post.date}</ListMeta>
            <ListCategory style={{ display: `${props.category}` }}>
              <ListMeta> in </ListMeta>
              <ListMeta>
                <Link to={`/categories/${kebabCase(post.category)}`}>
                  {post.category}
                </Link>
              </ListMeta>
            </ListCategory>
          </ListMetaWrapper>
        </ListRight>
      </Container>
    ));
  }
}

export default WidePostList;

WidePostList.propTypes = {
  invert: PropTypes.bool
};
