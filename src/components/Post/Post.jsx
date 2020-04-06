import React, { Component } from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Img from "gatsby-image";

const Title = styled.h1`
  text-align: center;
`;

class Post extends React.Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;

    return (
      <main>
        <Title>{post.title}</Title>
        <small>
          <time>{postNode.fields.date}</time>
        </small>
        <Img sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
        <MDXRenderer>{postNode.body}</MDXRenderer>
      </main>
    );
  }
}

export default Post;
