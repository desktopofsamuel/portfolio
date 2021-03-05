import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { H3 } from "components/common/TextStyles";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: repeat(1, minmax(400px, 1fr));
  grid-gap: 2rem;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.article`
  display: block;
  border-bottom: 1pxvar (--color-secondary-light-100) solid;
  padding-bottom: var(--var-padding-m);
  margin-bottom: var(--padding-m);
`;

const Title = styled(H3)`
  margin: 0;
`;

const Excerpt = styled.p`
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
  margin-bottom: 0;
`;

const PostImage = styled(GatsbyImage)`
  margin-bottom: var(--var-padding-s);
`;

const ShowMoreButton = styled.button`
  border: 1px solid var(--color-primary-light-700);
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-primary-light-700);
    color: var(--color-white-light-100);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

class PostHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 5,
      error: false,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 4 };
    });
  }

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
    const postList = this.getPostList();
    return (
      <>
        <Grid>
          {/* {postList.slice(0, this.state.visible).map(post => ( */}
          {postList.map(post => (
            <ListItem key={post.path}>
              <Link to={post.path}>
                <PostImage
                  image={post.cover.childImageSharp.gatsbyImageData}
                  alt={post.title}
                />
                <Title>{post.title}</Title>
              </Link>
              <Excerpt>{post.excerpt}</Excerpt>
              {/* <small>{post.date}</small> */}
            </ListItem>
          ))}
        </Grid>
        {/* {this.state.visible < postList.length && (
        <ShowMoreButton onClick={this.loadMore}>Load More </ShowMoreButton>
      )} */}
      </>
    );
  }
}

export default PostHero;
