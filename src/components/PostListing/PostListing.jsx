import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";


const Block = styled.div`
    position: relative;
    background:#121212;
    padding: var(--padding-m);
    color: var(--color-background-500);

    p {
      font-size: 14px;
      background: linear-gradient( to bottom, var(--color-background-500) 30%, rgba(18, 18, 18, 0) );
      -webkit-background-clip: text;
      background-clip: text;
	    -webkit-text-fill-color: transparent;
    }

    h3 { 
      margin: 0;
    }

    h1 {
      margin: 1rem 0;
    }
`

const Button = styled(Link)`
  margin: 0;
  padding: 8px 0px;
  background: none;
  color: var(--color-background-500);
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  cursor: pointer;
  display: inline;
`

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.frontmatter.path,
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
          <Block key={post.title}><Link to={post.path} >
            <h3><a>{post.title}</a></h3></Link>
            <p>{post.excerpt}</p>
            <Button to={post.path}><h5>Read On <FaArrowRight /></h5></Button>
            
          </Block>
        ))
       
    );
  }
}

export default PostListing;
