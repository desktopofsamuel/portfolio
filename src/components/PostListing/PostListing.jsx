import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { ReadOn } from "../UI";

const Block = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  background: ${props => (props.invert ? `var(--color-white-700)` : ``)};
  padding: 0 var(--padding-m) var(--padding-s) var(--padding-m);

  color: ${props =>
    props.invert ? `var(--color-black-500)` : `var(--color-black-500)`};
  justify-content: space-between;
  p {
    background: ${props =>
      props.invert
        ? `linear-gradient(to bottom,var(--color-black-500) 30%,rgba(18, 18, 18, 0))`
        : `linear-gradient(to bottom,var(--color-black-500) 30%,rgba(18, 18, 18, 0))`};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    align-self: center;
  }

  h3 {
    margin: 0;
  }

  h1 {
    margin: 1rem 0;
  }

  button {
    color: ${props =>
      props.invert ? `var(--color-white-500)` : `var(--color-black-500)`};
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const PostListImage = styled(Img)`
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  margin: 0;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.075em;
  cursor: pointer;
  display: inline;
  border-bottom: none;
  justify-self: flex-end;
`;

class PostListing extends React.Component {
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
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const { invert } = this.props;
    const postList = this.getPostList();

    return postList.map(post => (
      <Block className="block" invert={invert} key={post.title}>
        <PostListImage sizes={post.cover.childImageSharp.sizes} />
        <div>
          <h3>
            <Link to={post.path}>
              <a>{post.title}</a>
            </Link>
          </h3>
          <p> {post.excerpt}</p>
        </div>
        <ReadOn href={post.path} />
      </Block>
    ));
  }
}

export default PostListing;

PostListing.propTypes = {
  invert: PropTypes.bool
};

PostListing.defaultProps = {
  invert: false
};
