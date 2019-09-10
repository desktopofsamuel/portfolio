import React, { Component } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';

const Container = styled.article`
  margin-bottom: var(--padding-m);

  @media only screen and (max-width: 425px) {
      margin-bottom: 100px;
      display: block;
  }
`

const ListTitle = styled.h1`
  cursor: pointer;
  font-size: 2rem;
`
const ListRight = styled.div`
  grid-area: right;
  
`
const ListExcerpt = styled.p`
  margin: 0;
`

const ListLeft = styled.div`
  grid-area: left;
`

const ListMeta = styled.small`
`


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

    return postList.map(post => (
      <Container>
        <ListLeft>
          <ListTitle><Link to={post.path}>{post.title}</Link></ListTitle>
          <ListMeta>{post.date} in </ListMeta>
          <ListMeta><Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link></ListMeta>
        </ListLeft>
        <ListRight>
          <ListExcerpt>{post.excerpt}</ListExcerpt>
        </ListRight>
      </Container>
    ));
  }
}

export default WidePostList;

WidePostList.propTypes = {
  invert: PropTypes.bool,
};
