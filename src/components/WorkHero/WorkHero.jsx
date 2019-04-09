import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.section`

`

const ListItem = styled.div`
display: grid;
grid-template-columns: minmax(auto,30%) minmax(auto,1200px);
border-left: 3px ${props => props.color || 'var(--color-brand-500)'} solid;
margin-bottom: var(--padding-m);

@media only screen and (max-width: 768px) {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
}
`

const Hero = styled.h1`
font-size: 1.5rem;

`

const WorkImg = styled(Img)`
max-height: 300px;
`
const ListLeft = styled.div`
background: white;
padding: 1rem;
display: flex;
flex-flow: column;
justify-content: space-between;
`
const ReadButton = styled(Link)`
justify-self: flex-end;
border-bottom: 0;
`

const ListRight = styled.div`
`
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
            <ListItem>
              <ListLeft>
                <div>
                <small>01.hello</small>
                <h3>{post.title}</h3>
                </div>
                <ReadButton to={`/work/${post.path}`}><h5>Read On →</h5></ReadButton>
              </ListLeft>
              <ListRight>
                <WorkImg sizes={post.cover.childImageSharp.sizes}></WorkImg>
              </ListRight>
              </ListItem>
          </Link>
        ))}
      </Grid>
    );
  }
}

export default WorkHero;