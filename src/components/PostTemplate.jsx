import React, { Component } from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Tag from "elements/Tag";

const Container = styled.main`
  h1 {
    margin-top: 1em;
    text-align: center;
    font-size: var(--font-size-xl);
  }
`;

class PostTemplate extends React.Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;

    return (
      <Container>
        <Img sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
        <h1>{post.title}</h1>
        <MDXRenderer>{postNode.body}</MDXRenderer>
        <div>
          {post.tags.map((tag, index) => {
            return (
              <Tag tag={tag} key={index}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <small>
          <time>{postNode.fields.date}</time>
        </small>
      </Container>
    );
  }
}

export default PostTemplate;
