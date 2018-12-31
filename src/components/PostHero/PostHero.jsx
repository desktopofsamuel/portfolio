import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2fr, auto);
`

const Hero = styled.div`
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
          <Link to={post.path} key={post.title}>
            <Hero><h1>{post.title}</h1></Hero>
          </Link>
        ))}
      </Grid>
    );
  }
}

export default PostHero;