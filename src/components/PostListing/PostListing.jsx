import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReadOn from "elements/ReadOn";

const Block = styled.div`
  grid-column: span 4;
  position: relative;
  display: flex;
  flex-flow: column;
  background: ${props => (props.invert ? `var(--color-white-700)` : ``)};
  text-align: left;
  align-content: flex-start;

  color: ${props =>
    props.invert ? `var(--color-black-500)` : `var(--color-black-500)`};
  justify-content: space-between;
  p {
    align-self: flex-start;
  }

  h3 {
    margin-bottom: var(--var-padding-s);
  }

  h1 {
    margin: 1rem 0;
  }

  button {
    color: ${props =>
      props.invert ? `var(--color-white-500)` : `var(--color-black-500)`};
  }

  @media only screen and (max-width: 767px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const PostListImage = styled(Img)`
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Container = styled(Link)`
  border-bottom: none;
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

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 200%;
  color: var(--color-secondary-500);
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
        <Container to={post.path}>
          <PostListImage sizes={post.cover.childImageSharp.sizes} />
          <div>
            <h3>
              <a>{post.title}</a>
            </h3>
            <Paragraph className="noeffect"> {post.excerpt}</Paragraph>
          </div>
        </Container>
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
