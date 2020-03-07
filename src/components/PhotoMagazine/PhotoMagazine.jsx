import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.div``;

const GridItem = styled.div``;

const GridPhoto = styled(Img)``;

const GridTitle = styled.h2``;

const GridExcerpt = styled.p``;

const GridButton = styled(Link)``;

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
        <GridItem></GridItem>
        postList.map(post => (
        <GridItem>
          <Link to={post.path} key={post.title}>
            <GridPhoto sizes={post.cover.childImageSharp.sizes} />
            <GridTitle>{post.title}</GridTitle>
          </Link>
          <GridExcerpt>{post.excerpt}</GridExcerpt>
          <GridButton to={post.path}> View Series </GridButton>
        </GridItem>
        ))
      </Grid>
    );
  }
}

export default PhotoMagazine;
