import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Link from "./common/GatsbyLink";

const Card = styled.div`
  background-color: ${props => (props.color ? `${props.color}` : "black")};
  padding: var(--padding-m) var(--padding-m) 0 var(--padding-m);
  margin-bottom: var(--padding-m);
  transition: var(--transition);
  border-radius: 8px;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Subtitle = styled.h6`
  color: var(--color-white-500);
  font-weight: 400;
  letter-spacing: 1.5px;
  margin: 0;
`;

const Title = styled.h3`
  margin-top: 16px;
  color: var(--color-white-500);
`;

const Image = styled(Img)`
  background-color: rgba(0, 0, 0, 0);
`;

class WorkIndex extends React.Component {
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
      <div>
        {postList.map(post => (
          <Link to={`/work/${post.path}`} className="noeffect">
            <Card key={post.path} color={post.color}>
              <Subtitle>{post.title}</Subtitle>
              <Title>{post.subtitle}</Title>
              <Image
                fluid={post.cover.childImageSharp.fluid}
                alt={post.title}
              />
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}
export default WorkIndex;
