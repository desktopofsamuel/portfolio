import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import ReadOn from "elements/ReadOn";

const Grid = styled.section``;

const ListItem = styled.div`
  /* display: grid;
  grid-template-columns: minmax(auto, 40%) minmax(auto, 1200px); */
  border-radius: 4px;
  margin-bottom: var(--padding-m);
  border-left: 3px var(--color-brand-500) solid;
  transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }

  &:hover ${ListLeft} span {
    margin-left: 8px;
  }
  /* 
  @media only screen and (max-width: 767px) { */
  display: flex;
  flex-direction: column-reverse;
  text-align: left;
  border-left: 3px var(--color-transparent-500) solid;
  /* } */
`;

const WorkImg = styled(Img)``;
const ListLeft = styled.div`
  background: white;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h3 {
    margin-top: 0;
  }

  h6 {
    color: var(--color-secondary-500);
    font-weight: var(--font-weight-regular);
    margin-bottom: 1rem;
  }

  span {
    margin-left: 4px;
    color: var(--color-secondary-500);
    transition: var(--transition);
  }
`;

const ListRight = styled.div``;
class WorkHero extends React.Component {
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
        timeToRead: postEdge.node.timeToRead,
        color: postEdge.node.frontmatter.color,
        subtitle: postEdge.node.frontmatter.subtitle,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Grid>
        {/* Your post list here. */
        postList.map(post => (
          <Link to={`/work/${post.path}`} key={post.title}>
            <ListItem style={{ borderLeftColor: `${post.color}` }}>
              <ListLeft>
                <div>
                  <h6>{post.title}</h6>
                  <h3>{post.subtitle}</h3>
                </div>
                <div style={{ display: "inline-block" }}>
                  <small>Read On</small>
                  <span>→</span>
                </div>
              </ListLeft>
              <ListRight>
                <WorkImg fluid={post.cover.childImageSharp.fluid} />
              </ListRight>
            </ListItem>
          </Link>
        ))}
      </Grid>
    );
  }
}

export default WorkHero;
