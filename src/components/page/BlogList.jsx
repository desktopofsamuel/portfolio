import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import Slide from "react-reveal/Slide";
import FadeIn from "react-fade-in";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 72ch;
`;

const ListItem = styled.article`
  display: block;
  border-bottom: 1px var(--color-primary-shades-100) solid;
  margin-bottom: var(--padding-l);

  p {
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  small {
    color: var(--color-text-secondary);
  }

  :last-child {
    border-bottom: none;
  }
`;

const Title = styled.h2`
  display: inline;
  margin: 0;
  font-size: var(--font-size-l);
  color: var(--color-secondary);
  transition: 1s all ease-in-out;
`;

const Excerpt = styled.p`
  font-size: var(--font-size-s);
`;

const PostImage = styled(Img)`
  margin-bottom: var(--var-padding-s);
`;

const ShowMoreButton = styled.button`
  border: 1px solid var(--color-primary);
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 5,
      error: false,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  }

  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.frontmatter.tldr || postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <>
        <Grid>
          {postList.slice(0, this.state.visible).map(post => (
            // {postList.map(post => (
            <Slide key={post.path} cascade bottom>
              <ListItem key={post.path}>
                <Link to={post.path}>
                  <Title>{post.title}</Title>
                </Link>
                <Excerpt>{post.excerpt}</Excerpt>
                <small>{post.date}</small>
              </ListItem>
            </Slide>
          ))}
        </Grid>
        {this.state.visible < postList.length && (
          <ShowMoreButton onClick={this.loadMore}>Load More </ShowMoreButton>
        )}
      </>
    );
  }
}

export default BlogList;
