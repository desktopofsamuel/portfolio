import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "components/common/GatsbyLink";
import { GatsbyImage } from "gatsby-plugin-image";
import { H2, SmallText, BodyMain } from "components/common/TextStyles";

const Grid = styled(Link)`
  display: grid;
  grid-gap: var(--var-padding-m);
  grid-template-columns: minmax(300px, 40%) auto;
  margin-bottom: var(--var-padding-l);
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: var(--var-padding-m);
  }
`;

const Wrapper = styled.div``;

const Image = styled(GatsbyImage)``;

const BlogParallel = ({ postEdges }) => {
  const postList = [];
  postEdges.forEach(postEdge => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      category: postEdge.node.frontmatter.category,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return postList.map(post => (
    <Grid to={post.path} className="noeffect" key={post.title}>
      <Wrapper>
        {post.cover && (
          <Image
            image={post.cover.childImageSharp.gatsbyImageData}
            alt={post.title}
            loading="lazy"
          ></Image>
        )}
      </Wrapper>
      <Wrapper>
        <SmallText>
          {post.category} — {post.date}
        </SmallText>
        <H2>{post.title}</H2>
        <BodyMain>{post.excerpt}</BodyMain>
      </Wrapper>
    </Grid>
  ));
};

export default BlogParallel;
