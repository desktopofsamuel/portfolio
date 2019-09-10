import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.section`

`

const ListItem = styled.div`
display: grid;
grid-template-columns: minmax(auto,30%) minmax(auto,1200px);
margin-bottom: var(--padding-m);
border-left: 3px var(--color-brand-500) solid;
transition: transform 0.2s ease-in, box-shadow 0.3s ease-in-out;

&:hover {
  transform: scale(1.010, 1.010);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 768px) {
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  border-left: 3px var(--color-transparent-500) solid;
}
`

const Hero = styled.h1`
font-size: 1.5rem;

`

const WorkImg = styled(Img)`
`
const ListLeft = styled.div`
background: white;
padding: 1rem;
display: flex;
flex-flow: column;
justify-content: space-between;

 small {
   font-family: var(--secondary-font);
 }
`
const ReadButton = styled(Link)`
justify-self: flex-end;
border-bottom: 0;

h5 {
font-family: var(--secondary-font);
}
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
                    <small>{post.title}</small>
                    <h2>{post.subtitle}</h2>
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