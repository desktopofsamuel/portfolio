import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const HeroArticle = styled(Link)`
position: relative;

`

const HeroTitleWrapper = styled.div`
padding: 1rem;
background-color: var(--color-white-500);
position: absolute;
bottom: 0;
left: 0;
z-index: 1000;
min-width: 320px;
max-width: 500px;
margin: 1rem;
`

const PostListImage = styled(Img)`
margin-top: 2rem;
`

const HeroTitle = styled.h3`
margin-bottom: 0;

`

class BlogFeature extends React.Component {
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
    const postList = this.getPostList();

    return postList.map(post => (
    <HeroArticle to={post.path} key={post.title} >
        <PostListImage sizes={post.cover.childImageSharp.sizes}/>
        <HeroTitleWrapper >
        <HeroTitle><a>{post.title}</a></HeroTitle>
        </HeroTitleWrapper>
  </HeroArticle>
    ));
  }
}

export default BlogFeature;

BlogFeature.propTypes = {
  invert: PropTypes.bool,
};

BlogFeature.defaultProps = {
  invert: false,
}; 
