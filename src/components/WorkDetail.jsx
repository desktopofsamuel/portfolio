import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import ReadOn from "./ReadOn";
import Fade from "react-reveal/Fade";
import { SmallText, H2 } from "components/common/TextStyles";

const Container = styled.div`
  display: grid;
  grid-gap: 4rem;
`;

const Wrapper = styled.div`
  border: 1px solid var(--color-secondary-light-100);
  padding: var(--var-padding-m);
  border-radius: 24px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 4fr 8fr;

  @media only screen and (max-width: 1280px) {
    display: block;
  }
`;

const Header = styled.div`
  /* grid-area: header; */

  h2 {
    font-size: var(--font-size-xl);
    margin-top: 1rem;
  }

  p {
    color: var(--color-text-secondary);
  }

  small {
    color: ${props => props.color};
  }
`;

const More = styled.div`
  /* grid-area: action; */
  align-self: center;
`;

const ImageContainer = styled.div`
  margin: 1rem 0;
`;

const WorkDetail = ({ postEdges }) => {
  function getPostList() {
    const postList = [];

    postEdges.forEach(postEdge => {
      postList.push({
        path: `/work${postEdge.node.fields.slug}`,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        photo: postEdge.node.frontmatter.photo,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        color: postEdge.node.frontmatter.color,
        subtitle: postEdge.node.frontmatter.subtitle,
        projectTitle: postEdge.node.frontmatter.projectTitle,
        shortTitle: postEdge.node.frontmatter.shortTitle,
        smallTitle: postEdge.node.frontmatter.smallTitle,
      });
    });
    return postList;
  }

  const postList = getPostList();

  return (
    <Container>
      {postList.map(post => (
        <Fade bottom cascade key={post.path}>
          <Wrapper>
            <Header color={post.color}>
              <SmallText> {post.projectTitle}</SmallText>
              <H2>{post.shortTitle}</H2>
              <p>{post.subtitle}</p>
              <More>
                <ReadOn text="View Process" href={post.path} />
              </More>
            </Header>
            <ImageContainer>
              <Image
                fluid={post.photo.childImageSharp.fluid}
                alt={post.title}
                fadeIn
              />
            </ImageContainer>
          </Wrapper>
        </Fade>
      ))}
    </Container>
  );
};

export default WorkDetail;
