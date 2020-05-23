import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import PageTitle from "elements/PageTitle";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 332px));
  grid-gap: 36px 24px;

  .intro {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .noeffect:nth-child(4n + 1) {
    grid-column: span 2;
    display: grid;
  }

  @media only screen and (max-width: 767px) {
    display: block;

    .noeffect:nth-child(4n + 1) {
      display: inline;
    }
  }
`;

const GridItem = styled.div`
  grid-gap: 16px;

  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

const GridHeading = styled.h3`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-l);
`;

const GridSeparator = styled.div`
  display: block;
  border-right: 1px solid var(--color-grey-300);
  width: 0rem;
  height: 2rem;
`;

const GridPhoto = styled(Img)`
  margin-bottom: 0.5rem;
`;

const GridTitle = styled.h2`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  margin-top: 0;
  margin-bottom: 0;
`;

const GridContentWrapper = styled.div``;

const GridExcerpt = styled.p`
  color: var(--color-grey-300);

  &::before {
    display: inline-block;
    content: "";
    border-top: 1px solid var(--color-grey-300);
    width: 3rem;
    margin: 0 0.5rem 0 0;
    transform: translateY(-0.2rem);
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const GridButton = styled.small`
  display: inline;
  border-bottom: 0;
  margin: 0 auto;
  opacity: 0;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: #b6aa8e;
  color: var(--color-white-300);
  transition: var(--transition);

  @media only screen and (max-width: 767px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .photo-item:hover & {
    opacity: 1;
  }
`;

class PhotoMagazine extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: "/photo" + postEdge.node.fields.slug,
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
      <Grid>
        <GridItem className="intro">
          <GridHeading>On Photography</GridHeading>
          <GridSeparator />
          <p>
            I’m greatly inspired by cities and stories within. Therefore I
            publish sets of photos according to cities that I have visited. More
            photos on my{" "}
            <a href="http://www.instagram.com/desktopofsamuel">Instagram</a>.
          </p>
        </GridItem>
        {/* Your post list here. */
        postList.map(post => (
          <GridItem className="photo-item noeffect" key={post.title}>
            <Link to={post.path} className="noeffect">
              <GridPhoto sizes={post.cover.childImageSharp.sizes} />
            </Link>
            <Link to={post.path} className="noeffect">
              <GridTitle>{post.title}</GridTitle>
            </Link>
            <GridContentWrapper>
              <GridExcerpt>{post.excerpt}</GridExcerpt>
              <Link to={post.path} className="noeffect">
                <GridButton> View Series </GridButton>
              </Link>
            </GridContentWrapper>
          </GridItem>
        ))}
      </Grid>
    );
  }
}

export default PhotoMagazine;
