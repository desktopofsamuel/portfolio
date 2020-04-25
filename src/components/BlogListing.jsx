import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReadOn from "elements/ReadOn";

const Block = styled.div`
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  grid-column: span 4;
  display: flex;
  flex-flow: column;
  background: ${props => (props.invert ? `var(--color-white-700)` : ``)};
  text-align: left;
  align-content: flex-start;

  color: ${props =>
    props.invert ? `var(--color-black-500)` : `var(--color-black-500)`};
  justify-content: space-between;
  transition: var(--transition);

  p {
    align-self: flex-start;
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

  @media only screen and (max-width: 767px) {
    padding: 0;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }

  &:hover a {
    background-size: 100% 100%;
  }
`;

const Content = styled.div`
  padding: var(--var-padding-s);
  background-color: var(--color-white-700);
`;

const PostListImage = styled(Img)`
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;
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
class BlogListing extends React.Component {
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
        timeToRead: postEdge.node.timeToRead,
      });
    });
    return postList;
  }
  render() {
    const { invert } = this.props;
    const postList = this.getPostList();

    return postList.map(post => (
      <Block className="noeffect" invert={invert} key={post.title}>
        {" "}
        <Link to={post.path} className="noeffect">
          <PostListImage fluid={post.cover.childImageSharp.fluid} />
          <Content>
            <h3>
              <a>{post.title}</a>
            </h3>
            <Paragraph className="noeffect"> {post.excerpt}</Paragraph>
          </Content>
        </Link>{" "}
      </Block>
    ));
  }
}

export default BlogListing;

BlogListing.propTypes = {
  invert: PropTypes.bool,
};

BlogListing.defaultProps = {
  invert: false,
};
