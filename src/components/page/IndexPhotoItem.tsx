import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../common/GatsbyLink";

const Photo = styled.div`
  height: 100%;

  & > * {
    height: 100%;
  }
`;

type IndexPhotoItemProps = {
  postEdges: {
    path: string
    cover: object
    title: string
    date: string
    excerpt: string
    timeToRead: number
  }[]
}

const IndexPhotoItem = ({ postEdges }:IndexPhotoItemProps) => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: `/photo${postEdge.node.fields.slug}`,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.frontmatter.tldr || postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });
  return <>
    {postList.map(post => (
      <Link to={post.path} key={post.path} className="noeffect">
        <Photo>
          <GatsbyImage image={post.cover.childImageSharp.gatsbyImageData} alt={post.title} />
        </Photo>
      </Link>
    ))}
  </>;
};

export default IndexPhotoItem;
