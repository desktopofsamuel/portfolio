import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const CardContainer = styled.div``;

const Image = styled(Img)``;

const Title = styled.h3``;

const Meta = styled.small``;

class PhotoCard extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: "/photo" + postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <CardContainer>
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <Image sizes={post.cover.childImageSharp.sizes} />
            <Title>{post.title}</Title>
            <Meta>{post.date}</Meta>
          </Link>
        ))}
      </CardContainer>
    );
  }
}

export default PhotoCard;
