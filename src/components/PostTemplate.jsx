import React, { Component } from "react";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Tag from "elements/Tag";
import PostSidebar from "./PostSidebar";

const Container = styled.div`
  display: grid;
  grid-template-columns: var(--page-container-s) auto;
`;

const Sidebar = styled.aside``;

const Main = styled.main`
  small {
    margin: 0;
  }

  h1 {
    margin-top: 1em;
    font-size: var(--font-size-xl);
    font-weight: 500;
    letter-spacing: -2px;
    font-family: var(--font-tertiary);
  }

  h2 {
    font-size: var(--font-size-l);
    font-family: var(--font-tertiary);
    font-weight: 500;
    letter-spacing: -1px;
  }

  h3 {
    font-size: var(--font-size-m);
    font-size: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p.subtitle {
    margin-top: 1em;
    font-size: var(--font-size-);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--color-primary-shades-300);
  }
`;

class PostTemplate extends React.Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    const postToc = postNode.tableOfContents;

    return (
      <Container>
        <Main>
          <small>
            <time>{postNode.fields.date}</time>
          </small>
          <h1>{post.title}</h1>
          <p className="subtitle">{post.tldr}</p>
          <Img sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
          <hr />
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
        </Main>
        <Sidebar>
          <PostSidebar postToc={postToc} />
        </Sidebar>
      </Container>
    );
  }
}

export default PostTemplate;
