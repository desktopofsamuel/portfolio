import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReadOn from "components/ReadOn";
import Zoom from "react-reveal/Zoom";

const Block = styled.div`
  border-radius: 4px;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-flow: column;
  background: ${props => (props.invert ? `var(--color-white-light-100)` : ``)};
  text-align: left;
  align-content: flex-start;
  color: var(--color-text);
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
    color: var(--color-text);
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
  background-color: var(--color-white-light-100);

  h3 {
    color: var(--color-primary-light-700);
  }
`;

const PostListImage = styled(Img)`
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;
`;

const Paragraph = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
`;
class IndexBlog extends React.Component {
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
      <Zoom duration={500} key={post.title}>
        <Block className="noeffect" invert={invert}>
          <Link to={post.path} className="noeffect">
            <PostListImage
              fluid={post.cover.childImageSharp.fluid}
              alt={post.title}
            />
            <Content>
              <h3 className="link">{post.title}</h3>
              <Paragraph className="noeffect"> {post.excerpt}</Paragraph>
            </Content>
          </Link>
        </Block>
      </Zoom>
    ));
  }
}

export default IndexBlog;

IndexBlog.propTypes = {
  invert: PropTypes.bool,
};

IndexBlog.defaultProps = {
  invert: false,
};
