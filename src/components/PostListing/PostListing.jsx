import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";



const Block = styled.div`
    background: #000;
    padding: var(--padding-m);
    color: var(--color-background-500);
    h3 { 
      margin: 0;
    }

    h1 {
      margin: 1rem 0;
    }
`

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
    const postList = this.getPostList();
    return (
      
        postList.map(post => (
          <Block><Link to={post.path} key={post.title}>
            <h3><a>{post.title}</a></h3>
            <p>{post.excerpt}</p>
          </Link>
          </Block>
        ))
       
    );
  }
}

export default PostListing;
