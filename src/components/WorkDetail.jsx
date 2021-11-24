import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import ReadOn from "./ReadOn";
import Fade from "react-reveal/Fade";
import { SmallText, H2, BodyMain } from "./common/TextStyles";

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

const Wrapper = styled.div`
  border: 1px solid var(--color-secondary-light-100);
  padding: var(--var-padding-m);
  border-radius: 24px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 4fr 8fr;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const StyledTitle = styled(H2)`
  font-size: var(--font-size-xl);
  letter-spacing: -0.75px;
  margin-top: 1rem;
  color: ${props => (props.color ? `${props.color}` : "black")};
`;

const Header = styled.div``;

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
              <StyledTitle color={post.color}>{post.shortTitle}</StyledTitle>
              <BodyMain>{post.subtitle}</BodyMain>
              <ReadOn text="View Process" href={post.path} />
            </Header>
            <ImageContainer>
              <GatsbyImage
                image={post.photo.childImageSharp.gatsbyImageData}
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
