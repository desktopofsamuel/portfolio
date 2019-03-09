import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const Block = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, auto);
  background: ${props => (props.invert ? `var(--color-background-500)` : `var(--color-black-500)` )} ;
  padding: ${props => (props.invert ? `none` : `var(--padding-m)` )}; 
  color: ${props => (props.invert ? `var(--color-black-500)` : `var(--color-white-500)` )};
  align-content: flex-start;
  p {
    font-size: 14px;
    background: ${props => (props.invert ? `linear-gradient(to bottom,var(--color-black-500) 30%,rgba(18, 18, 18, 0))` : `linear-gradient(to bottom,var(--color-white-500) 30%,rgba(18, 18, 18, 0))` )};
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
    color: ${props => (props.invert ? `var(--color-white-500)` : `var(--color-black-500)` )};
  }
`;

const Button = styled(Link)`
  margin: 0;
  padding: 8px 0px;
  background: none;
  align-self: flex-end;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  cursor: pointer;
  display: inline;
  border-bottom: none;

  
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
        excerpt: postEdge.node.excerpt,
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
        <h3><Link to={post.path}>
            <a>{post.title}</a></Link>
        </h3>
        <p>{post.excerpt}</p>
        <Button invert={invert} to={post.path}>
          <h5>
            Read On <FaArrowRight />
          </h5>
        </Button>
      </Block>
    ));
  }
}

export default PostListing;

PostListing.propTypes = {
  invert: PropTypes.bool,
};

PostListing.defaultProps = {
  invert: false,
}; 
