import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.section`
  margin-top: 2rem;
`;

const ListItem = styled.article`
  display: block;
  border-bottom: 1px var(--color-secondary-100) solid;
  margin-bottom: var(--padding-m);
  padding-bottom: 2rem;

  p {
    margin-bottom: 0.5rem;
  }

  :last-child {
    border-bottom: none;
  }
`;

const Hero = styled.a`
  margin-bottom: 0;
`;

const PostImage = styled(Img)`
  margin-bottom: var(--var-padding-m);
`;

class PhotoHero extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: "/photo" + postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.frontmatter.tldr || postEdge.node.excerpt,
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
              <PostImage sizes={post.cover.childImageSharp.sizes} />
              <h3>
                <Hero>{post.title}</Hero>
              </h3>
            </Link>
            <p>{post.excerpt}</p>
            <small>{post.date}</small>
          </ListItem>
        ))}
      </Grid>
    );
  }
}

export default PhotoHero;
