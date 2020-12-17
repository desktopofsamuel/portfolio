import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Link from "../common/GatsbyLink";

const Photo = styled.div``;

type IndexPhotoProps = {
  postEdges: {
    path: string
    tags: Array<string>
    cover: object
    title: string
    date: string
    excerpt: string
    timeToRead: number
  }[]
}

const IndexPhoto = ({ postEdges }:IndexPhotoProps) => {
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
  return (
    <>
      {postList.map(post => (
        <Link to={post.path} key={post.path} className="noeffect">
          <Photo>
            <Img fluid={post.cover.childImageSharp.fluid} alt={post.title} />
          </Photo>
        </Link>
      ))}
    </>
  );
};

export default IndexPhoto;
