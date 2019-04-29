import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Grid = styled.section`
margin-top: 2rem;
`

const ListItem = styled.article`
display: block;
border-bottom: 1px #CED8E0 solid;
margin-bottom: var(--padding-m);
padding-bottom: 2rem;

p {
  margin-bottom: 0.5rem;
}
`

const Hero = styled.a`
margin-bottom: 0;
`

class PostHero extends React.Component {
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
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Grid>
        {/* Your post list here. */
        postList.map(post => (
          <ListItem>
          <Link to={post.path} key={post.title}>
          <h3><Hero>{post.title}</Hero></h3>
          </Link>
          <p>{post.excerpt}</p>
          <small>{post.date}</small>
          </ListItem>
        ))}
      </Grid>
    );
  }
}

export default PostHero;