import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PostBlock = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
grid-gap: 24px;
`

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
      <PostBlock>
        <Block>
            <h3>#02</h3>
            <h1>Blog</h1>
            <p>I write about design, technology and productivity.</p>
        </Block>
        {/* Your post list here. */
        postList.map(post => (
          <Block><Link to={post.path} key={post.title}>
            <h3><a>{post.title}</a></h3>
            <p>{post.excerpt}</p>
          </Link>
          </Block>
        ))}
      </PostBlock>
    );
  }
}

export default PostListing;
