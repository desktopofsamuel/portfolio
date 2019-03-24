import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Grid = styled.section`

`

const ListItem = styled.article`
display: grid;
grid-template-columns: 20% 80%;
border-bottom: 1px #CED8E0 solid;
margin-bottom: 1.5rem;
`

const Hero = styled.h1`
font-size: 1.5rem;

`
const ListLeft = styled.div`
`

const ListRight = styled.div`
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
          <ListLeft><small>{post.date}</small></ListLeft>
          <ListRight>
          <Link to={post.path} key={post.title}>
            <Hero>{post.title}</Hero>
          </Link>
          </ListRight>
          </ListItem>
        ))}
      </Grid>
    );
  }
}

export default PostHero;